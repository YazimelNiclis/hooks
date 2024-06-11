import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DiscounterounterState {
  value: number;
}

const initialState: DiscounterounterState = {
  value: 0,
};

export const discounterSlice = createSlice({
  name: "discounter",
  initialState,
  reducers: {
    increment2: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement2: (state) => {
      state.value -= 1;
    },
    incrementByAmount2: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment2, decrement2, incrementByAmount2 } =
  discounterSlice.actions;

export default discounterSlice.reducer;
