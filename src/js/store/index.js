import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import chatReducer from "../reducer";

export default function configureStore() {
  const middlewares = [thunk];

  const store = createStore(
    combineReducers({ chats: chatReducer }),
    applyMiddleware(...middlewares)
  );

  return store;
}
