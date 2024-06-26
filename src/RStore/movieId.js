import { createSlice } from "@reduxjs/toolkit";


const MovieId = createSlice({
    name:"movie id",
    initialState:{
        id:[],
       addShowMovie:false
    },
    reducers:{
        addMovieID:(state,action)=>{
              if(state.id.length > 0){
                state.id.shift()
              }
         state.id.push(action.payload)
//   console.log(iterms,"from slice")
        
        },
        addShowMovie:(state,action)=>{
        state.addShowMovie=action.payload
        }
    }
})


export const {addMovieID, addShowMovie }=MovieId.actions
export default MovieId.reducer