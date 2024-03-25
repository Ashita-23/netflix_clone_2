import FooterCards from "./footerCards"
import FooterQues from "./footerQues"
import netflixCover from "../assets/netflixCover.jpeg"
import { useSelector,useDispatch } from "react-redux"
import { AddSignIn } from "../RStore/formToggle"
import { SignUpValidation,SignInValidation } from "../utils/FormValidation"
import { useRef, useState } from "react"
import { signInWithEmailAndPassword ,  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/fireBase"
import { useNavigate } from "react-router"

const SignIn = () => {
    // console.log(footerCardsData)
    const IsIN_UP = useSelector((store)=>store.Form_Toogle.IsSignInOrUp)
    const dispatch = useDispatch()
 const navigate= useNavigate()
    const name = useRef(null)
    const email=useRef(null)
    const password = useRef(null)
    const INemail=useRef(null)
    const INpassword = useRef(null)

    const [VSU_Message,setVSU_Message] = useState()
    const [VSI_Message,setVSI_Message] = useState()

    const SignUpHandler=()=>{
      // validate from data
      const Message = SignUpValidation(name.current.value,email.current.value,password.current.value)
      setVSU_Message(Message)
      if(Message===null){
        createUserWithEmailAndPassword(auth,email.current.value, password.current.value,name.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    navigate("/browse")
    console.log(user,"Sign up user")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage,"Sign up errorMessage")
    setVSU_Message(errorCode+"--"+errorMessage)
    // ..
  });
      }
    }

    const SignInHandler=()=>{
      // validate from data
      const Message =  SignInValidation(INemail.current.value,INpassword.current.value)
      setVSI_Message(Message)
   if (Message===null){
      signInWithEmailAndPassword(auth, INemail.current.value,INpassword.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse")

    console.log(user,"Sign in user")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setVSI_Message(errorCode+"-- "+errorMessage)
    
  });}

    }

    return   (<>
      
         <nav className="w-[100%]  h-[4rem] px-4 absolute bg-gradient-to-b from-black z-20 flex justify-between items-center"> 
        <span className="text-red-600 text-center ml-[0.5rem]  font-bold text-[2rem] tracking-wider sm: md:">CHALCHITRA</span> 
         <button  className="text-white bg-slate-400 px-4 py-1 rounded-md" onClick={()=>dispatch(AddSignIn(true))}> <i className="fa-regular fa-face-smile"></i> {IsIN_UP?" Sign in":"Sign up"}</button> </nav>  
         <div className="w-[100%] h-[auto]  border border-gray-500">
            <img src={netflixCover}  alt="background image" className="w-screen "/>
            <div className="border border-green-600 mt-[-40%] ml-[40%] bg-black  absolute py-[3rem] px-[1.5rem] rounded-md"> 
            {/* <h1>Unlimited movies, TV shows and more</h1> */}
               {  IsIN_UP ? <form onSubmit={(e)=>e.preventDefault()} className="border border-red-600  w-[20rem] px-4 py-2 rounded-md bg-black flex flex-col justify-evenly item-center  ">
                   <p className="text-2xl font-bold text-white my-2">Sign Up</p>
                    <input type="text" ref={name} placeholder="Enter Your Name.." className="text-md rounded-md p-2 my-2"/>
                    <input type="email" ref={email} placeholder="Enter Your Email.." className="text-md rounded-md p-2 my-2"/>
                    <input  type="password" autoComplete="on" ref={password} placeholder="Enter Your Password" className="text-md rounded-md p-2 my-2"/>
                    <p className="text-[0.8rem] text-red-500 p-1 m-1">{VSU_Message}</p>
                    <button className="text-md bg-red-600 text-white rounded-md p-2 my-2" onClick={()=>SignUpHandler()}>Sign up</button>
                </form>:
                <form  onSubmit={(e)=>e.preventDefault()}  className="border border-red-600  w-[20rem] px-4 py-2 rounded-md bg-black flex flex-col justify-evenly item-center  ">
                  <p className="text-2xl font-bold text-white my-2">Sign In</p>
                    <input type="email" ref={INemail} placeholder="Enter Your Email.." className="text-md rounded-md p-2 my-2"/>
                    <input  type="password" autoComplete="on" ref={INpassword} placeholder="Enter Your Password" className="text-md rounded-md p-2 my-2"/>
                    <p className="text-[0.8rem] text-red-500 p-1 m-1">{VSI_Message}</p>

                    <button className="text-md bg-red-600 text-white rounded-md p-2 my-2" onClick={()=>SignInHandler()}>Sign in</button>
                </form> }
{  IsIN_UP   ? <div className="text-white px-6 py-0  text-left"><span className="text-sm">Already registered? </span>
            <button className="text-red-500 text-sm" onClick={()=>{dispatch(AddSignIn(false)) }}> Sign In Now.</button></div>:
            <div className="text-white px-6 py-0  text-left"><span className="text-sm">If you are not registered? </span>
            <button className="text-red-500 text-sm" onClick={()=>dispatch(AddSignIn(true))}> Sign up</button></div>
            }
            </div> 

          <div className=" bg-black p-6">
            <FooterCards/>
            <FooterQues/>
            <div className="text-white flex justify-center p-1 mt-[3.5rem]"><p className="text-sm  ">Netflix Clone {"( CHALCHITRA )"} <i className="fa-regular fa-copyright text-sm "></i> 2024</p></div>
          </div>
        </div>
       </>)
}

export default SignIn