import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
  value: 1 | -1 | 0;
}

const initialState: CategoryState = {
  value: 1,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    increase: (state) => {
      state.value = 1;
    },
    decrees: (state) => {
      state.value = -1;
    },
    serial: (state) => {
      state.value = 0;
    },
  },
});

export const { increase, decrees, serial } = categorySlice.actions;
export default categorySlice.reducer;
