

import { useNowPlay , useNowTop,useUp_coming} from "../utils/useProjectApi"
import {videoCardsTitle} from "../utils/hardCodedData"
import NowPlayingCards from "./videoCards"
// import { options } from "../utils/apiOptions"
import BackdropCard from "./backbrop"
import Movies from "./Movies"
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { AddShowMovie } from "../RStore/showMovie"




const Browse = ()=>{
    const Show_Movie=useSelector((store)=>store.Show_Movie.IsMovie)
    const MovieId=useSelector((store)=>store.Movie_Id.id)
    // console.log(Show_Movie,"Show_Movie")
    // console.log(MovieId,"MovieId")
    const nowPlayingApi=useNowPlay()
    // const nowPopulerApi=useNowPopuler()
    const nowTop_RatedApi=useNowTop()
    const nowUp_ComingApi=useUp_coming()
    // const [TrailerKey,setTrailerKey]=useState()
    // console.log(TrailerKey,"Tkey")
    const dispatch = useDispatch()


useEffect(()=>{ 
    setShowMovieToggle()
},[MovieId])

const setShowMovieToggle = ()=>{
    if(MovieId){
        dispatch(AddShowMovie())
    }
}

    return( <>
<div className="relative w-[100%] h-[100vh] overflow-scroll  no-scrollbar">
{/* <div>
    <iframe className=" w-screen aspect-video  " src={"https://www.youtube.com/embed/"+TrailerKey+"?&autoplay=1&mute=1" }
    title="YouTube video player"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen></iframe>
    <div className="w-screen aspect-video absolute bg-gradient-to-r from-black -mt-[55%] -z-[-10]">
 <div className=" w-5/12 p-2 mt-[25%] ml-6 text-white">
        <p className="text-3xl font-semibold">{nowPlayingApi?.results[0]?.original_title}</p>
        <p className="text-md p-1">{nowPlayingApi?.results[0]?.overview}</p>
        <button className="px-8 py-2 text-md font-medium opacity-75 text-black  bg-white cursor-pointer rounded-sm mr-1 hover:bg-slate-300 "><i className="fa-solid fa-play"></i> Play</button>
        <button className="px-8 py-2 text-md text-white opacity-75 bg-slate-800 cursor-pointer rounded-sm hover:bg-slate-500 "> <i className="fa-solid fa-circle-info"></i> More Info</button>
    </div> </div>
    </div> */}
    <BackdropCard backdropData={ nowPlayingApi}/>
     <div className="border bg-black  ">
    <div className="p-2 -mt-[14%] z-30  absolute">
                <NowPlayingCards  NowData={nowPlayingApi?.results} titleText={videoCardsTitle[0]} key={nowPlayingApi?.results.id}></NowPlayingCards></div>
            <div className=" mt-[7rem]">
               {/* <NowPlayingCards  NowData={ nowPopulerApi?.results} titleText={videoCardsTitle[1]} key={nowPopulerApi?.results.id} ></NowPlayingCards> */}
               <NowPlayingCards  NowData={nowTop_RatedApi?.results} titleText={videoCardsTitle[2]} key={nowTop_RatedApi?.results.id}></NowPlayingCards>
               <NowPlayingCards  NowData={nowUp_ComingApi?.results} titleText={videoCardsTitle[3]} key={nowUp_ComingApi?.results.id}></NowPlayingCards>
            </div> 
   
   

   
        </div> 
            {/* <div className="border border-red-700 absolute -mt-[80%] z-[100]" ></div> */}
</div>

{
    Show_Movie ? <div className="border border-green-700 h-[auto] p-10 w-[full] sticky bg-black  -mt-[45%] flex justify-center items-center z-[40] ">
            <Movies/>
        </div>  : " "
}
          
        </>)
}

export default Browse

