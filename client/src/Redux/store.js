import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./reducers/task.reducer";
import { userReducer } from "./reducers/user.reducer";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/root.saga";

const sagaMiddleware = createSagaMiddleware();

const initState = {
  tasks: {
    sLoading: false,
    value: [],
    error: null,
  },
  users: {
    sLoading: false,
    value: [],
    error: null,
  },
};

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    users: userReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

// sagaMiddleware.run(rootSaga);

export default store;
