import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        currentUser:null
    },
    reducers:{
        signIn:(state,action)=>{
            state.currentUser=action.payload;
        },
        signOut:(state)=>{
            state.currentUser=null;
        },
        updateUser:(state,action)=>{
            state.currentUser=action.payload;
        }
    }
})

export default userSlice.reducer;
export const {signIn,signOut,updateUser}=userSlice.actions;