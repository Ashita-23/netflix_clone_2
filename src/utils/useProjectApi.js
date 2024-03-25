import { useState,useEffect } from "react"
import { NOW_PLAYING_API,POPULER_API,TOP_RATED,UP_COMING ,options } from "../utils/apiOptions"

export  const useNowPlay = () =>{

    const [nowPlayingApi,setNowPlayingApi] = useState()

    useEffect(()=>{
        getData()
    },[])

    const getData = async ()=>{
        const Data = await fetch(NOW_PLAYING_API , options)
        const JSON = await Data.json()

        setNowPlayingApi(JSON) }

        return nowPlayingApi
}
export  const useNowPopuler = () =>{

    const [nowPopulerApi,setNowPopulerApi] = useState()

    useEffect(()=>{
        getData()
    },[])

    const getData = async ()=>{
        const Data = await fetch(POPULER_API , options)
        const JSON = await Data.json()

        setNowPopulerApi(JSON) }

        return nowPopulerApi
}
export  const useNowTop = () =>{

    const [nowTop_RatedApi,setNowTop_RatedApi] = useState()

    useEffect(()=>{
        getData()
    },[])

    const getData = async ()=>{
        const Data = await fetch(TOP_RATED , options)
        const JSON = await Data.json()
        setNowTop_RatedApi(JSON) }
        return nowTop_RatedApi
}

export  const useUp_coming = () =>{
    const [nowUp_ComingApi,setNowUp_ComingApi] = useState()
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        const Data = await fetch(UP_COMING , options)
        const JSON = await Data.json()
        setNowUp_ComingApi(JSON) }
        return nowUp_ComingApi
}


export const  useTrailer_Key = () =>{
    const [TrailerKey,setTrailerKey]=useState()
    useEffect(()=>{getData()},[])
const getData= async()=>{
    const Api = await fetch("https://api.themoviedb.org/3/movie/1011985/videos?language=en-US", options)
    const Json = await Api.json()
    const FilterTrailer = Json?.results?.filter((data)=> data.type === "Trailer")
    const Trailer = FilterTrailer.length?FilterTrailer[0]:Json?.results[0]
    setTrailerKey(Trailer.key)
}

return TrailerKey
}

export const  useTV_Series = () =>{
    const [TV_Series,setTV_Series]=useState()
    useEffect(()=>{getData()},[])
const getData= async()=>{
    const Api = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options)
    const Json = await Api.json()
// console.log(Json,"TV_Series")
    setTV_Series(Json)
}
return TV_Series
}
export const  useTV_SeriesOnAir = () =>{
    const [TV_SeriesOnAir,setTV_SeriesOnAir]=useState()
    useEffect(()=>{getData()},[])
const getData= async()=>{
    const Api = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', options)
    const Json = await Api.json()
// console.log(Json,"TV_SeriesOnAir")
    setTV_SeriesOnAir(Json)
}
return TV_SeriesOnAir
}
export const  useTV_SeriesPopular = () =>{

    const [TV_SeriesPopular,setTV_SeriesPopular]=useState()

    useEffect(()=>{getData()},[])
const getData= async()=>{
    const Api = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
    const Json = await Api.json()
// console.log(Json,"TV_SeriesPopular")
    setTV_SeriesPopular(Json)
}
return TV_SeriesPopular
}
export const  useTV_SeriesTop_rated = () =>{
    const [TV_SeriesTop_rated,setTV_SeriesTop_rated]=useState()
    useEffect(()=>{getData()},[])
const getData= async()=>{
    const Api = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
    const Json = await Api.json()
// console.log(Json,"TV_SeriesTop_rated")
    setTV_SeriesTop_rated(Json)
}
return TV_SeriesTop_rated
}
