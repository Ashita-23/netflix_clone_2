import DoSearchPage from "../Components/TVShowes/doSearch"
import MvBrowse from '../Components/MVShowes/Mvbrowser'
import {  useSelector } from 'react-redux';
import Navigation from "../Components/header"

const BrowseComponent = ()=>{
      const togglePage = useSelector((store)=>store.Search_Toggel.IsShow)
//   console.log(togglePage,"togglePage")
    return(<div className="  h-[100vh] pb-1 relative bg-black">
    <Navigation></Navigation>
{
  togglePage? <MvBrowse></MvBrowse>: <DoSearchPage></DoSearchPage>
}
    </div>)
}

export default BrowseComponent