import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosConfig";

// Thunk pour login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login/", credentials);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      // Vérifie si la réponse de l'erreur existe
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        // Retourne une erreur générique si aucune réponse n'est disponible
        return rejectWithValue({ message: "Une erreur est survenue" });
      }
    }
  }
);

// Thunk pour logout
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  localStorage.removeItem("token");
});

// Initial state
const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload.member;
        state.token = action.payload.token;
        state.type = action.payload.member.type;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.type = null;
      });
  },
});

export default authSlice.reducer;
