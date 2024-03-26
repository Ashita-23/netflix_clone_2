import { createSlice } from "@reduxjs/toolkit";

const ShowSeries = createSlice({
    name:"show Tv Series",
    initialState:{
        IsSeries:false
    },
    reducers:{
        AddShowSeries:(state)=>{
            state.IsSeries= !state.IsSeries
        },
       
    }
})


export const {AddShowSeries}=ShowSeries.actions
export default ShowSeries.reducer