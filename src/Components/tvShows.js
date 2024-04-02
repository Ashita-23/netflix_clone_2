
import { useTV_Series,useTV_SeriesOnAir,useTV_SeriesPopular,useTV_SeriesTop_rated } from "../utils/useProjectApi"
// import Navigation from "./header"
import TvBackdropCard from "./tvBackDrop"
import TvSeriesCards from "./TvSeriesCards"
import TvSeries from "./Searies"
import {TvCardsTitle} from "../utils/hardCodedData"
import {  useSelector } from "react-redux"




const Tv_Shows = ()=>{
  // const dispatch=useDispatch()
const TV_Series = useTV_Series() 
const TV_SeriesOnAir = useTV_SeriesOnAir()
const TV_SeriesPopular = useTV_SeriesPopular()
const TV_SeriesTop_rated = useTV_SeriesTop_rated()
// const  =useSelector((store)=>store.Show_Series.IsSeries)
// console.log(ShowSeries,"Show series..")
const Show_Series = useSelector((store)=>store.Series_Id.IsSeries)
// console.log(Series_Id,"S id")

// useEffect(()=>{ 
//     if(Series_Id.length===0){return}
//   setShowSeriesToggle()
// },[Series_Id])

// const setShowSeriesToggle = ()=>{

//       dispatch(AddShowSeries())
//   }

// if(Series_Id===null) return

    return(<>
  <div className=" h-[auto] w-[full] overflow-scroll no-scrollbar">
  {/* <Navigation></Navigation> */}
  <TvBackdropCard backdropData={TV_Series}/>
  <div className=" bg-black relative">
    <div className="p-2 ">
                <TvSeriesCards  NowData={ TV_Series?.results} titleText={TvCardsTitle[0]} key={TV_Series?.results?.id} ></TvSeriesCards> 
                <TvSeriesCards  NowData={TV_SeriesPopular?.results} titleText={TvCardsTitle[1]} key={TV_SeriesPopular?.results?.id} ></TvSeriesCards>
               <TvSeriesCards  NowData={TV_SeriesOnAir?.results} titleText={TvCardsTitle[2]} key={TV_SeriesOnAir?.results?.id}></TvSeriesCards>
               <TvSeriesCards  NowData={TV_SeriesTop_rated?.results} titleText={TvCardsTitle[3]} key={TV_SeriesTop_rated?.results?.id}></TvSeriesCards>
               </div> 

    </div>  

  </div>
  
{
    Show_Series ? <div className="border absolute  h-[25rem] w-[100%] mt-[-94vh]  p-4 flex justify-center ">
           <TvSeries/>
        </div>  : " "
}
    </>)
}

export default Tv_Shows