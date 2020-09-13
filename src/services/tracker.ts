import {
  OperationPartTimestamp,
  OperationPart,
  ReduxOperation,
  MobxObservableActionOperation,
  ReduxSagaOperation,
  TrackerSources,
  TrackerPositions,
} from "../../shared/interfaces";

import {
  sendMobxObservableActionOperationTrackerInfo,
  sendReduxOperationTrackerInfo,
  sendReduxSagaOperationTrackerInfo,
} from "../axios/tracker";

const searchOperationPartTimestamp = (x: OperationPartTimestamp, y: OperationPartTimestamp) => x.source === y.source && x.action === y.action && x.position === y.position && x.state === "started";

class TrackerServiceClass {
  operationPartTimestampList: Array<OperationPartTimestamp> = [];

  reduxOperation: ReduxOperation = null;

  reduxSagaOperation: ReduxSagaOperation = null;

  mobxOperation: MobxObservableActionOperation = null;

  public setTimeStamps = (operationPartTimestamp: OperationPartTimestamp) => {
    console.log(operationPartTimestamp);

    const index = this.operationPartTimestampList.findIndex(
      (x) => searchOperationPartTimestamp(x, operationPartTimestamp),
    );

    const started = this.operationPartTimestampList[index];

    if (!started) {
      this.operationPartTimestampList.push(operationPartTimestamp);
      return;
    }

    this.setOperationPart({
      source: started.source,
      position: started.position,
      action: started.action,
      time: operationPartTimestamp.time - started.time,
    });

    this.operationPartTimestampList.splice(index, 1);
  }

  /**
   * TODO: refactor this garbage
   */
  private setOperationPart = (operationPart: OperationPart) => {
    console.log(operationPart);
    switch (operationPart.source) {
      case TrackerSources.MobxV1:
        if (!this.mobxOperation && operationPart.position === TrackerPositions.MobxActionInit) {
          this.mobxOperation = {
            source: operationPart.source,
            action: operationPart.action,
            initTime: operationPart.time,
            commitTime: null,
          };
        } else if (operationPart.position === TrackerPositions.MobxActionCommit) {
          const operation = this.mobxOperation;
          operation.commitTime = operationPart.time;
          sendMobxObservableActionOperationTrackerInfo(operation);
          this.mobxOperation = null;
        }
        break;
      default:
      case TrackerSources.ReduxV1:
        if (!this.reduxSagaOperation && operationPart.position === TrackerPositions.ReduxSaga) {
          this.reduxSagaOperation = {
            source: operationPart.source,
            action: operationPart.action,
            sagaTime: operationPart.time,
            reduceTime: null,
            commitTime: null,
          };
          return;
        }
        if (this.reduxSagaOperation) {
          switch (operationPart.position) {
            case TrackerPositions.ReduxReduce:
              this.reduxSagaOperation.reduceTime = operationPart.time;
              break;
            case TrackerPositions.ReduxCommit:
              sendReduxSagaOperationTrackerInfo({
                ...this.reduxSagaOperation,
                commitTime: operationPart.time,
              });
              this.reduxSagaOperation = null;
              break;
            default:
              break;
          }
          return;
        }
        if (!this.reduxOperation && operationPart.position === TrackerPositions.ReduxReduce) {
          this.reduxOperation = {
            source: operationPart.source,
            action: operationPart.action,
            reduceTime: operationPart.time,
            commitTime: null,
          };
          return;
        }
        if (this.reduxOperation && operationPart.position === TrackerPositions.ReduxCommit) {
          this.reduxOperation.commitTime = operationPart.time;
          sendReduxOperationTrackerInfo(this.reduxOperation);
          this.reduxOperation = null;
        }
        break;
    }
  }
}

export const TrackerService = new TrackerServiceClass();
