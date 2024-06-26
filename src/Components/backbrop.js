import { useState , useEffect} from "react"
import { options } from "../utils/apiOptions"
// import { NOW_PLAYING_API } from "../utils/apiOptions"
import { useSelector } from "react-redux"
import {IframeShimmer } from "../Components/shimmers/SMCards"


const BackdropCard = ()=>{
    const nowPlayingApi = useSelector((store)=>store.Netflix_CardsData.MoviesPlayingData)
    // const [backdropData,setbackdropData]=useState()
    // console.log(backdropData,"backdrop data")
    // const getBdData = async ()=>{
    //     try{
    //     const Data = await fetch(NOW_PLAYING_API , options)
    //     const JSON = await Data.json()
    //     console.log(JSON,"BDJSON")
    //     setbackdropData(JSON)}catch(e){
    //         console.log(e)
    //     }
    // }
    //         useEffect(()=>{
    //             getBdData()
    //         },[])

    const [TrailerKey,setTrailerKey]=useState()
    console.log(TrailerKey,"Tkey")
    const getData= async()=>{
        try{
        const ApiLink="https://api.themoviedb.org/3/movie/"+nowPlayingApi?.results[0]?.id+"/videos?language=en-US"
        const Api = await fetch(ApiLink, options)
        const Json = await Api.json()
        console.log(Json,"backdrop jason...")
        const FilterTrailer = Json?.results?.filter((data)=> data.type === "Trailer")
        // console.log(FilterTrailer,"Filter Trailer")
        // console.log( FilterTrailer.length," FilterTrailer.length")
        const Trailer = FilterTrailer.length !== 0  ? FilterTrailer[0] : Json?.results[0]
        // console.log(Trailer,"trailer")
        setTrailerKey(Trailer.key)}catch(e){console.log(e)}
  

    }
    useEffect(()=>{getData()},[nowPlayingApi ])

    if(!nowPlayingApi) return <p>please wait................</p>
    return(<div className="h-[auto]">
   {!TrailerKey ? <IframeShimmer/>: <iframe className=" w-screen aspect-video " src={"https://www.youtube.com/embed/"+TrailerKey+"?&autoplay=1&mute=1&loop=1" }
    title="YouTube video player"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen></iframe>} 
   {!nowPlayingApi?<div className="bg-black flex flex-col justify-left p-4">
    {Array(4).fill("").map(()=><p className="animate-pulse p-4 bg-slate-800 m-1 " key={Math.random()*"CD"}></p>)}   
   </div>: <div className="flex justify-left  bg-black  ">
 <div className="  p-2 bg-black  flex flex-col text-white xxsm:px-3 xsm: sm:w-[70%] md:w-[70%] px-4 lg:w-[70%] xl:w-[70%] 2xl:w-[70%] 3xl:w-[70%] 4xl:w-[70%] 5xl:w-[70%] 6xl:w-[70%] ">
        <p className="text-[1.2rem] font-semibold sm: md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl 3xl:text-3xl 4xl:text-3xl 5xl:text-3xl 6xl:text-3xl">{nowPlayingApi?.results[0]?.title}</p>
        <p className="text-[0.8rem] p-1 xxsm:text-[0.7rem] xsm:text-[0.7rem] md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md 4xl:text-md 5xl:text-md 6xl:text-md ">{nowPlayingApi?.results[0]?.overview}</p>
        <div className="flex "><button className="text-sm font-medium px-[1.5rem] py-[0.5rem] text-black  bg-slate-200 cursor-pointer rounded-sm mr-1 
        hover:bg-slate-300 xxsm: xsm:text-[0.8rem] md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md 4xl:text-md 5xl:text-md 6xl:text-md "><i className="fa-solid fa-play"></i> Play</button>
        <button className="px-8 py-2 text-sm text-white bg-opacity-75 bg-slate-800 cursor-pointer rounded-sm 
        hover:bg-slate-500 xsm:text-[0.8rem] md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md 4xl:text-md 5xl:text-md 6xl:text-md "> <i className="fa-solid fa-circle-info"></i> More Info</button>
    </div>
    </div>
     </div>}
    </div>
    )
}

export default BackdropCard