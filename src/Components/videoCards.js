import { useDispatch } from "react-redux"
import {POSTER_API} from "../utils/apiOptions"
import { addMovieID,addShowMovie } from "../RStore/movieId"

import  { CardsImgShimmer } from "./shimmers/SMCards"


const NowPlayingCards =({NowData,titleText})=>{

    const dispatch = useDispatch()

    const MoviesCardHandler =(data)=>{
    
        function movieId(data){
        dispatch(addMovieID(data))
        };
     function Toggle(){
     dispatch(addShowMovie(true))
        }
        movieId(data)
        Toggle()
    }
  

    return(<div className="p-2 relative"  >
       <h1 className="text-2xl font-semibold p-2 text-white xxsm:text-sm xsm:text-sm sm:text-md md:text-lg " key={titleText?.key} >{titleText?.titleText} </h1>
         <div className="flex overflow-scroll p-1 no-scrollbar ">
         {!NowData ? <CardsImgShimmer />: NowData?.map((data)=>{return(<img src={POSTER_API+data?.poster_path} alt="poster" className="w-[130px] mx-2  xxsm:w-[80px]  xsm:w-[90px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[120px]" key={data?.vote_count} 
         onClick={()=> MoviesCardHandler(data)}></img>)})}
         </div>
        </div>
  
        
    )
}

export default NowPlayingCards