import { useEffect,useState } from "react"
import { options } from "../../utils/apiOptions"
import { useSelector } from "react-redux"
import { IframeShimmer } from "../shimmers/SMCards"
import SuggestionCards from "../../Components/SuggetionCards"
import EmptySuggestionImg from "../../assets/suggestion.png"



const TvSeries = ()=>{
    const Series_Id = useSelector((store)=>store.Series_Id.id)
    console.log(Series_Id[0],"S id")
    const [TvTrailerKey,setTvTrailerKey]=useState()
    console.log(TvTrailerKey,"Tv key")
    const [Tvdetails,setTvdetails] = useState()
    console.log(Tvdetails,"TvDeatails")

    // const [ShowSuggetion,setShowSuggetions]=useState(false)

    useEffect(()=>{
        getData()
        getDetails()},[Series_Id])

    const getData= async()=>{
       try{

      const ApiLink="https://api.themoviedb.org/3/tv/"+ Series_Id[0].id+"/videos?language=en-US"
        const Api = await fetch(ApiLink, options)
        const Json = await Api.json()
        const FilterTrailer = Json?.results?.filter((data)=> data.type === "Trailer")
        const Trailer = FilterTrailer.length !==0  ? FilterTrailer[0]:Json?.results[0]
        if(Trailer===undefined) return
        setTvTrailerKey(Trailer.key)  }catch(Emessg){
           console.log(Emessg)
        }
    }

    const getDetails = async()=>{
       try{  const ApiText = await fetch("https://api.themoviedb.org/3/tv/"+ Series_Id[0].id+"?language=en-US",options)
        const Json = await ApiText.json()
        setTvdetails(Json)}catch(Emessg){
            console.log(Emessg)
         }
 
     }
     return(<div className=" w-[100%] xxsm: xsm: sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: ">
    <div className=" ">
    <div className=" flex justify-center  border-b-[0.1rem] border-slate-700 w-full h-[auto] relative"> 
       {TvTrailerKey ? <SeriesCard data={TvTrailerKey}/>:<div className="w-[100%] bg-black flex justify-center items-center">
       <IframeShimmer/></div>}
    </div>
    <div className=" w-screen aspect-video bg-gradient-to-r from-black text-gray-400 mt-[-55.4%]  flex flex-col justify-center  absolute 
        xxsm:px-[1rem]   xsm:px-[1rem]  sm:px-[1rem]  md:px-[1rem]  lg:px-[2rem]  xl:px-[2rem]  2xl:px-[2rem]  3xl:px-[2rem]   4xl:px-[2rem]  5xl:px-[2rem]  6xl:px-[3rem] 
        ">
        <div className=" mt-[18%] p-0 ">
        <p className="leading-tight font-bold text-slate-300 mt-[10%] p-0 text-4xl xxsm:text-[0.9rem] xsm:text-[1rem] l sm:text-[1.8rem] md:text-[1.8rem] lg:text-[1.9rem] xl:text-[1.9rem] 2xl:text-[1.9rem] 3xl:text-[1.9rem] 4xl:text-[1.9rem] 5xl:text-[1.9rem] 6xl:text-[2rem]">{Tvdetails?.name}</p>
        <p className=" leading-tight text-slate-300 pb-[0.2rem] text-2xl xxsm:text-[0.8rem] xsm:text-[1rem] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl 4xl:text-2xl 5xl:text-2xl 6xl:text-2xl">{Tvdetails?.tagline}</p>
        <div className="flex "><button className="text-sm font-medium px-[1.5rem] py-[0.5rem] text-black  bg-slate-200 cursor-pointer rounded-sm mr-1 
        hover:bg-slate-300 xxsm:  xsm:text-[0.8rem] md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md 4xl:text-md 5xl:text-md 6xl:text-md "><i className="fa-solid fa-play"></i> Play</button>
        <button className="px-8 py-2 text-sm text-white bg-opacity-75 bg-slate-800 cursor-pointer rounded-sm 
        hover:bg-slate-500 xsm:text-[0.8rem] md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md 4xl:text-md 5xl:text-md 6xl:text-md "> <i className="fa-solid fa-circle-info"></i> More Info</button>
    </div>
    </div>
        </div>
        <div className="pt-6 px-3 flex flex-col justify-between  bg-black">
           <p className="text-white text-sm xxsm:text-[0.7rem] xsm:text-[0.8rem] sm:text-[0.9rem]">{Tvdetails?.overview}</p>
       <div className="flex xxsm:text-[0.7rem]">{Tvdetails?.genres?.map((genres)=><span className="mr-1 text-white">{genres?.name} |</span>)}</div>
       <div className="flex xxsm:text-[0.7rem] my-[0.2rem]">
        <p className="mx-1 text-white  text-sm   xxsm:text-[0.7rem]">{Tvdetails?.first_air_date.slice(0,4)} <span className="p-0 px-1 border border-white"> HD</span></p>

        <span className="mx-1 text-green-500">{Math.round(Tvdetails?.vote_average)}/10 Rating</span></div>
</div>
        
        <Series_Suggetions SeriesId={Series_Id[0]?.id}/>  
        </div>
    // </div>
)
}


const SeriesCard = ({data})=>{
    console.log(data,"key from SeriesCard")
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
    <p className="text-md text-white font-bold ">Loading suggestions...</p></div>)
    :(<div className=" text-white  ">
        <p className="text-xl font-semibold text-white p-4 bg-black ">Similar shows </p>
        <div className=" flex flex-wrap  justify-evenly  h-[24rem] pt-2  overflow-x-scroll no-scrollbar bg-black ">
        {
            suggestion?.results&&suggestion?.results.map((data)=><SuggestionCards data={data}/>)
        }
        </div>
    </div>)
}




export default TvSeries