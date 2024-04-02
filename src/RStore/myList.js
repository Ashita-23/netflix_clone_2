import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";



const My_List_Data = createSlice({
    name:"my list data",
    initialState:{
        MovieslistId:null,
        TvlistId:null,
    },
    reducers:{
        AddToMoviesListId:(state,action)=>{
            // if(state.MovieslistId.length > 0){
            //     state.MovieslistId.shift()
            // }
            state.MovieslistId=action.payload
        },
        AddToTvListId:(state,action)=>{
            // if(state.length > 0){
            //     state.TvlistId.shift()
            // }
            state.TvlistId=action.payload
        },
        
    }
})

export const {AddToMoviesListId,AddToTvListId} = My_List_Data.actions
export default My_List_Data.reducer