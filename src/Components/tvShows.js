import { useEffect} from "react"
import { useTV_Series,useTV_SeriesOnAir,useTV_SeriesPopular,useTV_SeriesTop_rated } from "../utils/useProjectApi"
// import Navigation from "./header"
import TvBackdropCard from "./tvBackDrop"
import TvSeriesCards from "./TvSeriesCards"
import TvSeries from "./Searies"
import {TvCardsTitle} from "../utils/hardCodedData"
import { useDispatch, useSelector } from "react-redux"
import { AddShowSeries } from "../RStore/showSeries"


const Tv_Shows = ()=>{
  const dispatch=useDispatch()
const TV_Series = useTV_Series() 
const TV_SeriesOnAir = useTV_SeriesOnAir()
const TV_SeriesPopular = useTV_SeriesPopular()
const TV_SeriesTop_rated = useTV_SeriesTop_rated()
const Show_Series =useSelector((store)=>store.Show_Series.IsSeries)
console.log(Show_Series,"Show series..")
const Series_Id = useSelector((store)=>store.Series_Id.id)
console.log(Series_Id,"S id")

useEffect(()=>{ 
    if(Series_Id ){
  setShowSeriesToggle()}
},[Series_Id])

const setShowSeriesToggle = ()=>{

      dispatch(AddShowSeries())
  }

// if(Series_Id===null) return

    return(<>
  <div className="border border-red-500 h-[auto] w-[full] overflow-scroll no-scrollbar">
  {/* <Navigation></Navigation> */}
  <TvBackdropCard backdropData={TV_Series}/>
  <div className="border bg-black  ">
    <div className="p-2 -mt-[14%] z-40 absolute">
                <TvSeriesCards  NowData={ TV_Series?.results} titleText={TvCardsTitle[0]} key={TV_Series?.results?.id} ></TvSeriesCards> 
                </div> 
               <div className=" mt-[7rem]">
                <TvSeriesCards  NowData={TV_SeriesPopular?.results} titleText={TvCardsTitle[1]} key={TV_SeriesPopular?.results?.id} ></TvSeriesCards>
               <TvSeriesCards  NowData={TV_SeriesOnAir?.results} titleText={TvCardsTitle[2]} key={TV_SeriesOnAir?.results?.id}></TvSeriesCards>
               <TvSeriesCards  NowData={TV_SeriesTop_rated?.results} titleText={TvCardsTitle[3]} key={TV_SeriesTop_rated?.results?.id}></TvSeriesCards>
               </div> 

    </div>  

  </div>
  
{
    Show_Series ? <div className="border border-green-700 h-[auto] p-10 w-[full] sticky bg-black -mt-[45%] flex justify-center items-center z-[40] ">
           <TvSeries/>
        </div>  : " "
}
    </>)
}

export default Tv_Shows