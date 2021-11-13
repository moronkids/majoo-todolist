/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import listTodo from "redux/reducers/todolist";
const persistListTodo = {
  key: "list",
  storage: storage,
};
const appReducer = combineReducers({
  list: persistReducer(persistListTodo, listTodo),
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
