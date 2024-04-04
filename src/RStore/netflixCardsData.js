import { createSlice } from "@reduxjs/toolkit";


const netflixCardsData = createSlice({
    name:"Movies Cards Data",
    initialState:{
        MoviesPlayingData:null,
        MoviesTopRatedData:null,
        MoviesUpComingData:null,
        TvSeriesData:null,
        TvSeriesOnAirData:null,
        TvPopulerSeriesData:null,
       TvTopSeriesRatedData:null,
    },
    reducers:{
        addToNowPlaying:(state,action)=>{state.MoviesPlayingData=action.payload},
        addToTopRated:(state,action)=>{state.MoviesTopRatedData=action.payload},
        addToUpComing:(state,action)=>{state.MoviesUpComingData=action.payload},

        addToTvSeries:(state,action)=>{state.TvSeriesData=action.payload},
        addToTvSeriesOnAir:(state,action)=>{state.TvSeriesOnAirData=action.payload},
        addToTvPopulerSeries:(state,action)=>{state.TvPopulerSeriesData=action.payload},
        addToTvTopSeriesRated:(state,action)=>{state.TvTopSeriesRatedData=action.payload},
    }
})

export const {addToNowPlaying,addToTopRated,addToUpComing, addToTvSeries, addToTvSeriesOnAir, addToTvPopulerSeries, addToTvTopSeriesRated}=netflixCardsData.actions
export default netflixCardsData.reducer