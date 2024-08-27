import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | object;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const carAuthSlice = createSlice({
  name: "carAuth",
  initialState,
  reducers: {
    setCarUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;

      console.log("Limon Log IN ");
      console.log(state.token);
    },
    carUserlogout: (state) => {
      console.log("Limn Log out");
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCarUser, carUserlogout } = carAuthSlice.actions;

export default carAuthSlice.reducer;
export const useCurrentToken = (state: RootState) => state.carAuth.token;
export const selectCurrentUser = (state: RootState) => state.carAuth.user;
