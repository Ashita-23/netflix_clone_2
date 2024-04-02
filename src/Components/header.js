
import { useNavigate } from "react-router"
import { AddToggle } from "../RStore/searchToggle"
import {  useDispatch, useSelector } from "react-redux"
import { auth } from "../utils/fireBase"
import {signOut} from "firebase/auth"
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { AddUser, RemoveUser } from '../RStore/userSlice';
import { Link } from "react-router-dom"
import useScreenWith from "../utils/useWithSize"



export const SmallHeader=()=>{
  const [ShowSideBar,setShowSideBar]=useState(false)
  const dispatch=useDispatch()
  const toggleValue=useSelector((store)=>store.Search_Toggel.IsShow)
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
          dispatch(AddUser({uid:uid,email:email,displayName:displayName}))
          navigate("/browse")
          
        // }
      } else {
        // User is signed out
        // ...
        dispatch(RemoveUser())
        navigate("/")
        
      }
    });

    return()=>{unsubscribe()}
  },[])
  return(<><nav className="w-[100%]  fixed h-20 px-2  bg-gradient-to-b from-black  flex justify-around items-center z-50 xxsm:h-[2rem] xsm:h-[2.2rem] sm:justify-center md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl:">
  <div className=" flex items-center w-6/12  xxsm:w-[60%] xsm:w-[60%] sm:w-[60%] md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl ">
  <button className=" text-white text-3xl xxsm:text-[0.9rem] xsm:text-[1rem] sm:text-[1.2rem] ml-[0.6rem] md:text-[1.2rem]  lg:text-[1.2rem] xl:text-[1.2rem] 2xl:text-[1.2rem] 3xl:text-[1.3rem] 4xl:text-[1.3rem] 5xl:text-[1.3rem] 6xl:text-[1.3rem] " onClick={()=>setShowSideBar(!ShowSideBar)}><i className="fa-solid fa-bars"></i></button>
  <span className="text-red-600 text-[1.9rem] text-center ml-[0.5rem]  font-bold tracking-wider xxsm:text-[1rem] xsm:text-[1.1rem] sm:text-[1.2rem]  ">CHALCHITRA</span>
  </div>
  <div className=" w-4/12 flex justify-end items-center xxsm:w-[40%] xsm:w-[40%]  sm:w-[35%] md:justify-end lg:justify-end xl:justify-end 2xl:justify-end 3xl:justify-end 4xl:justify-end 5xl:justify-end 6xl:justify-end ">
 {
  Location.pathname!=="/watchlist" ? <div>{toggleValue?<button className="text-red-600 px-[0.5rem] py-[0.2rem] rounded-md cursor-pointer text-xl xxsm:text-[1rem] xsm:text-[1.1rem]" onClick={()=>dispatch(AddToggle(true))} ><i className="fa-solid fa-magnifying-glass"></i></button>:
  <button className="text-red-600 px-[0.5rem] py-[0.2rem] rounded-md cursor-pointer  text-xl xxsm:text-[1rem] xsm:text-[1.1rem]" onClick={()=>dispatch(AddToggle(false))} ><i className="fa-solid fa-film"></i></button>} </div>:" "
 }
  {/* <div className="border border-green-400 ml-1 flex items-center justify-center xxsm: xsm: sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: "> */}
  <button  className="text-white px-[0.1rem] py-[0.2rem] mx-[0.2rem] rounded-md cursor-pointer  text-xl xxsm:text-[1rem] xsm:text-[1.1rem]" onClick={()=>SignOutHandler()}> <i className="fa-solid fa-right-from-bracket"></i></button>
   <p className="p-1  text-red-600 text-xl  " ><i className="fa-solid fa-user-astronaut"></i></p>
  </div>
 {/* </div> */}
  </nav>
  
  { !ShowSideBar ? " ":
  <div className="absolute  bg-black bg-opacity-80 h-[100%] w-screen z-50 ">
      <ul className="  p-1 pt-5  bg-black flex flex-col h-full w-[15rem] text-white  text-[1.2rem] xxsm:w-[10.5rem] text-[0.9rem]  xsm:text-[0.9rem] w-[10.5rem] sm:text-[0.9rem] lg:w-[18rem] xl:w-[22rem]">
    <button  className=" pr-1 text-red-600 text-[1.4rem]  text-right xxsm:text-[1.1rem] xsm:text-[1.2rem]sm:text-[1.2rem] cursor-pointer outline-none"  onClick={()=>setShowSideBar(!ShowSideBar)}><i className="fa-solid fa-xmark"></i></button>
    <li  className="text-red-600 ml-[0.5rem] text-[1.6rem] font-bold tracking-wider xxsm:text-[1rem] xsm:text-[1.1rem] sm:text-[1.2rem] ">CHALCHITRA</li>
<Link to={"/browse"}><li className="cursor-pointer  p-1 m-1 hover:text-slate-500">Home</li></Link>
<Link to={"/Tv"}><li className=" cursor-pointer  p-1 m-1 hover:text-slate-500">TV</li></Link>
<Link to={"/browse"}><li className=" cursor-pointer  p-1 m-1 hover:text-slate-500">Movie</li></Link>
<Link to={"/watchlist"}  ><li className="cursor-pointer  p-1 m-1 hover:text-slate-500" >List</li></Link>
</ul></div>
  }
  </>
)
}


