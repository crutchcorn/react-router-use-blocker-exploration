import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Blocker {
  id: string;
  message: string;
}

const initialState = {
  blockers: [] as Blocker[],
};

const blockerSlice = createSlice({
  name: "blocker",
  initialState,
  reducers: {
    removeBlocker(state, action: PayloadAction<Blocker>) {
      state.blockers = state.blockers.filter(
        (blocker) => blocker.id !== action.payload.id,
      );
    },
    addBlocker(state, action: PayloadAction<Blocker>) {
      state.blockers.push(action.payload);
    },
  },
});

export const { removeBlocker, addBlocker } = blockerSlice.actions;
export const blockerReducer = blockerSlice.reducer;
