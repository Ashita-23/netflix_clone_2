import './App.css';
import {  RouterProvider, createBrowserRouter} from 'react-router-dom';
import SignIn from './Components/sign_in';
import BrowseComponent from './finalComponents/BrowseComponents';
import { lazy , Suspense} from 'react';
// import Tv_WatchPage from './Components/WatchPage/TVwatchPages';




function App() {

 const TvComponets = lazy(()=>import('./finalComponents/TvComponents'));
 const Watch_List = lazy(()=>import('./finalComponents/watch_List'));
 const Watch_Page_For_Movies  = lazy(()=>import("./finalComponents/WatchPageForMovies"));
 const Watch_Page_For_Tvs  = lazy(()=>import('./finalComponents/WatchPageForTv'));

const AppRouter = createBrowserRouter([
  {path:"/",
   element:<SignIn></SignIn>},
   {
    path:"/browse",
    element:<BrowseComponent/>
   },
   {
    path:"/Tv",
    element:  <Suspense fallback={""}><TvComponets/></Suspense>
   },
   {
    path:"/watchlist",
    element:<Suspense fallback={""}><Watch_List/></Suspense>
   },
   {
    path:"/mvWatchpage",
    element:<Suspense fallback={""}><Watch_Page_For_Movies /></Suspense>
   },
   {
    path:"/tvWatchpage",
    element:<Suspense fallback={""}><Watch_Page_For_Tvs /></Suspense>
   }
])




  return (<div>
<RouterProvider router={AppRouter}/>
  </div>  );
}

export default App;

