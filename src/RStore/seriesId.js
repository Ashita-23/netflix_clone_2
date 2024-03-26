import { createSlice } from "@reduxjs/toolkit";


const SeriesId = createSlice({
    name:"Series Id",
    initialState:{
        id:[]
    },
    reducers:{
        addSeriesId:(state,action)=>{
              if(state.id.length > 0){
                state.id.shift()
              }
         state.id.push(action.payload)
//   console.log(iterms,"from slice")
        
        }
    }
})


export const {addSeriesId}=SeriesId.actions
export default SeriesId.reducer