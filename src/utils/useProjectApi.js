// import { useState,useEffect } from "react"
// import {options } from "../utils/apiOptions"


// export const  useTrailer_Key = () =>{
//     const [TrailerKey,setTrailerKey]=useState()
//     useEffect(()=>{getData()},[])
// const getData= async()=>{
//     const Api = await fetch("https://api.themoviedb.org/3/movie/1011985/videos?language=en-US", options)
//     const Json = await Api.json()
//     const FilterTrailer = Json?.results?.filter((data)=> data.type === "Trailer")
//     const Trailer = FilterTrailer.length?FilterTrailer[0]:Json?.results[0]
//     setTrailerKey(Trailer.key)
// }

// return TrailerKey
// }




