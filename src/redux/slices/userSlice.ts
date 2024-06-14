import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IUser } from "../../models/IUser";
import { userService } from "../../services/api.service";

type UserSliceType = {
  users: IUser[];
  user: IUser | null;
  isLoaded: boolean;
};

const userInitialState: UserSliceType = {
  users: [],
  user: null,
  isLoaded: false,
};

const loadUsers = createAsyncThunk(
  "userSlice/loadUsers",
  async (_, thunkAPI) => {
    try {
      const users = await userService.getAll();
      return thunkAPI.fulfillWithValue(users);
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

const loadUserById = createAsyncThunk(
  "userSlice/loadUserById",
  async (id: string | undefined, thunkAPI) => {
    if (id) {
      try {
        const user = await userService.getById(id);
        thunkAPI.dispatch(userActions.changeLoadState(true));
        return thunkAPI.fulfillWithValue(user);
      } catch (e) {
        const error = e as AxiosError;
        return thunkAPI.rejectWithValue(error.response?.data);
      }
    }
    return null;
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    changeLoadState: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(loadUsers.rejected, (state) => {
      state.users = [];
    });
    builder.addCase(loadUserById.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(loadUserById.rejected, (state) => {
      state.user = null;
    });
    builder.addMatcher(isFulfilled(loadUserById, loadUsers), (state) => {
      state.isLoaded = true;
    });
  },
});

export const userActions = {
  ...userSlice.actions,
  loadUsers,
  loadUserById,
};
