import { createSlice } from "@reduxjs/toolkit";

interface TimePeriodState {
  value: number;
}

const initialState: TimePeriodState = {
  value: 1,
};

const timePeriodSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    week: (state) => {
      state.value = 1;
    },
    daily: (state) => {
      state.value = -1;
    },
  },
});

export const { week, daily } = timePeriodSlice.actions;
export default timePeriodSlice.reducer;
