import './App.css';
import {  RouterProvider, createBrowserRouter} from 'react-router-dom';
import SignIn from './Components/sign_in';
import BrowseComponent from './BrowseComponents';
import { lazy , Suspense} from 'react';




function App() {

 const TvComponets = lazy(()=>import('./TvComponents'));
 const Watch_List = lazy(()=>import('./watch_List'));

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
   }
])




  return (<div>
<RouterProvider router={AppRouter}/>
  </div>  );
}

export default App;

