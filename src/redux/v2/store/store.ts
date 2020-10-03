import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootSaga } from "./rootSaga";
import { rootReducer } from "./rootReducer";

const composeEnhancer = composeWithDevTools({});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
