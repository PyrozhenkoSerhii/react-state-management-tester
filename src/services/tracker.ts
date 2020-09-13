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

  private setOperationPart = (operationPart: OperationPart) => {
    console.log(operationPart);
    switch (operationPart.source) {
      case TrackerSources.MobxV1:
        console.log(this.mobxOperation, operationPart.position);
        if (!this.mobxOperation && operationPart.position === TrackerPositions.MobxActionInit) {
          this.mobxOperation = {
            source: operationPart.source,
            action: operationPart.action,
            initTime: operationPart.time,
            commitTime: null,
          };
          console.log(this.mobxOperation);
        } else if (operationPart.position === TrackerPositions.MobxActionCommit) {
          const operation = this.mobxOperation;
          operation.commitTime = operationPart.time;
          sendMobxObservableActionOperationTrackerInfo(operation);
          this.mobxOperation = null;
        }
        break;
      default:
        break;
    }
  }
}

export const TrackerService = new TrackerServiceClass();
