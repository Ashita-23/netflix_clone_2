
import {videoCardsTitle} from "../utils/hardCodedData"
import NowPlayingCards from "./videoCards"
// import { options } from "../utils/apiOptions"
import BackdropCard from "./backbrop"
import Movies from "./Movies"
import { useSelector,useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { AddShowMovie } from "../RStore/showMovie"
// import Mt_ShimmerCards from "./shimmers/SMCards" 
import {NOW_PLAYING_API,TOP_RATED,UP_COMING ,options} from "../utils/apiOptions"
// import { AddToMoviesList } from "../RStore/myList"





const Browse = ()=>{
    const Show_Movie=useSelector((store)=>store.Show_Movie.IsMovie)
    const Movie_Id=useSelector((store)=>store.Movie_Id.id)
   
    // console.log(Show_Movie,"Show_Movie")
    // console.log(Movie_Id,"MovieId")
    const [nowPlayingApi,setNowPlayingApi] =useState()
    // console.log(nowPlayingApi,"nowPlayingApi")
    // console.log(nowLatestApi,"nowLatestApi")
    const [nowTop_RatedApi,setNowTop_RatedApi] = useState()
    const dispatch = useDispatch()

    
    const [nowUp_ComingApi,setNowUp_ComingApi] = useState()


    useEffect(()=>{
        getPlayingData()
        getTopRatedData()
        getUpComingData()
    },[])

    const getPlayingData = async ()=>{
        try{
        const Data = await fetch(NOW_PLAYING_API , options)
        const JSON = await Data.json()
        setNowPlayingApi(JSON) }catch(e){
            console.log(e)
        }}

            const getTopRatedData = async ()=>{
                try{
                const Data = await fetch(TOP_RATED , options)
                const JSON = await Data.json()
                setNowTop_RatedApi(JSON) }catch(e){
                    console.log(e)
                }}

                const getUpComingData = async ()=>{
                    try{
                    const Data = await fetch(UP_COMING , options)
                    const JSON = await Data.json()
                    setNowUp_ComingApi(JSON) }catch(e){
                        console.log(e)
                    }}
    useEffect(()=>{ 
        if(Movie_Id.length===0){return}
        setShowMovieToggle()
    },[Movie_Id])

    
     const setShowMovieToggle = ()=>{
        dispatch(AddShowMovie())
        }



    return( <>
<div className="w-[100%] h-[auto] overflow-scroll  no-scrollbar bg-black">
    <BackdropCard />
     <div className=" bg-black relative p-2">
    {/* <div className=" "> */}
           <NowPlayingCards  NowData={nowPlayingApi?.results} titleText={videoCardsTitle[0]} key={nowPlayingApi?.results?.id}></NowPlayingCards>
            {/* <NowPlayingCards  NowData={ nowLatestApi?.results} titleText={videoCardsTitle[1]} key={nowLatestApi?.results.id} ></NowPlayingCards> */}
            <NowPlayingCards  NowData={nowTop_RatedApi?.results} titleText={videoCardsTitle[2]} key={nowTop_RatedApi?.results?.id}></NowPlayingCards>
            <NowPlayingCards  NowData={nowUp_ComingApi?.results} titleText={videoCardsTitle[3]} key={nowUp_ComingApi?.results?.id}></NowPlayingCards>
            {/* </div>  */}
        </div> 
</div>
{
    Show_Movie ? <div className="border absolute  h-[25rem] w-[100%] mt-[-80vh]  p-4 flex justify-center ">
            <Movies/>
        </div>  : " "
}

        </>)
}

export default Browse

