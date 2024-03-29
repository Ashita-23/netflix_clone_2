

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
    console.log(MovieId,"MovieId")
    const nowPlayingApi=useNowPlay()
    // const nowPopulerApi=useNowPopuler()
    const nowTop_RatedApi=useNowTop()
    const nowUp_ComingApi=useUp_coming()
    // const [TrailerKey,setTrailerKey]=useState()
    // console.log(TrailerKey,"Tkey")
    const dispatch = useDispatch()

    
    useEffect(()=>{ 
        if(MovieId===null)return
        setShowMovieToggle()
        
    },[MovieId])
    
    const setShowMovieToggle = ()=>{
      
            dispatch(AddShowMovie())
        }


    // if(MovieId===null) return

    return( <>
<div className="relative w-[100%] h-[100vh] overflow-scroll  no-scrollbar">
    <BackdropCard />
     <div className="border bg-black  ">
    <div className="p-2 -mt-[14%] z-30  absolute  xxsm: xsm: sm:-mt-[8%] md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl:">
                <NowPlayingCards  NowData={nowPlayingApi?.results} titleText={videoCardsTitle[0]} key={nowPlayingApi?.results?.id}></NowPlayingCards>
                </div>
            <div className=" mt-[7rem]  xxsm: xsm: sm:mt-[16rem] md:mt-[12rem] lg:mt-[10rem] xl:mt-[8rem] 2xl:mt-[6rem] 3xl:mt-[4rem] 4xl: 5xl: 6xl:">
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

