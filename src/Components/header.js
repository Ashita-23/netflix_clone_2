
import { useNavigate } from "react-router"
import { AddToggle } from "../RStore/searchToggle"
import {  useDispatch, useSelector } from "react-redux"
import { auth } from "../utils/fireBase"
import {signOut} from "firebase/auth"
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { AddUser, RemoveUser } from '../RStore/userSlice';


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
    return <nav className="w-[100%]  h-20 px-4 absolute bg-gradient-to-b from-black z-20 flex justify-between items-center">
    <span className="text-red-600 text-center ml-[0.5rem]  font-bold text-[2rem] tracking-wider sm: md:">CHALCHITRA</span>
   <div className="border border-red-600 w-4/12 flex justify-around items-center">
 {toggleValue?<button className="text-white bg-red-600 px-4 py-1 rounded-md" onClick={()=>dispatch(AddToggle(true))} >Search</button>:
    <button className="text-white bg-red-600 px-4 py-1 rounded-md" onClick={()=>dispatch(AddToggle(false))} >Home</button>}
   
    <button  className="text-white bg-slate-400 px-4 py-1 rounded-md" onClick={()=>SignOutHandler()}> <i className="fa-regular fa-face-smile"></i> Sign out</button>
   </div>
    </nav> 
}

export  default Navigation