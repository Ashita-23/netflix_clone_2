import { createSlice } from "@reduxjs/toolkit";


const FormToogle = createSlice({
    name:"Formtoggle",
    initialState:{
        IsSignInOrUp:true,
    },
    reducers:{
        AddSignIn:(state)=>{
            state.IsSignInOrUp=!state.IsSignInOrUp
        }
    }

})

export const {AddSignIn}= FormToogle.actions
export default FormToogle.reducer