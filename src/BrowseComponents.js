import DoSearchPage from "./Components/doSearch"
import Browse from './Components/browser'
import {  useSelector } from 'react-redux';
import Navigation from "./Components/header"

const BrowseComponent = ()=>{
      const togglePage = useSelector((store)=>store.Search_Toggel.IsShow)
//   console.log(togglePage,"togglePage")
    return(<div className=" overflow-scroll h-[100vh] relative">
    <Navigation></Navigation>
{
  togglePage? <Browse></Browse>: <DoSearchPage></DoSearchPage>
}
    </div>)
}

export default BrowseComponent