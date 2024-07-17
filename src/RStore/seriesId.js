import { createSlice } from "@reduxjs/toolkit";


const SeriesId = createSlice({
    name:"TV_SeriesId",
    initialState:{
        id:[],

    },
    reducers:{
        addSeriesId:(state,action)=>{
              if(state.id.length > 0){
                state.id.shift()
              }
         state.id.push(action.payload)

        },
    //     if(state.id.length > 0){
    //         state.id.shift()
    //       }
    //  state.id.push(action.payload)
       
    }
})


export const{ addSeriesId} = SeriesId.actions
export default SeriesId.reducer