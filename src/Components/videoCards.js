import { useDispatch } from "react-redux"
import {POSTER_API} from "../utils/apiOptions"
import { addMovieID } from "../RStore/movieId"
// import  { CardsImgShimmer } from "./shimmers/SMCards"
// import Movies from "./Movies"


// import {AddShowMovie} from "../../RStore/showMovie"

const NowPlayingCards =({NowData,titleText})=>{

    const dispatch = useDispatch()
  
// xxsm: xsm: sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl:

    //  if(NowData.length===0) return null;
    return(<div className="p-2 relative"  >
       <h1 className="text-2xl font-semibold p-2 text-white xxsm:text-sm xsm:text-sm sm:text-md md:text-lg " key={titleText?.key} >{titleText?.titleText} </h1>
         <div className="flex overflow-scroll p-1 no-scrollbar ">
         {NowData && NowData?.map((data)=>{return(<img src={POSTER_API+data?.poster_path} alt="poster" className="w-[130px] mx-2  xxsm:w-[80px]  xsm:w-[90px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[120px]" key={data?.vote_count} 
         onClick={()=> dispatch(addMovieID(data))}></img>)})}
         </div>
        </div>
  
        
    )
}

export default NowPlayingCards