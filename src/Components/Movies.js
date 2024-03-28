import { useEffect,useState } from "react"
import { options } from "../utils/apiOptions"
import { useDispatch, useSelector } from "react-redux"
import {AddShowMovie} from "../RStore/showMovie"
import SuggestionCards from "./SuggetionCards"


const Movies = ()=>{
    const MovieId = useSelector((state)=>state.Movie_Id.id)
    const [MTrailerKey,setMTrailerKey]=useState()
    // console.log(MTrailerKey,"MT key")
    const [ShowSuggetion,setShowSuggetions]=useState(false)
    // console.log( MovieId[MovieId.length-1]," MovieId")
const dispatch = useDispatch()

    useEffect(()=>{getData()},[MovieId ])
    const getData= async()=>{
        const ApiLink="https://api.themoviedb.org/3/movie/"+ MovieId[0]?.id+"/videos?language=en-US"
        const Api = await fetch(ApiLink, options)
        const Json = await Api.json()
        const FilterTrailer = Json?.results?.filter((data)=> data.type === "Trailer")
        const Trailer = FilterTrailer.length !==0  ? FilterTrailer[0]:Json?.results[0]
        // console.log(Json,"Json")
        setMTrailerKey(Trailer.key)
    
    }


    return(<div className=" w-[76%] h-[80%] flex flex-col border border-slate-400 p-2">
    <div className=" flex ">
        <div className=" w-[70%] flex justify-center"> 
        <MovieCard data={MTrailerKey}/>
    </div>
        <div className=" w-[30%] h-[100%]  text-gray-400 flex flex-col justify-center p-10">
        <button className="cursor-pointer text-red-500 font-semibold p-1 text-3xl ml-[80%]" onClick={()=>dispatch(AddShowMovie(false))}><i className="fa-solid fa-xmark"></i></button>
        <p className="text-white text-md">{MovieId[0]?.title}</p>
        <p className="text-white text-[0.6rem]">{MovieId[0]?.overview}</p>
        <button className=" px-3 py-2 bg-red-600 text-white text-lg m-1 rounded-sm cursor-pointer hover:bg-red-700" onClick={()=>dispatch(AddShowMovie(true))}>Watch Now</button>
        <button className=" px-3 py-2 bg-red-600 text-white text-lg m-1 rounded-sm cursor-pointer hover:bg-red-700" onClick={()=>setShowSuggetions(!ShowSuggetion)}>Suggestion</button>
        </div>
        </div>
       {ShowSuggetion ? <Movie_Suggetions MovieId={MovieId[0]?.id}/> : " "}
    </div>)
}

const MovieCard = ({data})=>{
    return(<>
<iframe className=" w-[100%] aspect-video " src={"https://www.youtube.com/embed/"+data+"?&autoplay=1&mute=1" }
    title="YouTube video player"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen></iframe>
    </>)
}

const Movie_Suggetions = ({MovieId})=>{
  const [suggestion,setSuggestion]=useState()
   useEffect(()=>{getData()},[])
 
    const getData = async ()=>{
        const api =  await  fetch('https://api.themoviedb.org/3/movie/'+MovieId+'/similar?language=en-US&page=1', options)
        const Json = await api.json()
        console.log(Json,"suggestion m api")
        setSuggestion(Json)
    }
    return(<div className=" text-white  ">
        <p className="text-xl text-white p-4 bg-slate-600 mb-[0.2rem]">Movie suggestion</p>
        <div className=" flex flex-wrap justify-evenly h-[40rem] pt-2 overflow-y-scroll no-scrollbar bg-slate-600">
        {
            suggestion?.results?.map((data)=> <SuggestionCards data={data}/>)
        }
        </div>
    </div>)
}



export default Movies
