import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/postsSlices";
import authReducer from "../features/authSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
});

export default store;
