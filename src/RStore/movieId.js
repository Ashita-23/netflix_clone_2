import { createSlice } from "@reduxjs/toolkit";


const MovieId = createSlice({
    name:"movie_id",
    initialState:{
        id:[],
      
    },
    reducers:{
        addMovieID:(state,action)=>{
              if(state.id.length > 0){
                state.id.shift()
              }
         state.id.push(action.payload)
//   console.log(iterms,"from slice")
        
        },
        
    }
})


export const {addMovieID } = MovieId.actions
export default MovieId.reducer