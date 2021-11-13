import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "redux/saga/sagas";
import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import rootReducer from "redux/reducers/index"; // 3 reducers -> 1. auth, 2. loading 3. project
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware)) // aktifin redux dev tools
  //  applyMiddleware(sagaMiddleware) // aktifin redux dev tools
);

// sagaMiddleware.run(rootSaga);
// export default store

const persistor = persistStore(store);

// Run redux-saga
sagaMiddleware.run(rootSaga);

export { store, persistor };
