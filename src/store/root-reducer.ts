import { combineReducers } from "@reduxjs/toolkit";
import { blockerReducer } from "./blocker-slice.ts";

export const rootReducer = combineReducers({
  blocker: blockerReducer
});
