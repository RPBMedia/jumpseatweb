import { createStore, applyMiddleware } from "redux";

// Logger with default options
import logger from "redux-logger";

import reducer from "./modules/app/reducer";

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, applyMiddleware(logger));
  return store;
}