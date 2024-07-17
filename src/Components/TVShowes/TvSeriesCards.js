import { useDispatch } from "react-redux"
import {POSTER_API} from "../../utils/apiOptions"
import {addSeriesId} from "../../RStore/seriesId"
import {CardsImgShimmer} from "../../Components/shimmers/SMCards"
import { Link } from "react-router-dom"


const TvSeriesCards =({NowData,titleText})=>{

    const dispatch = useDispatch()

    const TvSeriesCardsHandler = (data)=>{

     dispatch(addSeriesId(data))
    // console.log(data,"dispatch data")
   
    }


    return(<div className="p-2 relative"  >
       <h1 className="text-2xl font-semibold p-2 text-white xxsm:text-sm xsm:text-sm sm:text-md md:text-lg " key={titleText?.key} >{titleText?.titleText} </h1>
         <div className="flex overflow-scroll no-scrollbar ">
         {!NowData? <CardsImgShimmer />:NowData?.map((data)=>{return(<Link to={"/tvWatchpage"} className="mx-2"><img src={POSTER_API+data?.poster_path} alt="poster" className="w-[160px] mx-2  xxsm:w-[100px]  xsm:w-[100px] sm:w-[120px] md:w-[130px] lg:w-[140px] xl:w-[150px]" key={data?.vote_count} 
         onClick={()=> TvSeriesCardsHandler(data)}></img></Link>)})}
         </div>
        </div>
  
        
    )
}

export default TvSeriesCards