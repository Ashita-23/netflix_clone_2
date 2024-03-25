// import { useEffect, useState}
import { useTV_Series,useTV_SeriesOnAir,useTV_SeriesPopular,useTV_SeriesTop_rated } from "../utils/useProjectApi"
// import Navigation from "./header"
import TvBackdropCard from "./tvBackDrop"
import NowPlayingCards from "../Components/videoCards"
import {TvCardsTitle} from "../utils/hardCodedData"


const Tv_Shows = ()=>{
const TV_Series = useTV_Series() 
const TV_SeriesOnAir = useTV_SeriesOnAir()
const TV_SeriesPopular = useTV_SeriesPopular()
const TV_SeriesTop_rated = useTV_SeriesTop_rated()


    return(<>
  <div className="border border-red-500 h-[auto] w-[full] overflow-scroll">
  {/* <Navigation></Navigation> */}
  <TvBackdropCard backdropData={TV_Series}/>
  <div className="border bg-black  ">
    <div className="p-2 -mt-[14%] z-40 absolute">
                <NowPlayingCards  NowData={ TV_Series?.results} titleText={TvCardsTitle[0]} key={TV_Series?.results.id} ></NowPlayingCards> 
                </div> 
               <div className=" mt-[7rem]">
                <NowPlayingCards  NowData={TV_SeriesPopular?.results} titleText={TvCardsTitle[1]} key={TV_SeriesPopular?.results.id}></NowPlayingCards>
               <NowPlayingCards  NowData={TV_SeriesOnAir?.results} titleText={TvCardsTitle[2]} key={TV_SeriesOnAir?.results.id}></NowPlayingCards>
               <NowPlayingCards  NowData={TV_SeriesTop_rated?.results} titleText={TvCardsTitle[3]} key={TV_SeriesTop_rated?.results.id}></NowPlayingCards>
               </div> 

    </div>  

  </div>
    </>)
}

export default Tv_Shows