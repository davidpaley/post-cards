import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface PaginationState {
  value: number;
}

const initialState: PaginationState = {
  value: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = paginationSlice.actions;

export const selectPagination = (state: RootState) => state.pagination.value;

export default paginationSlice.reducer;
