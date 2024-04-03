import { createSlice } from "@reduxjs/toolkit";


const MY_LIST_DATA = createSlice({
    name:"my lists all promise data",
    initialState:{
        Movies_List_data:null,
        Tvs_List_data:null,
    },
    reducers:{
        AddMoviesListData:(state,action)=>{
            state.Movies_List_data=action.payload
        },
        AddTvsListData:(state,action)=>{
            state.Tvs_List_data=action.payload
        }
    }
})


export const {AddMoviesListData,AddTvsListData} = MY_LIST_DATA.actions
export default MY_LIST_DATA.reducer