import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import paginationReducer from "../features/pagination/paginationSlice";
import { postsApi } from "../services/postApi";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
