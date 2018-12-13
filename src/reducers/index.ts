import { combineReducers, createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { animations } from "./animations";

const rootReducer = combineReducers({
  animations
});
const epicMiddleware = createEpicMiddleware();
export const getStore = () => {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  return store;
};
