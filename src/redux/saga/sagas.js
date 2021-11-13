import {
  Effect,
  put,
  call,
  takeLatest,
  takeEvery,
  SagaReturnType,
} from "redux-saga/effects";

import { List } from "redux/api/todolist";
import {
  GET_ADD_LIST,
  GET_MOCK_API,
  GET_REMOVE_LIST,
  HIT_ADD_LIST,
  HIT_MOCK_API,
  HIT_REMOVE_LIST,
} from "redux/actions";

function* getList() {
  const todos = yield call(List);
  yield put({ type: GET_MOCK_API, payload: todos });
}
function* addList({ payload }) {
  yield put({ type: GET_ADD_LIST, payload: payload });
}
function* removeList({ payload }) {
  yield put({ type: GET_REMOVE_LIST, payload: payload });
}

export default function* majoo() {
  yield takeEvery(HIT_MOCK_API, getList);
  yield takeEvery(HIT_ADD_LIST, addList);
  yield takeEvery(HIT_REMOVE_LIST, removeList);
}
