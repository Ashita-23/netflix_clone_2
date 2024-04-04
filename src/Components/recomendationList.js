import { useDispatch, useSelector } from "react-redux"
import { POSTER_API, options } from "../utils/apiOptions"
import { useEffect } from "react"
import ListCardsShimmer from "./shimmers/listIemsShimmer"
import {AddToMoviesListId,AddToTvListId} from "../RStore/myList"
import {AddMoviesListData,AddTvsListData} from "../RStore/mylistData"

const My_Watch_List = ()=>{
    const dispatch = useDispatch()
    const my_MovieListId = useSelector((store)=>store.My_List_id_Data.MovieslistId)
    const my_TvListId = useSelector((store)=>store.My_List_id_Data.TvlistId)
    const TvListdata = useSelector((store)=>store.My_List_Data.Tvs_List_data)
    const MovieListdata = useSelector((store)=>store.My_List_Data.Movies_List_data)
//     console.log(my_MovieListId,"my_MovieListId")
//     console.log(my_TvListId,"my_TvListId")
//     console.log(MovieListdata,"MovieListdata")
// console.log(TvListdata,"TvlistDAta")


const getGenreMvid= async()=>{
    try{const api = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en',options)
    const result = await api.json()
    const resultId = result.genres.slice(6,10)
    dispatch(AddToMoviesListId(resultId))}catch(e){
        console.log(e)
    }
}
const getGenreTvid= async()=>{
    try{const api = await fetch('https://api.themoviedb.org/3/genre/tv/list?language=en',options)
    const result = await api.json()
    const resultId = result?.genres.slice(4,8)
    dispatch(AddToTvListId(resultId))}catch(e){
        console.log(e)
    }
}
const  MoviesRecomendation= async(dataId)=>{
    try{
    const MR_API= await fetch('https://api.themoviedb.org/3/movie/'+dataId+'/recommendations?language=en-US&page=1',options)
    const MR_API_RESULT= await MR_API.json()
    return MR_API_RESULT}catch(e){console.log(e)}
}
const  TvSeriesRecomendation= async(dataId)=>{
    try{
    const TR_API= await fetch('https://api.themoviedb.org/3/tv/'+dataId+'/recommendations?language=en-US&page=1',options)
    const TR_API_RESULT= await TR_API.json()
    return TR_API_RESULT}catch(e){console.log(e)}
}

useEffect(()=>{

   !my_MovieListId && getGenreMvid()
   !my_TvListId && getGenreTvid()
   if(my_MovieListId&&my_TvListId){
    !MovieListdata &&  getCallMidArray()
    !TvListdata && getCallTidArray()
   }
 
},[])
useEffect(()=>{

},[])


const getCallMidArray = async () => {
    try{
    const callMidApi= my_MovieListId&&my_MovieListId?.map((data)=>MoviesRecomendation(data.id)) 
    const resultsArray = await Promise.all(callMidApi)
    const filterDataItem = resultsArray.filter((data)=>data?.results?.length>0)
   dispatch(AddMoviesListData(filterDataItem))}catch(e){
        console.log(e)
    }
}

const getCallTidArray = async () => {
    try{
    const callTidApi= my_TvListId&&my_TvListId?.map((data)=>TvSeriesRecomendation(data.id)) 
    const resultsArray = await Promise.all(callTidApi)
    const filterDataItem = resultsArray.filter((data)=>data?.results?.length>0)
    dispatch(AddTvsListData(filterDataItem))  }catch(e){
        console.log(e)
    }
    
}

    return(<div className=" bg-black h-[100vh] w-[full] flex justify-center pt-[5rem] pb-[0.5rem] overflow-scroll no-scrollbar">
    <div className="  h-[auto] w-11/12 xxsm:w-[100%] xsm:w-[100%] sm:w-[100%]  md: lg: xl 2xl:3xl:4xl:5xl:6xl:  overflow-scroll no-scrollbar ">
        { !MovieListdata ? <ListCardsShimmer keyData={Math.random()*"3ab"}/>:<div className=" p-4 my-2  bg-slate-900 bg-opacity-80 ">
                <p className="text-[1.5rem] bg-slate-700 font-medium text-slate-900 p-2 xxsm:text-[1rem] xsm:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg-text-[1.4rem]">Movie List</p>
                <div className=" flex flex-col justify-around " >
              {
                MovieListdata && MovieListdata?.map((data,index)=><List_Cards_Outer data={data} heading={my_MovieListId[index]} />)
              } 
               </div>
            </div> }
          {!TvListdata? <ListCardsShimmer keyData={Math.random()*"2cd"}/>:<div className="p-4 my-2 bg-slate-700 bg-opacity-80">
                <p className="text-[1.5rem] bg-slate-900  font-medium text-slate-600 p-2 xxsm:text-[1rem] xsm:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg-text-[1.4rem">Tv Searies</p>
                <div className=" flex flex-col justify-around " >
              {
                TvListdata && TvListdata?.map((data,index)=><List_Cards_Outer data={data} heading={ my_TvListId[index]} />)
              } 
               </div>
            </div>}
            </div>
    </div>)
}
export const List_Cards_Outer = ({data,heading})=>{
    return(<div className="my-1">
    <p className="text-[1.3rem] text-white px-[0.6rem] xxsm:text-[0.9rem] xsm:text-[0.9rem] sm:text-[1.1rem] md:text-[1.2rem] lg-text-[1.2rem]">{ heading?.name}</p>
    <div className="flex  overflow-scroll p-1 no-scrollbar ">
        {data&&data?.results?.map((data)=><My_List_cards data={data}/>)}
        </div>
    </div>)
}

export const My_List_cards = ({data})=>{
    return(<img src={POSTER_API+data?.poster_path} alt="poster" className="w-[130px] mx-2  xxsm:w-[80px]  xsm:w-[90px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[120px] " key={data?.vote_count} ></img>)}
export default My_Watch_List