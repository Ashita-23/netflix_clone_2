import { createSlice } from "@reduxjs/toolkit";




const My_List_id_Data = createSlice({
    name:"my list id  data",
    initialState:{
        MovieslistId:null,
        TvlistId:null,
    },
    reducers:{
        AddToMoviesListId:(state,action)=>{
            state.MovieslistId=action.payload
        },
        AddToTvListId:(state,action)=>{
            state.TvlistId=action.payload
        },
        
    }
})

export const {AddToMoviesListId,AddToTvListId} = My_List_id_Data.actions
export default My_List_id_Data.reducer