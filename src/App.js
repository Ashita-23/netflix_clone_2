import './App.css';
import {  RouterProvider, createBrowserRouter} from 'react-router-dom';
import SignIn from './Components/sign_in';
// import Navigation from './Components/Browse_Components/header';
import BrowseComponent from './BrowseComponents';
import TvComponets from './TvComponents';
import Watch_List from './watch_List';

// import Navigation from './Components/Browse_Components/header';



function App() {

 

const AppRouter = createBrowserRouter([
  {path:"/",
   element:<SignIn></SignIn>},
   {
    path:"/browse",
    element:<BrowseComponent/>
   },
   {
    path:"/Tv",
    element:<TvComponets/>
   },
   {
    path:"/watchlist",
    element:<Watch_List/>
   }
])




  return (<div>
<RouterProvider router={AppRouter}/>
  </div>  );
}

export default App;

