import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginUrl = `https://fakestoreapi.com`;

export const loginUser = createAsyncThunk(
  "user/login",
  async (state, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${loginUrl}/auth/login`, state, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  user: {},
  status: "",
  error: "",
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = "rejected";
      state.status = action.error.message;
      state.message = "something went wrong check it!";
    });
  },
});

export default authSlice.reducer;
