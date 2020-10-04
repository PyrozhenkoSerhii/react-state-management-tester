/* eslint-disable max-len */
import {
  OperationPartTimestamp,
  OperationPart,
  ReduxOperation,
  MobxOperation,
  ReduxSagaOperation,
  TrackerSources,
  TrackerPositions,
  ContextOperation,
} from "../../shared/interfaces";

import {
  sendMobxOperationTrackerInfo,
  sendReduxOperationTrackerInfo,
  sendReduxSagaOperationTrackerInfo,
  sendContextOperationTrackerInfo,
} from "../axios/tracker";

const searchOperationPartTimestamp = (
  x: OperationPartTimestamp,
  y: OperationPartTimestamp,
): boolean => x.source === y.source && x.action === y.action && x.position === y.position && x.state === "started";

class TrackerServiceClass {
  operationPartTimestampList: Array<OperationPartTimestamp> = [];

  reduxOperation: ReduxOperation = null;

  reduxSagaOperation: ReduxSagaOperation = null;

  mobxOperation: MobxOperation = null;

  contextOperation: ContextOperation = null;

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

    const operationPartTime = operationPartTimestamp.time - started.time;

    this.setOperationPart({
      source: started.source,
      position: started.position,
      action: started.action,
      time: operationPartTime === 0 ? 1 : operationPartTime,
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
          sendMobxOperationTrackerInfo(operation);
          this.mobxOperation = null;
        }
        break;
      case TrackerSources.REDUX_V1:
      case TrackerSources.REDUX_V2:
        if (!this.reduxSagaOperation && operationPart.position === TrackerPositions.REDUX_DISPATCH_SAGA) {
          this.reduxSagaOperation = {
            source: operationPart.source,
            action: operationPart.action,
            dispatchSagaTime: operationPart.time,
            dispatchReducerTime: null,
            commitTime: null,
            affectedItems: operationPart.affectedItems || null,
          };
          return;
        }
        if (this.reduxSagaOperation) {
          switch (operationPart.position) {
            case TrackerPositions.REDUX_DISPATCH_REDUCER:
              this.reduxSagaOperation.dispatchReducerTime = operationPart.time;
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
        if (!this.reduxOperation && operationPart.position === TrackerPositions.REDUX_DISPATCH_REDUCER) {
          this.reduxOperation = {
            source: operationPart.source,
            action: operationPart.action,
            dispatchReducerTime: operationPart.time,
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
      case TrackerSources.CONTEXT_V1:
        if (!this.contextOperation && operationPart.position === TrackerPositions.CONTEXT_INIT) {
          this.contextOperation = {
            source: operationPart.source,
            action: operationPart.action,
            initTime: operationPart.time,
            dispatchReducerTime: null,
            commitTime: null,
            affectedItems: operationPart.affectedItems || null,
          };
        } else if (this.contextOperation && operationPart.position === TrackerPositions.CONTEXT_DISPATCH_REDUCER) {
          this.contextOperation.dispatchReducerTime = operationPart.time;
        } else if (this.contextOperation && operationPart.position === TrackerPositions.CONTEXT_COMMIT) {
          const operation = this.contextOperation;
          operation.commitTime = operationPart.time;
          operation.affectedItems = operationPart.affectedItems;
          sendContextOperationTrackerInfo(operation);
          this.contextOperation = null;
        }
        break;
      default:
        break;
    }
  }
}

export const TrackerService = new TrackerServiceClass();
