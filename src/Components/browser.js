
import {videoCardsTitle} from "../utils/hardCodedData"
import NowPlayingCards from "./videoCards"
import BackdropCard from "./backbrop"
import Movies from "./Movies"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {NOW_PLAYING_API,TOP_RATED,UP_COMING ,options} from "../utils/apiOptions"
import { addToNowPlaying,addToTopRated,addToUpComing } from "../RStore/netflixCardsData"




const Browse = ()=>{
    const dispatch=useDispatch()
    const ShowMovie=useSelector((store)=>store.Movie_Id.addShowMovie)
    const nowPlayingApi = useSelector((store)=>store.Netflix_CardsData.MoviesPlayingData)
    const nowTop_RatedApi = useSelector((store)=>store.Netflix_CardsData.MoviesTopRatedData)
    const nowUp_ComingApi=useSelector((store)=>store.Netflix_CardsData.MoviesUpComingData)


    useEffect(()=>{
       !nowPlayingApi && getPlayingData()
       !nowTop_RatedApi && getTopRatedData()
       !nowUp_ComingApi && getUpComingData()
    },[])

    const getPlayingData = async ()=>{
        try{
        const Data = await fetch(NOW_PLAYING_API , options)
        const JSON = await Data.json()
        dispatch(addToNowPlaying(JSON)) }catch(e){
            console.log(e)
        }}

    const getTopRatedData = async ()=>{
                try{
                const Data = await fetch(TOP_RATED , options)
                const JSON = await Data.json()
                dispatch(addToTopRated(JSON)) }catch(e){
                    console.log(e)
                }}

    const getUpComingData = async ()=>{
                    try{
                    const Data = await fetch(UP_COMING , options)
                    const JSON = await Data.json()
                    dispatch(addToUpComing(JSON)) }catch(e){
                        console.log(e)
                    }}
                 
    return( <>
<div className="w-[100%] h-[auto] overflow-scroll  no-scrollbar bg-black">
    <BackdropCard keyData={Math.random()*"2a"} />
     <div className=" bg-black relative p-2">
           <NowPlayingCards  NowData={nowPlayingApi?.results} titleText={videoCardsTitle[0]} key={nowPlayingApi?.results?.id}></NowPlayingCards>
            <NowPlayingCards  NowData={nowTop_RatedApi?.results} titleText={videoCardsTitle[2]} key={nowTop_RatedApi?.results?.id}></NowPlayingCards>
            <NowPlayingCards  NowData={nowUp_ComingApi?.results} titleText={videoCardsTitle[3]} key={nowUp_ComingApi?.results?.id}></NowPlayingCards>
        </div> 
{ShowMovie ? <div className=" absolute  h-[25rem] w-[100%] mt-[-80vh]  p-4 flex justify-center ">
            <Movies/>
        </div>  : " "}
</div>
        </>)
}

export default Browse

