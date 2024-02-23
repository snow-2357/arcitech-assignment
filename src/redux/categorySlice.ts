import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
  value: 1 | -1;
}

const initialState: CategoryState = {
  value: 1,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value *= -1;
    },
  },
});

export const { toggle } = categorySlice.actions;
export default categorySlice.reducer;
