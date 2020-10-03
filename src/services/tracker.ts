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

const searchOperationPartTimestamp = (
  x: OperationPartTimestamp,
  y: OperationPartTimestamp,
): boolean => x.source === y.source && x.action === y.action && x.position === y.position && x.state === "started";

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
      affectedItems: operationPartTimestamp.affectedItems || started.affectedItems,
    });

    this.operationPartTimestampList.splice(index, 1);
  }

  /**
   * TODO: refactor this garbage
   */
  private setOperationPart = (operationPart: OperationPart) => {
    console.log(operationPart);
    switch (operationPart.source) {
      case TrackerSources.MOBX_V1:
      case TrackerSources.MOBX_V2:
        if (!this.mobxOperation && operationPart.position === TrackerPositions.MOBX_ACTION_INIT) {
          this.mobxOperation = {
            source: operationPart.source,
            action: operationPart.action,
            initTime: operationPart.time,
            commitTime: null,
            affectedItems: operationPart.affectedItems || null,
          };
        } else if (operationPart.position === TrackerPositions.MOBX_ACTION_COMMIT) {
          const operation = this.mobxOperation;
          operation.commitTime = operationPart.time;
          operation.affectedItems = operationPart.affectedItems;
          sendMobxObservableActionOperationTrackerInfo(operation);
          this.mobxOperation = null;
        }
        break;
      default:
      case TrackerSources.REDUX_V1:
        if (!this.reduxSagaOperation && operationPart.position === TrackerPositions.REDUX_SAGA) {
          this.reduxSagaOperation = {
            source: operationPart.source,
            action: operationPart.action,
            sagaTime: operationPart.time,
            reduceTime: null,
            commitTime: null,
            affectedItems: operationPart.affectedItems || null,
          };
          return;
        }
        if (this.reduxSagaOperation) {
          switch (operationPart.position) {
            case TrackerPositions.REDUX_REDUCE:
              this.reduxSagaOperation.reduceTime = operationPart.time;
              break;
            case TrackerPositions.REDUX_COMMIT:
              sendReduxSagaOperationTrackerInfo({
                ...this.reduxSagaOperation,
                commitTime: operationPart.time,
                affectedItems: operationPart.affectedItems,

              });
              this.reduxSagaOperation = null;
              break;
            default:
              break;
          }
          return;
        }
        if (!this.reduxOperation && operationPart.position === TrackerPositions.REDUX_REDUCE) {
          this.reduxOperation = {
            source: operationPart.source,
            action: operationPart.action,
            reduceTime: operationPart.time,
            commitTime: null,
            affectedItems: operationPart.affectedItems || null,
          };
          return;
        }
        if (this.reduxOperation && operationPart.position === TrackerPositions.REDUX_COMMIT) {
          this.reduxOperation.commitTime = operationPart.time;
          this.reduxOperation.affectedItems = operationPart.affectedItems;
          sendReduxOperationTrackerInfo(this.reduxOperation);
          this.reduxOperation = null;
        }
        break;
    }
  }
}

export const TrackerService = new TrackerServiceClass();
