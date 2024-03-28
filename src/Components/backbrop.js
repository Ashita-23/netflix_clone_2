import { useState , useEffect} from "react"
import { options } from "../utils/apiOptions"


const BackdropCard = ({backdropData})=>{
    const [TrailerKey,setTrailerKey]=useState()
    // console.log(TrailerKey,"Tkey")
    const getData= async()=>{
        const ApiLink="https://api.themoviedb.org/3/movie/"+"1011985"+"/videos?language=en-US"
        const Api = await fetch(ApiLink, options)
        const Json = await Api.json()
        // console.log(Json,"Json")
        const FilterTrailer = Json?.results?.filter((data)=> data.type === "Trailer")
        const Trailer = FilterTrailer.length !==0  ? FilterTrailer[0]:Json?.results[0]
        setTrailerKey(Trailer.key)

    }
    useEffect(()=>{getData()},[])
    // if(TrailerKey===null) return 
    return(<div>
    <iframe className=" w-screen aspect-video border border-yellow-400 " src={"https://www.youtube.com/embed/"+"d2OONzqh2jk"+"?&autoplay=1&mute=1&loop=1" }
    title="YouTube video player"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen></iframe>
    <div className="w-screen border border-red-500 aspect-video absolute bg-gradient-to-r from-black -mt-[55%] -z-[-10] xxsm: xsm: sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: ">
 <div className=" w-5/12 p-2  ml-6 text-white border border-red-300 xxsm: xsm:w-[90%]  sm:w-[43%] mt-[10%] md:mt-[14%] lg:mt-[25%] xl:mt-[30%] 2xl:mt-[40%] 3xl:mt-[40%] 4xl:mt-[40%] 5xl:mt-[40%] 6xl:mt-[40%] ">
        <p className="text-[1.2rem] font-semibold sm: md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl 3xl:text-3xl 4xl:text-3xl 5xl:text-3xl 6xl:text-3xl">{backdropData?.results[0]?.original_title||backdropData?.results[0]?.name}</p>
        <p className="text-[0.8rem] p-1 xsm:text-[0.7rem] md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md 4xl:text-md 5xl:text-md 6xl:text-md ">{backdropData?.results[0]?.overview}</p>
        <button className="px-8 py-2 text-sm font-medium opacity-75 text-black  bg-white cursor-pointer rounded-sm mr-1 
        hover:bg-slate-300 xsm:text-[0.8rem] px-[1.5rem] md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md 4xl:text-md 5xl:text-md 6xl:text-md "><i className="fa-solid fa-play"></i> Play</button>
        <button className="px-8 py-2 text-sm text-white opacity-75 bg-slate-800 cursor-pointer rounded-sm 
        hover:bg-slate-500 xsm:text-[0.8rem] md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md 4xl:text-md 5xl:text-md 6xl:text-md "> <i className="fa-solid fa-circle-info"></i> More Info</button>
    </div> </div>
    </div>
    )
}

export default BackdropCard