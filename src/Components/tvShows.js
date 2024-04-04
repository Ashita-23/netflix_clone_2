
import { useTV_Series,useTV_SeriesOnAir,useTV_SeriesPopular,useTV_SeriesTop_rated } from "../utils/useProjectApi"
// import Navigation from "./header"
import TvBackdropCard from "./tvBackDrop"
import TvSeriesCards from "./TvSeriesCards"
import TvSeries from "./Searies"
import {TvCardsTitle} from "../utils/hardCodedData"
import {  useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { options } from "../utils/apiOptions"
import { addToTvSeries, addToTvSeriesOnAir,addToTvPopulerSeries,addToTvTopSeriesRated} from "../RStore/netflixCardsData"




const Tv_Shows = ()=>{
const dispatch=useDispatch()
const Show_Series = useSelector((store)=>store.Series_Id.IsSeries)
const TV_Series =useSelector((store)=>store.Netflix_CardsData.TvSeriesData)
const TV_SeriesPopular = useSelector((store)=>store.Netflix_CardsData.TvPopulerSeriesData)
const TV_SeriesOnAir  =useSelector((store)=>store.Netflix_CardsData.TvSeriesOnAirData)
const TV_SeriesTop_rated =useSelector((store)=>store.Netflix_CardsData.TvTopSeriesRatedData)


useEffect(()=>{
 !TV_Series && getTvSeries()
 !TV_SeriesPopular  && getSeriesOnAir()
 !TV_SeriesOnAir   && getPopulerSeries()
!TV_SeriesTop_rated && getTopRatedSeries()
},[])

const getTvSeries= async()=>{
  try{
      const Api = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options)
      const Json = await Api.json()
  // console.log(Json,"TV_Series")
     dispatch(addToTvSeries(Json))
  }catch(e){
      console.log(e)
  }

}
const getSeriesOnAir= async()=>{
  try{
  const Api = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', options)
  const Json = await Api.json()
// console.log(Json,"TV_SeriesOnAir")
dispatch(addToTvSeriesOnAir(Json))
}catch(e){
  console.log(e)
}}
const getPopulerSeries= async()=>{
  try{
      const Api = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
      const Json = await Api.json()
  // console.log(Json,"TV_SeriesPopular")
  dispatch(addToTvPopulerSeries(Json))
  }catch(e){
      console.log(e)
  }
}
const getTopRatedSeries= async()=>{
  try{
  const Api = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
  const Json = await Api.json()
// console.log(Json,"TV_SeriesTop_rated")
dispatch(addToTvTopSeriesRated(Json))
}catch(e){
  console.log(e)
}}
    return(<>
  <div className=" h-[auto] w-[full] overflow-scroll no-scrollbar">
  <TvBackdropCard  />
  <div className=" bg-black relative">
    <div className="p-2 ">
                <TvSeriesCards  NowData={ TV_Series?.results} titleText={TvCardsTitle[0]} key={TV_Series?.results?.id} ></TvSeriesCards> 
                <TvSeriesCards  NowData={TV_SeriesPopular?.results} titleText={TvCardsTitle[1]} key={TV_SeriesPopular?.results?.id} ></TvSeriesCards>
               <TvSeriesCards  NowData={TV_SeriesOnAir?.results} titleText={TvCardsTitle[2]} key={TV_SeriesOnAir?.results?.id}></TvSeriesCards>
               <TvSeriesCards  NowData={TV_SeriesTop_rated?.results} titleText={TvCardsTitle[3]} key={TV_SeriesTop_rated?.results?.id}></TvSeriesCards>
               </div> 
    </div>  
  </div>
{Show_Series ? <div className=" absolute  h-[25rem] w-[100%] mt-[-94vh]  p-4 flex justify-center ">
           <TvSeries/>
        </div>  : " "}
    </>)
}

export default Tv_Shows