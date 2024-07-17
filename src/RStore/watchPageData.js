import { createSlice } from "@reduxjs/toolkit";


const WatchPagedata = createSlice({
    name:"watch page data",
    initialState:{
        currentData : null 
    },
    reducers:{
        addToWatchPage:(state,action)=>{
            state.currentData=action.payload
        }
    }
})

export const {addToWatchPage}= WatchPagedata.actions
export default WatchPagedata.reducer