const Navigation= ()=>{

    const toggleValue=useSelector((store)=>store.Search_Toggel.IsShow)
    // console.log(toggleValue,"toggleValue")

    const dispatch = useDispatch()
    const navigate=useNavigate()
    const screenSize=useScreenWith()

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
            dispatch(AddUser({uid:uid,email:email,displayName:displayName}))
            navigate("/browse")
            
          // }
        } else {
          // User is signed out
          // ...
          dispatch(RemoveUser())
          navigate("/")
          
        }
      });

      return()=>{unsubscribe()}
    },[])
    return((screenSize>640)? (<nav  className="w-[100%] fixed h-20 px-2  bg-gradient-to-b from-black  flex justify-around items-center z-50 xxsm: xsm: sm:justify-center ">
    <div className=" flex items-center w-6/12  xxsm: xsm: sm:w-[60%]">
    <span className="text-red-600 text-center ml-[0.5rem]  font-bold text-[1.9rem] tracking-wider xxsm: xsm: sm:text-[1.3rem] ml-[0.9rem] md:text-[1.4rem] lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: ">CHALCHITRA</span>
   <ul className="flex text-white ml-6 text-md xxsm: xsm: sm:text-[0.9rem] ml-[0.1rem] md:text-[0.9rem] ml-[0.2rem] lg:ml-[0.4rem] xl: 2xl: 3xl: 4xl: 5xl: 6xl: ">
   <Link to={"/browse"}><li className="cursor-pointer  p-1 m-1 hover:text-slate-500">Home</li></Link>
    <Link to={"/Tv"}><li className="cursor-pointer  p-1 m-1 hover:text-slate-500" >TV</li></Link>
    <Link to={"/browse"}><li className="cursor-pointer  p-1 m-1 hover:text-slate-500">Movie</li></Link>
    <Link to={"/watchlist"}><li className="cursor-pointer  p-1 m-1 hover:text-slate-500">My list</li></Link>
   </ul></div>
   <div className=" w-4/12 flex justify-center items-center xxsm: xsm: sm:w-[35%] md:justify-end lg:justify-end xl:justify-end 2xl:justify-end 3xl:justify-end 4xl:justify-end 5xl:justify-end 6xl:justify-end ">
 {toggleValue?<button className="text-white bg-red-600 px-4 py-1 rounded-md cursor-pointer xxsm: xsm: sm:text-[0.9rem] md:text-[0.9rem] lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: " onClick={()=>dispatch(AddToggle(true))} >Search</button>:
    <button className="text-white bg-red-600 px-4 py-1 rounded-md cursor-pointer xxsm: xsm: sm:text-[0.9rem] md:text-[0.9rem] lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: " onClick={()=>dispatch(AddToggle(false))} >Home</button>}
    <div className=" ml-1 flex items-center justify-center xxsm: xsm: sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: ">
    <button  className="text-white bg-slate-400 px-4 py-1 rounded-md cursor-pointer xxsm: xsm: sm:text-[0.9rem] md:text-[0.9rem] lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: " onClick={()=>SignOutHandler()}> Sign out</button>
     <p className="p-1  text-red-500 text-2xl mx-1 "><i className="fa-solid fa-user-astronaut"></i></p>
    </div>
   </div>
    </nav>):<SmallHeader/> )
}

export  default Navigation
