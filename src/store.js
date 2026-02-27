import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarShow: true,
  userRole: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSidebar: (state, action) => {
      state.sidebarShow = action.payload;
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
  },
});

export const { setSidebar, setUserRole } = appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer,
});

export default store;