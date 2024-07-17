import { useSelector } from "react-redux"
import TvNav from "../Components/nav"
import Tv_Shows from "../Components/TVShowes/tvbrowser"
// import {Tv_SearchToggle} from "./RStore/netflixStore"
import TvSearchPage from "../Components/TVShowes/doTvSearch"


const TvComponets = ()=>{
const IsTVCard = useSelector((store)=>store.Tv_SearchToggle.IsTVCard)
// console.log(IsTVCard,"IsTvshow")
    return(<div className="    h-[auto] pb-1 relative bg-black  ">
     <TvNav></TvNav>
         {
            IsTVCard? <Tv_Shows></Tv_Shows> : <TvSearchPage></TvSearchPage>
        } 
    </div>)
}

export default TvComponets