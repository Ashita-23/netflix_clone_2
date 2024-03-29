

import { useNowPlay , useNowTop,useUp_coming} from "../utils/useProjectApi"
import {videoCardsTitle} from "../utils/hardCodedData"
import NowPlayingCards from "./videoCards"
// import { options } from "../utils/apiOptions"
import BackdropCard from "./backbrop"
import Movies from "./Movies"
import { useSelector,useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { AddShowMovie } from "../RStore/showMovie"
import Mt_ShimmerCards from "./shimmers/SMCards" 
import {NOW_PLAYING_API,POPULER_API,TOP_RATED,UP_COMING ,options} from "../utils/apiOptions"





const Browse = ()=>{
    const Show_Movie=useSelector((store)=>store.Show_Movie.IsMovie)
    const Movie_Id=useSelector((store)=>store.Movie_Id.id)
    // console.log(Show_Movie,"Show_Movie")
    console.log(Movie_Id,"MovieId")
    const [nowPlayingApi,setNowPlayingApi] =useState()
    console.log(nowPlayingApi,"nowPlayingApi")
    // console.log(nowPlayingApi.results.length,"nowPlayingApi L")

    const [nowPopulerApi,setNowPopulerApi] = useState()
    const [nowTop_RatedApi,setNowTop_RatedApi] = useState()
    const dispatch = useDispatch()

    
    const [nowUp_ComingApi,setNowUp_ComingApi] = useState()


    useEffect(()=>{
        getPlayingData()
        getPopulerData()
        getTopRatedData()
        getUpComingData()
    },[])

    const getPlayingData = async ()=>{
        const Data = await fetch(NOW_PLAYING_API , options)
        const JSON = await Data.json()

        setNowPlayingApi(JSON) }
    
     const getPopulerData = async ()=>{
            const Data = await fetch(POPULER_API , options)
            const JSON = await Data.json()
    
            setNowPopulerApi(JSON) }

            const getTopRatedData = async ()=>{
                const Data = await fetch(TOP_RATED , options)
                const JSON = await Data.json()
                setNowTop_RatedApi(JSON) }

                const getUpComingData = async ()=>{
                    const Data = await fetch(UP_COMING , options)
                    const JSON = await Data.json()
                    setNowUp_ComingApi(JSON) }
    useEffect(()=>{ 
        if(Movie_Id===undefined)return
        setShowMovieToggle()
    },[Movie_Id])
    
    const setShowMovieToggle = ()=>{
            dispatch(AddShowMovie())
        }



    return( <>
<div className="relative w-[100%] h-[100vh] overflow-scroll  no-scrollbar">
    <BackdropCard />
     <div className="border bg-black  ">
    <div className="p-2 -mt-[14%] z-30  absolute  xxsm: xsm: sm:-mt-[8%] md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl:">
 <NowPlayingCards  NowData={nowPlayingApi?.results} titleText={videoCardsTitle[0]} key={nowPlayingApi?.results?.id}></NowPlayingCards>
                </div>
            <div className=" mt-[7rem]  xxsm: xsm: sm:mt-[16rem] md:mt-[12rem] lg:mt-[10rem] xl:mt-[8rem] 2xl:mt-[6rem] 3xl:mt-[4rem] 4xl: 5xl: 6xl:">
            {/* <div className="flex overflow-scroll p-1 no-scrollbar ">
            <CardsImgShimmer/>
            </div> */}
               {/* <NowPlayingCards  NowData={ nowPopulerApi?.results} titleText={videoCardsTitle[1]} key={nowPopulerApi?.results.id} ></NowPlayingCards> */}
            <NowPlayingCards  NowData={nowTop_RatedApi?.results} titleText={videoCardsTitle[2]} key={nowTop_RatedApi?.results?.id}></NowPlayingCards>
            <NowPlayingCards  NowData={nowUp_ComingApi?.results} titleText={videoCardsTitle[3]} key={nowUp_ComingApi?.results?.id}></NowPlayingCards>
            </div> 
        </div> 
</div>
{
    Show_Movie ? <div className="border border-green-700 h-[auto] p-10 w-[full] sticky bg-black  -mt-[45%] flex justify-center items-center z-[40] ">
            <Movies/>
        </div>  : " "
}

        </>)
}

export default Browse

