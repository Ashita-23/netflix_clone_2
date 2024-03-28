
import { useNavigate } from "react-router"
import { AddToggle } from "../RStore/searchToggle"
import {  useDispatch, useSelector } from "react-redux"
import { auth } from "../utils/fireBase"
import {signOut} from "firebase/auth"
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { AddUser, RemoveUser } from '../RStore/userSlice';
import { Link } from "react-router-dom"


const Navigation= ()=>{

    const toggleValue=useSelector((store)=>store.Search_Toggel.IsShow)
    // console.log(toggleValue,"toggleValue")

    const dispatch = useDispatch()
    const navigate=useNavigate()

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
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName} = user;
          // ...
          dispatch(AddUser({uid:uid,email:email,displayName:displayName}))
          navigate("/browse")
          
        } else {
          // User is signed out
          // ...
          dispatch(RemoveUser())
          navigate("/")
          
        }
      });

      return()=>{unsubscribe()}
    },[])
    return <nav className="w-[100%]  fixed h-[3rem] bg-gradient-to-b from-black z-20 flex justify-around items-center xxsm: xsm:h-[4rem] sm:h-[4rem] justify-evenly md:h-[4rem] lg:h-[4rem] xl:h-[4rem] 2xl:h-[4rem] 3xl:h-[4rem] 4xl:h-[4rem] 5xl:h-[4rem] 6xl:h-[4rem] ">
    <div className=" flex items-center w-6/12  xxsm: xsm:w-7/12 sm:w-8/12  md:w-7/12  lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl:">
    <span className="text-red-600 text-center ml-[0.5rem]  font-bold text-[1rem] tracking-wider
     xxsm:  xsm: sm:text-[1.4rem]  md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-3xl 4xl:text-3xl 5xl:text-3xl 6xl:text-3xl ">CHALCHITRA</span>
   <ul className=" flex  text-white ml-6 xxsm: xsm:ml-0 sm:ml-0 md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl:">
   <Link to={"/browse"}><li className="text-md p-1 m-1 hover:text-slate-500 xxsm: xsm: sm:text-sm md: lg: xl: 2xl: 3xl: 4xl: 5xl:h-20 6xl:">Home</li></Link>
    <Link to={"/Tv"}><li className="text-md p-1 m-1 hover:text-slate-500 xxsm: xsm:text-sm sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl:h-20 6xl:">TV</li></Link>
    <Link to={"/browse"}><li className="text-md p-1 m-1 hover:text-slate-500 xxsm: xsm:text-sm sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl:h-20 6xl:">Movie</li></Link>
    <Link to={"/watchlist"}><li className="text-md p-1 m-1 hover:text-slate-500 xxsm: xsm:text-sm sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl:h-20 6xl:">My list</li></Link>
   </ul></div>
   <div className="w-4/12  flex justify-center items-center xxsm: xsm: sm:w-5/12 md:w-4/12  lg:w-3/12 xl:w-3/12 2xl:w-2/12 3xl:w-2/12 4xl:w-2/12 5xl:w-2/12  6xl:w-2/12">
 {toggleValue?<button className="text-white bg-red-600 px-4 py-1 rounded-md xxsm:  xsm: sm:text-sm md:text-[0.9rem] lg:text-md xl:text-md 2xl:text-md 3xl: 4xl: 5xl:h-20 6xl:" onClick={()=>dispatch(AddToggle(true))} >Search</button>:
    <button className="text-white bg-red-600 px-4 py-1 rounded-md xxsm: xsm: sm:text-sm md: lg: xl: 2xl: 3xl: 4xl: 5xl:h-20 6xl:" onClick={()=>dispatch(AddToggle(false))} >Home</button>}
    <div className=" flex justify-center items-center xxsm: xsm: sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl:h-20 6xl:">
    <button  className="text-white bg-slate-400 px-2 py-1 ml-2 rounded-md xxsm: xsm:text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] px-3 lg:text-md xl:text-md 2xl:text-md 3xl: 4xl: 5xl:h-20 6xl:" onClick={()=>SignOutHandler()}> Sign out</button>
     <p className="p-1  text-red-500 text-2xl  xxsm: xsm:text-md mx-1  sm: md:text-2xl mx-[0.5rem] lg: xl: 2xl: 3xl: 4xl: 5xl:h-20 6xl:" ><i className="fa-solid fa-user-astronaut"></i></p>
    </div>
   </div>
    </nav> 
}

export  default Navigation