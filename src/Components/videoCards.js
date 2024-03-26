import { useDispatch } from "react-redux"
import {POSTER_API} from "../utils/apiOptions"
import { addMovieID } from "../RStore/movieId"
// import Movies from "./Movies"


// import {AddShowMovie} from "../../RStore/showMovie"

const NowPlayingCards =({NowData,titleText})=>{

    const dispatch = useDispatch()



    return(<>
        <div className="p-2 relative"  >
       <h1 className="text-2xl font-semibold p-2 text-white" key={titleText.key} >{titleText.titleText} </h1>
         <div className="flex overflow-x-scroll p">
         {NowData?.map((data)=>{return(<img src={POSTER_API+data?.poster_path} alt="poster" className="w-[150px] mx-2" key={data?.vote_count} 
         onClick={()=> dispatch(addMovieID(data))}></img>)})}

         </div>
     
      
        </div>
        
      {/* <div className="border border-red-700 h-[60%] w-screen sticky bg-black backdrop-blur-sm -mt-[20%] flex justify-center items-center z-[100] ">
      <Movies/>
        </div>   */}
        </>
    )
}

export default NowPlayingCards