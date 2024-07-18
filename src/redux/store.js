// store.js
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";

import noteReducer from "./noteReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["note"],
};

const rootReducer = combineReducers({
  note: noteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export default rootReducer;
