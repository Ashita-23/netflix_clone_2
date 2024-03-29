import { useState,useEffect } from "react"
import { options } from "../utils/apiOptions"
const TvBackdropCard = ({backdropData})=>{
    // console.log(backdropData?.results[2],"backdropData?.results[0]")
    const [TrailerKey,setTrailerKey]=useState()
    // console.log(TrailerKey,"Tkey backdrop TV")
 

    const getData= async()=>{
        const ApiLink='https://api.themoviedb.org/3/tv/82728 /videos?language=en-US'
        const Api = await fetch(ApiLink, options)
        const Json = await Api.json()
        // console.log(Json,"Json")
        const FilterTrailer = Json?.results?.filter((data)=> data.type === "Trailer")
        const Trailer = FilterTrailer.length !==0  ? FilterTrailer[0]:Json?.results[0]
        setTrailerKey(Trailer?.key)
    }
    useEffect(()=>{getData()},[])
    if(TrailerKey===null) return
    return(<div>
    <iframe className=" w-screen aspect-video  " src={"https://www.youtube.com/embed/2ZtG5Ba6iT0?&autoplay=1&mute=1" }
    title="YouTube video player"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen></iframe>
    <div className="w-screen aspect-video absolute bg-gradient-to-r from-black -mt-[55%] -z-[-10]">
 <div className=" w-5/12 p-2 mt-[25%] ml-6 text-white">
        <p className="text-3xl font-semibold">{backdropData?.results[0]?.original_title||backdropData?.results[0]?.name}</p>
        <p className="text-md p-1">{backdropData?.results[0]?.overview}</p>
        <button className="px-8 py-2 text-md font-medium opacity-75 text-black  bg-white cursor-pointer rounded-sm mr-1 hover:bg-slate-300 "><i className="fa-solid fa-play"></i> Play</button>
        <button className="px-8 py-2 text-md text-white opacity-75 bg-slate-800 cursor-pointer rounded-sm hover:bg-slate-500 "> <i className="fa-solid fa-circle-info"></i> More Info</button>
    </div> </div>
    </div>
    )
}

export default TvBackdropCard