import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name:"signUp_UserData",
    initialState:{
        items:[]
    },
    reducers:{
        AddUser:(state,action)=>{
        state.items.push(action.payload)
        },
        RemoveUser:(state,action)=>{
       return []
        },

    }
})


export const {AddUser,RemoveUser}=UserSlice.actions
export default UserSlice.reducer