import { useEffect,useState } from "react"
import { options } from "../utils/apiOptions"
import { useDispatch, useSelector } from "react-redux"
import {AddShowSeries} from "../RStore/seriesId"
import SuggestionCards from "./SuggetionCards"
import EmptySuggestionImg from "../assets/suggestion.png"


const TvSeries = ()=>{
    const Series_Id = useSelector((store)=>store.Series_Id.id)
    // console.log(Series_Id[0].id,"S id")
    const [TvTrailerKey,setTvTrailerKey]=useState()
    // console.log(TvrailerKey,"Tv key")
    const [Tvdetails,setTvdetails] = useState()
    // console.log(Tvdetails,"TvDeatails")
    const [ShowSuggetion,setShowSuggetions]=useState(false)
    // console.log( Series_Id[0]," SeriesId")
const dispatch = useDispatch()
    useEffect(()=>{getData()
        getDetails()},[])
    const getData= async()=>{
        const ApiLink="https://api.themoviedb.org/3/tv/"+ Series_Id[0]?.id+"/videos?language=en-US"
        const Api = await fetch(ApiLink, options)
        const Json = await Api.json()
        const FilterTrailer = Json?.results?.filter((data)=> data.type === "Trailer")
        const Trailer = FilterTrailer.length !==0  ? FilterTrailer[0]:Json?.results[0]
        if(Trailer===undefined) return
        setTvTrailerKey(Trailer.key)
    }

    const getDetails = async()=>{
        const ApiText = await fetch("https://api.themoviedb.org/3/tv/"+ Series_Id[0]?.id+"?language=en-US",options)
        const Json = await ApiText.json()
        setTvdetails(Json)
 
     }
     return(<div className=" w-[26rem] xxsm:w-[100%] xsm:w-[20rem] sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: ">
    <div className=" ">
    <div className=" flex justify-center  border-b-[0.1rem] border-slate-700 w-full h-[12rem] "> 
       {TvTrailerKey ? <SeriesCard data={TvTrailerKey}/>:<div className="w-[100%] bg-black flex justify-center items-center">
        <p className="text-white text-xl  ">trailer is not ready</p></div>}
    </div>
    <div className=" text-gray-400  bg-black flex flex-col justify-center  p-2">
<button className="cursor-pointer 0 text-red-500 font-semibold  text-2xl text-end xxsm:text-[1.2rem] xsm:text-[1.4rem] sm:text-[1.4rem] px-1" onClick={()=>dispatch(AddShowSeries(false))}><i className="fa-solid fa-xmark"></i></button>
<p className="text-white text-md xxsm:text-[0.9rem] xsm:text-[1rem]">{Tvdetails?.name}</p>
<p className="text-white text-sm xxsm:text-[0.8rem] xsm:text-[0.9rem]">{Tvdetails?.tagline}</p>
<div className="flex xxsm:text-[0.8rem]"><span className="mr-1 " >{Tvdetails?.genres[0]?.name}</span><span className="mx-1 ">{Tvdetails?.seasons?.length||""} Seasons
</span><span className="mx-1 text-green-500">{Math.round(Tvdetails?.vote_average)} Rating</span>
</div>
   <div className="flex justify-between">
        <button className="   text-white text-xl mx-1 cursor-pointer rounded-sm hover:  " ><i className="fa-solid fa-play"></i></button>
{ TvTrailerKey?<button className=" text-white text-xl mx-1 cursor-pointer rounded-sm " onClick={()=>setShowSuggetions(!ShowSuggetion)}>
{ShowSuggetion?<i className="fa-solid fa-circle-chevron-up text-red-600 "></i>:<i className="fa-solid fa-circle-chevron-down"></i>}</button>:""}</div>
        </div> 
        </div>
       {ShowSuggetion ? <Series_Suggetions SeriesId={Series_Id[0]?.id}/> : " "}
    </div>)
}


const SeriesCard = ({data})=>{
    // console.log(data,"key from SeriesCard")
    return(<>
<iframe className=" w-[100%] aspect-video " src={"https://www.youtube.com/embed/"+data+"?&autoplay=1&mute=1" }
    title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen></iframe>
   
    </>)
}


const Series_Suggetions = ({SeriesId})=>{
  const [suggestion,setSuggestion]=useState()
useEffect(()=>{getData()},[])
 
    const getData = async ()=>{
        const api =  await  fetch('https://api.themoviedb.org/3/tv/'+SeriesId+'/similar?language=en-US&page=1', options)
        const Json = await api.json()
        // console.log(Json,"suggestion m Tv api")
        setSuggestion(Json)
    }

    return(!suggestion)?( <div className="flex flex-col justify-center items-center h-[17rem]  bg-black ">
    <img src={EmptySuggestionImg} alt="Empty img" className="h-[200px] drop-shadow-2xl xxsm:h-[180px] xsm:h-[180px] sm:h-[190px] "></img>
    <p className="text-md text-white font-bold ">Loading suggestion...</p></div>)
    :(<div className=" text-white  ">
        <p  className="text-lg text-white p-2 bg-black ">More like this</p>
        <div className=" flex flex-wrap  justify-evenly  h-[24rem] pt-2  overflow-x-scroll no-scrollbar bg-black ">
        {
            suggestion?.results.map((data)=><SuggestionCards data={data}/>)
        }
        </div>
    </div>)
}




export default TvSeries