import { createSlice } from "@reduxjs/toolkit";


const SearchToggle = createSlice({
    name : "searchToggle",
    initialState:{
        IsShow:true
    },
    reducers:{
        AddToggle:(state)=>{
    state.IsShow = !state.IsShow
        }
    }
})

export const {AddToggle}=SearchToggle.actions
export default SearchToggle.reducer