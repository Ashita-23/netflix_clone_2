import { useEffect,useState } from "react"
import { options } from "../utils/apiOptions"
import { useDispatch, useSelector } from "react-redux"
import {addShowMovie} from "../RStore/movieId"
import SuggestionCards from "./SuggetionCards"
import EmptySuggestionImg from "../assets/suggestion.png"


const Movies = ()=>{
    const MovieId = useSelector((state)=>state.Movie_Id.id)
    const [MTrailerKey,setMTrailerKey]=useState()
    // console.log(MTrailerKey,"MT key")
    const [ShowSuggetion,setShowSuggetions]=useState()
    const [Mdetails,setMdetails] = useState()
    // console.log( Mdetails," Mdetails")
const dispatch = useDispatch()

    useEffect(()=>{
        getData()
        getDitails()
    },[MovieId ])
    const getData= async()=>{
        const ApiLink="https://api.themoviedb.org/3/movie/"+ MovieId[0]?.id+"/videos?language=en-US"
        const Api = await fetch(ApiLink, options)
        const Json = await Api.json()
        const FilterTrailer = Json?.results?.filter((data)=> data.type === "Trailer")
        const Trailer = FilterTrailer.length !==0  ? FilterTrailer[0]:Json?.results[0]
        // console.log(Json,"Json")
        if(Trailer===undefined) return
        setMTrailerKey(Trailer.key)
    
    }

    const getDitails = async()=>{
       const ApiText = await fetch("https://api.themoviedb.org/3/movie/"+ MovieId[0]?.id+"?language=en-US",options)
       const Json = await ApiText.json()
       setMdetails(Json)

    }


    return(<div className=" border border-red-500  w-[26rem] xxsm:w-[100%] xsm:w-[20rem] sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: ">
    <div className=" border-red-500 ">
        <div className=" flex justify-center border border-red-400 w-full h-[12rem]"> 
      { MTrailerKey? <MovieCard data={MTrailerKey}/>: <div className="w-[100%] bg-black flex justify-center items-center">
        <p className="text-white text-xl">trailer is not ready</p></div>}
    </div>
        <div className="   border border-green-400 text-gray-400  bg-black flex flex-col justify-center  p-2">
        <button className="cursor-pointer border border-green-400 text-red-500 font-semibold  text-2xl text-end xxsm:text-[1.2rem] xsm:text-[1.4rem] sm:text-[1.4rem] px-1" onClick={()=>dispatch(addShowMovie(false))}><i className="fa-solid fa-xmark"></i></button>
        <p className="text-white text-md xxsm:text-[0.9rem] xsm:text-[1rem]">{Mdetails?.title}</p>
        <p className="text-white text-sm xxsm:text-[0.8rem] xsm:text-[0.9rem]">{Mdetails?.tagline}</p>
        <div className="flex xxsm:text-[0.8rem]"><span className="mr-1 " >{Mdetails?.genres[0]?.name}</span><span className="mx-1 ">{Math.round(Mdetails?.runtime/60)}h</span><span className="mx-1 text-green-500">{Math.round(Mdetails?.vote_average)}Rating</span>
        </div>
        <div className="flex justify-between">
        <button className="   text-white text-xl mx-1 cursor-pointer rounded-sm hover:  " ><i className="fa-solid fa-play"></i></button>
{ MTrailerKey?<button className=" text-white text-xl mx-1 cursor-pointer rounded-sm " onClick={()=>setShowSuggetions(!ShowSuggetion)}>
{ShowSuggetion?<i className="fa-solid fa-circle-chevron-up text-red-600 "></i>:<i className="fa-solid fa-circle-chevron-down"></i>}</button>:""}</div>
        </div>
        </div>
       {ShowSuggetion ? <Movie_Suggetions MovieId={MovieId[0]?.id}/> :" "}
    </div>)
}

const MovieCard = ({data})=>{
    return(<>
<iframe className=" w-[100%] " src={"https://www.youtube.com/embed/"+data+"?&autoplay=1&mute=1" }
    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen></iframe>
    </>)
}

const Movie_Suggetions = ({MovieId})=>{
  const [suggestion,setSuggestion]=useState()
//   const [imptyCards,setImptyCards]=useState(true)
// console.log(suggestion,"sugge....")
   useEffect(()=>{getData()},[])
 
    const getData = async ()=>{
        const api =  await  fetch('https://api.themoviedb.org/3/movie/'+MovieId+'/similar?include_adult=false&language=en-US&page=1', options)
        const Json = await api.json()
        // console.log(Json,"suggestion m api")
        setSuggestion(Json)
    }
    return(!suggestion)?( <div className="flex flex-col justify-center items-center h-[17rem]  bg-black border border-yellow-500">
    <img src={EmptySuggestionImg} alt="Empty img" className="h-[200px] drop-shadow-2xl xxsm:h-[180px] xsm:h-[180px] sm:h-[190px] "></img>
    <p className="text-md text-white font-bold ">Zero suggestions...</p></div>)
    :(<div className=" text-white  ">
        <p className="text-lg text-white p-2 bg-black ">More like this</p>
       <div className=" flex flex-wrap  justify-evenly border border-pink-400 h-[24rem] pt-2  overflow-x-scroll no-scrollbar bg-black ">
        {
            suggestion?.results &&  suggestion?.results?.map((data)=> <SuggestionCards data={data}/>)
        }
        </div>
        
    </div>)
}

// {
    // <div className="flex flex-col justify-center items-center h-[20rem]  bg-slate-600 border border-red-500">
    //    <img src={EmptySuggestionImg} alt="Empty img" className="h-[250px] drop-shadow-2xl"></img>
    //    <p className="text-lg text-white">Zero suggestions...</p></div>
    // xxsm:h-[14rem] xsm:h-[14rem] sm:h-[14rem] md:h-[14rem] lg:h-[14rem] xl:h-[14rem] 2xl:h-[14rem] 3xl:h-[14rem] 4xl:h-[14rem] 5xl:h-[14rem] 6xl:h-[15rem]
// }

export default Movies
