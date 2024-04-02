import { useSelector } from "react-redux"
import TvNav from "./Components/nav"
import Tv_Shows from "./Components/tvShows"
// import {Tv_SearchToggle} from "./RStore/netflixStore"
import TvSearchPage from "./Components/doTvSearch"


const TvComponets = ()=>{
const IsTVCard = useSelector((store)=>store.Tv_SearchToggle.IsTVCard)
// console.log(IsTVCard,"IsTvshow")
    return(<div className=" overflow-scroll h-[100vh] pb-2 relative bg-black">
     <TvNav></TvNav>
         {
            IsTVCard? <Tv_Shows></Tv_Shows> : <TvSearchPage></TvSearchPage>
        } 
    </div>)
}

export default TvComponets