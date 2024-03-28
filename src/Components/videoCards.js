import { useDispatch } from "react-redux"
import {POSTER_API} from "../utils/apiOptions"
import { addMovieID } from "../RStore/movieId"
// import Movies from "./Movies"


// import {AddShowMovie} from "../../RStore/showMovie"

const NowPlayingCards =({NowData,titleText})=>{

    const dispatch = useDispatch()



    return(<div className="p-2 relative"  >
       <h1 className="text-2xl font-semibold p-2 text-white" key={titleText?.key} >{titleText?.titleText} </h1>
         <div className="flex overflow-scroll p-1 no-scrollbar ">
         {NowData?.map((data)=>{return(<img src={POSTER_API+data?.poster_path} alt="poster" className="w-[150px] mx-2" key={data?.vote_count} 
         onClick={()=> dispatch(addMovieID(data))}></img>)})}
         </div>
        </div>
  
        
    )
}

export default NowPlayingCards