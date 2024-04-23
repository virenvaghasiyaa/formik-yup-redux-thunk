import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = `https://jsonplaceholder.typicode.com`;

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (state, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/posts`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  posts: [],
  status: "",
  error: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.pending, (state) => {
      state.status = "loading";
      state.error = "";
    });
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.status = "success";
      state.error = "";
      state.posts = action.payload || [];
    });
    builder.addCase(fetchAllPosts.rejected, (state, action) => {
      state.status = "failed";
      state.error = "fetchAllPosts error";
      state.message = action.error.message;
    });

    //  add user
    //   builder.addCase(addUser.pending, (state) => {
    //     state.loading = true;
    //     state.error = false;
    //   });
    //   builder.addCase(addUser.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = false;
    //     state.users = action.payload;
    //   });
    //   builder.addCase(addUser.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = true;
    //     state.message = action.error.message;
    //   });

    //   //  add user
    //   builder.addCase(editUser.pending, (state) => {
    //     state.loading = true;
    //     state.error = false;
    //   });
    //   builder.addCase(editUser.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = false;
    //     state.users = action.payload;
    //   });
    //   builder.addCase(editUser.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = true;
    //     state.message = action.error.message;
    //   });
  },
});

export default postSlice.reducer;
