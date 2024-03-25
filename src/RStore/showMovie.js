import { createSlice } from "@reduxjs/toolkit";

const ShowMovie = createSlice({
    name:"show movie",
    initialState:{
        IsMovie:false
    },
    reducers:{
        AddShowMovie:(state)=>{
            state.IsMovie= !state.IsMovie
        },
       
    }
})


export const {AddShowMovie}=ShowMovie.actions
export default ShowMovie.reducer