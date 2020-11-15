import { createStore, combineReducers, Reducer, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const UPDATE_DATA = "UPDATE_DATA";

interface UpdateActionType {
  type: typeof UPDATE_DATA,
  payload: {
    dataUrl: string;
  }
}
interface IState {
  dataUrl: string;
}

export interface IApplicationState {
  frequency: IState
}

export const updateData = (dataUrl: string): UpdateActionType => ({
  type: UPDATE_DATA,
  payload: {
    dataUrl,
  },
});

const initialState: IState = {
  dataUrl: null,
};

const reducer = (state: IState = initialState, action: UpdateActionType): IState => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        dataUrl: action.payload.dataUrl,
      };
    default:
      return state;
  }
};

const rootReducer: Reducer<IApplicationState, AnyAction> = combineReducers({
  frequency: reducer,
});

const composeEnhancer = composeWithDevTools({});

export const store = createStore(
  rootReducer,
  composeEnhancer(),
);
