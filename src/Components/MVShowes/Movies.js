import { useEffect,useState } from "react"
import { options } from "../../utils/apiOptions"
import { useSelector } from "react-redux"
// import {addShowMovie} from "../../RStore/movieId"
import SuggestionCards from "../SuggetionCards"
// import { Link } from "react-router-dom"
import EmptySuggestionImg from "../../assets/suggestion.png"
// import { addToWatchPage } from "../../RStore/watchPageData"
import { IframeShimmer} from "../shimmers/SMCards"


const Movies = ()=>{
    const MovieId = useSelector((state)=>state.Movie_Id.id)
    const [MTrailerKey,setMTrailerKey]=useState()
    // console.log(MTrailerKey,"MT key")
    // const [ShowSuggetion,setShowSuggetions]=useState()
    const [Mdetails,setMdetails] = useState()
    // console.log( Mdetails," Mdetails")
// const dispatch = useDispatch()

    useEffect(()=>{
        getData()
        getDetails()
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

    const getDetails = async()=>{
       const ApiText = await fetch("https://api.themoviedb.org/3/movie/"+ MovieId[0]?.id+"?language=en-US",options)
       const Json = await ApiText.json()
    //    console.log(Json, "Mdeatil")
       setMdetails(Json)

    }
    // C:\Users\INTEL\OneDrive\Desktop\Aashita\react-and-js-Newprojects\New-React-App\netflix_clone\src\assets\Questions.gif

    return(<div className="  w-[100%] xxsm:  xsm: sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: ">
    <div className=" ">
        <div className=" flex justify-center  border-b-[0.1rem] border-slate-700 w-full h-[auto] relative"> 
      { MTrailerKey? <MovieCard data={MTrailerKey}/>: 
      <IframeShimmer/>}

    </div>
        <div className=" w-screen aspect-video bg-gradient-to-r from-black text-gray-400 mt-[-55%]  flex flex-col justify-center  absolute 
        xxsm:px-[1rem]   xsm:px-[1rem]  sm:px-[1rem]  md:px-[1rem]  lg:px-[2rem]  xl:px-[2rem]  2xl:px-[2rem]  3xl:px-[2rem]   4xl:px-[2rem]  5xl:px-[2rem]  6xl:px-[3rem] 
        ">
        <div className=" mt-[18%] p-0 ">
        <p className="leading-tight font-bold text-slate-300 mt-[10%] p-0 text-4xl xxsm:text-[0.9rem] xsm:text-[1rem] l sm:text-[1.8rem] md:text-[1.8rem] lg:text-[1.9rem] xl:text-[1.9rem] 2xl:text-[1.9rem] 3xl:text-[1.9rem] 4xl:text-[1.9rem] 5xl:text-[1.9rem] 6xl:text-[2rem]">{Mdetails?.title}</p>
        <p className=" leading-tight text-slate-300 pb-[0.2rem] text-2xl xxsm:text-[0.8rem] xsm:text-[1rem] sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl 4xl:text-2xl 5xl:text-2xl 6xl:text-2xl">{Mdetails?.tagline}</p>
        <div className="flex "><button className="text-sm font-medium px-[1.5rem] py-[0.5rem] text-black  bg-slate-200 cursor-pointer rounded-sm mr-1 
        hover:bg-slate-300 xxsm:  xsm:text-[0.8rem] md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md 4xl:text-md 5xl:text-md 6xl:text-md "><i className="fa-solid fa-play"></i> Play</button>
        <button className="px-8 py-2 text-sm text-white bg-opacity-75 bg-slate-800 cursor-pointer rounded-sm 
        hover:bg-slate-500 xsm:text-[0.8rem] md:text-md lg:text-md xl:text-md 2xl:text-md 3xl:text-md 4xl:text-md 5xl:text-md 6xl:text-md "> <i className="fa-solid fa-circle-info"></i> More Info</button>
    </div>
    </div>
        </div>
        <div className="pt-6 px-3 flex flex-col justify-between  bg-black">
           <p className="text-white text-sm xxsm:text-[0.7rem] xsm:text-[0.8rem] sm:text-[0.9rem]">{Mdetails?.overview}</p>
       <div className="flex xxsm:text-[0.7rem]">{Mdetails?.genres?.map((genres)=><span className="mr-1 text-white">{genres?.name} |</span>)}</div>
       <div className="flex xxsm:text-[0.7rem] my-[0.2rem]">
        <p className="mx-1 text-white  text-sm   xxsm:text-[0.7rem]">{Math.round(Mdetails?.runtime/60)}h <span className="p-0 px-1 border border-white">HD</span></p>
        <span className="mx-1 text-green-500">{Math.round(Mdetails?.vote_average)}/10 Rating</span></div>
</div>
        </div>
       {/* {ShowSuggetion ? <Movie_Suggetions MovieId={MovieId[0]?.id}/> :" "} */}
       <Movie_Suggetions MovieId={MovieId[0]?.id}/>
    </div>)
}

const MovieCard = ({data})=>{
    return(<>
<iframe className="w-screen aspect-video  " src={"https://www.youtube.com/embed/"+data+"?&autoplay=1&mute=1" }
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
        setSuggestion(Json)
    }
    return(!suggestion)?( <div className="flex flex-col justify-center items-center h-[auto] py-[2rem] bg-black ">
    <img src={EmptySuggestionImg} alt="Empty img" className="h-[200px] drop-shadow-2xl xxsm:h-[180px] xsm:h-[180px] sm:h-[190px] "></img>
    <p className="text-md text-white font-bold ">Loading suggestions...</p></div>)
    :(<div className=" text-white  ">
        <p className="text-xl font-semibold text-white p-4 bg-black ">Similar shows </p>
       <div className=" flex flex-wrap  justify-evenly  h-[30rem] pt-2  overflow-x-scroll no-scrollbar bg-black ">
        {
            suggestion?.results?.map((data)=> <SuggestionCards data={data}/>)
        }
        </div>
        
    </div>)
}



export default Movies
