import { Link, useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { auth } from "../utils/fireBase"
import {signOut} from "firebase/auth"
import { onAuthStateChanged } from 'firebase/auth';
import {RemoveUser } from '../RStore/userSlice';
import { AddShowTvCard} from "../RStore/tvSearchToggle"

const TvNav = ()=>{
    const IsTVCard = useSelector((store)=>store.Tv_SearchToggle.IsTVCard)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const Location= useLocation()
    // console.log(Location,"path location")
    // console.log(Location.pathname,"path location")


    const SignOutHandler = ()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        // navigate("/")
      }).catch((error) => {
        // An error happened.
        // navigate("/error")
      });
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
        } else {
          // User is signed out
          // ...
          dispatch(RemoveUser())
          navigate("/")
          
        }
      });
      return()=>{unsubscribe()}
    },[])


    return(<nav className="w-[100%] fixed h-20 px-4  bg-gradient-to-b from-black z-20 flex justify-around items-center  z-50">
    <div className="border border-red-600 flex items-center w-6/12 ">
    <span className="text-red-600 text-center ml-[0.5rem]  font-bold text-[2rem] tracking-wider sm: md:">CHALCHITRA</span>
   <ul className="border border-red-600 flex text-white ml-6 ">
   <Link to={"/browse"}><li className="text-md p-1 m-1 hover:text-slate-500">Home</li></Link>
    <Link to={"/Tv"}><li className="text-md p-1 m-1 hover:text-slate-500">TV</li></Link>
    <Link to={"/browse"}><li className="text-md p-1 m-1 hover:text-slate-500">Movie</li></Link>
    <Link to={"/watchlist"}  ><li className="text-md p-1 m-1 hover:text-slate-500" >My list</li></Link>
   </ul></div>
   <div className="border border-red-600 w-4/12 flex justify-around items-center">
   {
    Location.pathname!=="/watchlist" ? <div>{IsTVCard?<button className="text-white bg-red-600 px-4 py-1 rounded-md" onClick={()=>dispatch( AddShowTvCard(false))} >Search</button>:
    <button className="text-white bg-red-600 px-4 py-1 rounded-md" onClick={()=>dispatch( AddShowTvCard(true))} >Tv Series</button>} </div>:" "
   }
    <div className="border border-green-400 flex items-center">
     <p className="p-1 border border-red-400 text-red-500 text-2xl mx-4" ><i className="fa-solid fa-user-astronaut"></i></p>
    <button  className="text-white bg-slate-400 px-4 py-1 rounded-md" onClick={()=>SignOutHandler()}> Sign out</button>
    </div>
   </div>
    </nav> )
}

export default TvNav