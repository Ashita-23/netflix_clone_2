import { createSlice } from "@reduxjs/toolkit";


const TvSearchToggle = createSlice({
    name : "Tv search",
    initialState:{
        IsTVCard:true
    },
    reducers:{
        AddShowTvCard:(state)=>{
            state.IsTVCard=!state.IsTVCard
        }
    }
})


export const {AddShowTvCard}=TvSearchToggle.actions
export default TvSearchToggle.reducer