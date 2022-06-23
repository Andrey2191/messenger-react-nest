import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  email: null,
  token: null,
  id: null,
  role: null,
  error: null,
};

export const login = createAsyncThunk(
  "login",
  async ({ email, password }, { rejectWithValue, getState }) => {
    try {
      console.log("login");
      const user = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log(user);
      return user.data;
    } catch (error) {
      console.log({ error });
      return rejectWithValue({ error: error.message });
    }
  }
);

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.role = action.payload.role;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.uid;
      state.role = action.payload.role;
      state.error = null;
    });
  },
});

export default loginSlice.reducer;
