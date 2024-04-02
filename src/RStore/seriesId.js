import { createSlice } from "@reduxjs/toolkit";


const SeriesId = createSlice({
    name:"Series Id",
    initialState:{
        id:[],
        IsSeries:false
    },
    reducers:{
        addSeriesId:(state,action)=>{
              if(state.id.length > 0){
                state.id.shift()
              }
         state.id.push(action.payload)
//   console.log(iterms,"from slice"
        },
        AddShowSeries:(state)=>{
            state.IsSeries= !state.IsSeries
        },
       
    }
})


export const {addSeriesId,AddShowSeries}=SeriesId.actions
export default SeriesId.reducer