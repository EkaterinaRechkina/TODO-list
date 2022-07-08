import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./reducers/task.reducer";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/root.saga";

const sagaMiddleware = createSagaMiddleware();

const initState = {
  tasks: {
    sLoading: false,
    value: [],
    error: null,
  },
};

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

// sagaMiddleware.run(rootSaga);

export default store;
