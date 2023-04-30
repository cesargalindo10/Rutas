import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persistLocalStorage } from "../../utilities/LocalStorage";
import { Roles } from "../../models/roles";
const initialState = {
  id: "",
  name: "",
  email: "",
  rol:Roles
};
export const UserKey = 'user'
export const userSlice = createSlice({
  name: "user",
  initialState:localStorage.getItem(UserKey)? JSON.parse(localStorage.getItem(UserKey)):initialState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage(UserKey,action.payload)
      return action.payload},
    updateUser:(state,action)=>{
      const res={...state,...action.payload};
      persistLocalStorage(UserKey,res)
      return res
    },
    resetUser:()=>{
      clearLocalStorage(UserKey);
      return initialState;
    }
  },
});
export const {createUser,updateUser,resetUser} = userSlice.actions;
export default userSlice.reducer;

