import { createStore, combineReducers, Reducer, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const UPDATE_COUNTER = "UPDATE_COUNTER";

interface UpdateActionType {
  type: typeof UPDATE_COUNTER,
  payload: {
    counter: number;
  }
}
interface IState {
  counter: number;
}

export interface IApplicationState {
  frequency: IState
}

export const updateCounter = (counter: number): UpdateActionType => ({
  type: UPDATE_COUNTER,
  payload: {
    counter,
  },
});

const initialState: IState = {
  counter: 0,
};

const reducer = (state: IState = initialState, action: UpdateActionType): IState => {
  switch (action.type) {
    case UPDATE_COUNTER:
      return {
        ...state,
        counter: action.payload.counter,
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
