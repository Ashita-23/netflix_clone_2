import { useState,useEffect } from "react"
import { options } from "../../utils/apiOptions"
import { useSelector } from "react-redux"
import {IframeShimmer } from "../../Components/shimmers/SMCards"
const TvBackdropCard = ()=>{
    // console.log(backdropData?.results[2],"backdropData?.results[0]")
    const TV_Series =useSelector((store)=>store.Netflix_CardsData.TvSeriesData)
    const [TrailerKey,setTrailerKey]=useState()
    console.log(TV_Series,"TV bd data")


    const getData= async()=>{
       try{ const ApiLink='https://api.themoviedb.org/3/tv/' +TV_Series?.results[2]?.id +'/videos?language=en-US'
        const Api = await fetch(ApiLink, options)
        const Json = await Api.json()
        // console.log(Json,"Json")
        const FilterTrailer = Json?.results?.filter((data)=> data.type === "Trailer")
        const Trailer = FilterTrailer.length !== 0  ? FilterTrailer[0] : Json?.results[0]
        // console.log(Trailer,"Trailer")
        setTrailerKey(Trailer?.key)}catch(e){console.log(e)}
    }
    useEffect(()=>{getData()},[TV_Series ])
    // if(!TV_Series) return <p>please wait for api data to come...</p>
    return(<div className=" flex justify-center  border-b-[0.1rem] border-slate-700 w-full h-[auto] relative"> 
    {
     !TrailerKey ? <IframeShimmer /> :     <iframe className=" w-screen aspect-video  " src={"https://www.youtube.com/embed/"+TrailerKey+"?&autoplay=1&mute=1" }
    title="YouTube video player"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen></iframe>
    }
        <div className=" w-screen aspect-video bg-gradient-to-r from-black  text-gray-400 mt-[%]  flex flex-col justify-center  absolute 
        xxsm:px-[1rem]   xsm:px-[1rem]  sm:px-[1rem]  md:px-[1rem]  lg:px-[2rem]  xl:px-[2rem]  2xl:px-[2rem]  3xl:px-[2rem]   4xl:px-[2rem]  5xl:px-[2rem]  6xl:px-[3rem] 
        ">
        <div className=" mt-[10%] p-0 ">
        <p className="leading-tight font-bold text-slate-300 mt-[10%] p-0 text-4xl xxsm:text-[0.9rem] xsm:text-[1rem] l sm:text-[1.8rem] md:text-[1.8rem] lg:text-[1.9rem] xl:text-[1.9rem] 2xl:text-[1.9rem] 3xl:text-[1.9rem] 4xl:text-[1.9rem] 5xl:text-[1.9rem] 6xl:text-[2rem]">{TV_Series?.results[2]?.name}</p>
        <p className=" leading-tight text-slate-300 pb-[0.2rem] text-2xl xxsm:text-[0.8rem] xsm:text-[1rem] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl 4xl:text-2xl 5xl:text-2xl 6xl:text-2xl">{TV_Series?.results[2]?.tagline}</p>
        <div className="flex "><button className="text-sm font-medium px-[1.5rem] py-[0.5rem] text-black  bg-slate-200 cursor-pointer rounded-sm mr-1 
        hover:bg-slate-300 xxsm:  xsm:text-[0.8rem] md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md 4xl:text-md 5xl:text-md 6xl:text-md "><i className="fa-solid fa-play"></i> Play</button>
        <button className="px-8 py-2 text-sm text-white bg-opacity-75 bg-slate-800 cursor-pointer rounded-sm 
        hover:bg-slate-500 xsm:text-[0.8rem] md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md 4xl:text-md 5xl:text-md 6xl:text-md "> <i className="fa-solid fa-circle-info"></i> More Info</button>
    </div>
    </div>
        </div>
    </div>
    )
}

export default TvBackdropCard