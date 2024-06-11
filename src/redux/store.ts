import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import discounterReducer from "./slices/discounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    discounter: discounterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
