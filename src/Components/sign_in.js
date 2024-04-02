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

    let sectionStyle = {
      width: "100%",
      // height: "400px",
      backgroundImage: `url(${netflixCover})`,
      backgroundRepeat:" no-repeat",
      backgroundSize: "cover",
    };
  

    return   (<div className="relative h-[100vh] w-full overflow-scroll no-scrollbar " style={sectionStyle}>
      
         <nav className=" w-[100%]  bg-gradient-to-b from-black  h-[4rem] px-4  z-20 flex justify-between items-center fixed xxsm:h-[3rem] xsm:h-[3rem]"> 
        <span className="text-red-600 text-center ml-[0.5rem]  font-bold text-[2rem] tracking-wider xxsm:text-xl ml-[0.0rem] xsm:text-xl ml-[0.0rem] sm: md:">CHALCHITRA</span> 
         <button  className="text-white bg-slate-400 px-4 py-1 rounded-md xxsm:text-[0.9rem]" onClick={()=>dispatch(AddSignIn(true))}>{IsIN_UP?" Sign in":"Sign up"}</button> 
         </nav>  
         <div className="h-[100vh] flex flex-col justify-center items-center"  style={sectionStyle}>
            {/* <img src={netflixCover}  alt="background image" className="w-screen xxsm:h-[50vh] xsm:h-[60vh] sm:h-[60vh] md:h-[70vh] lg:w-screen  xl:w-screen 2xl:w-screen 3xl:w-screen 4xl:w-screen 5xl:w-screen  6xl:w-screen   "/> */}
            {/* <div className="flex flex-col justify-center items-center w-[100%]   mt-[-40%] ml-[0]   absolute py-[0.5rem] px-[1.5rem]
            xxsm:-mt-[22.2rem] ml-[0] xsm:-mt-[25rem] ml-0 sm:-mt-[25rem]  md:-mt-[26rem]  lg:-mt-[30rem] xl:-mt-[35rem]  2xl:ml-0 3xl:ml-0">  */}
            {/* <h1>Unlimited movies, TV shows and more</h1> */} 
               {  IsIN_UP ? <form onSubmit={(e)=>e.preventDefault()} className="  w-[25rem] px-[1.5rem] pt-4  bg-black  bg-opacity-90 flex flex-col justify-evenly item-center 
               xxsm:w-[100%] px-1 xsm:w-[20rem] sm:w-[20rem] md:w-[20rem] lg:w-[20rem] xl:w-[20rem] 2xl:w-[22rem] 3xl:w-[22rem] 4xl:w-[22rem] 5xl:w-[22rem] 6xl:w-[22rem] ">
                   <p className="text-2xl font-bold text-white my-2  xxsm:text-lg">Sign Up</p>
                    <input type="text" ref={name} placeholder="Enter Your Name.." className="text-md rounded-md p-2 my-2 bg-slate-800 text-white outline-none xxsm:text-sm"/>
                    <input type="email" ref={email} placeholder="Enter Your Email.." className="text-md rounded-md p-2 my-2 bg-slate-800 text-white outline-none  xxsm:text-sm"/>
                    <input  type="password" autoComplete="on" ref={password} placeholder="Enter Your Password" className="text-md rounded-md p-2 my-2 bg-slate-800 text-white outline-none  xxsm:text-sm"/>
                    <p className="text-[0.8rem] text-red-500 p-1 m-1">{VSU_Message}</p>
                    <button className="text-md bg-red-600 text-white rounded-md p-2 my-2  xxsm:text-sm" onClick={()=>SignUpHandler()}>Sign Up Now</button>
                </form>:
                <form  onSubmit={(e)=>e.preventDefault()}  className="w-[25rem] px-[1.5rem] py-2  bg-black  bg-opacity-90  flex flex-col justify-evenly item-center 
               xxsm:w-[100%] px-1 xsm:w-[20rem] sm:w-[20rem] md:w-[20rem] lg:w-[20rem] lx:w-[20rem] 2xl:w-[22rem] 3xl:w-[22rem] 4xl:w-[22rem] 5xl:w-[22rem] 6xl:w-[22rem] ">
                  <p className="text-2xl font-bold text-white my-2">Sign In</p>
                    <input type="email" ref={INemail} placeholder="Enter Your Email.." className="text-md rounded-md p-2 my-2 bg-slate-800 text-white outline-none"/>
                    <input  type="password" autoComplete="on" ref={INpassword} placeholder="Enter Your Password" className="text-md rounded-md p-2 my-2 bg-slate-800 text-white outline-none"/>
                    <p className="text-[0.8rem] text-red-500 p-1 m-1">{VSI_Message}</p>

                    <button className="text-md bg-red-600 text-white rounded-md p-2 my-2 " onClick={()=>SignInHandler()}>Sign In  </button>
                </form> }
{  IsIN_UP   ? <div className="text-white  px-6 pb-4 text-left w-[25rem] bg-black  bg-opacity-90 
 xxsm:w-[100%] px-1 xsm:w-[20rem] sm:w-[20rem] md:w-[20rem] lg:w-[20rem] xl:w-[20rem] 2xl:w-[22rem] 3xl:w-[22rem] 4xl:w-[22rem] 5xl:w-[22rem] 6xl:w-[22rem]"><span className="text-sm">Already registered? </span>
            <button className="text-red-500 text-sm" onClick={()=>{dispatch(AddSignIn(false)) }}> Sign In Now.</button></div>:
            <div className="text-white  px-6 pb-2 text-left w-[25rem] bg-black
 xxsm:w-[100%] px-1 xsm:w-[20rem] sm:w-[20rem] md:w-[20rem] lg:w-[20rem] xl:w-[20rem] 2xl:w-[22rem] 3xl:w-[22rem] 4xl:w-[22rem] 5xl:w-[22rem] 6xl:w-[22rem]"><span className="text-sm">If you are not registered? </span>
            <button className="text-red-500 text-sm" onClick={()=>dispatch(AddSignIn(true))}> Sign Up Now.</button></div>
      }
            </div> 
          <div className=" bg-black p-6 flex flex-col justify-center items-center xxsm:p-1 ">
            <FooterCards/>
            <FooterQues/>
            <div className="text-red-500 flex justify-center p-1 mt-[3.5rem]"><p className="text-sm xxsm:text-[0.8rem]  ">Netflix Clone {"( CHALCHITRA )"} 
            { " "}<i className="fa-regular fa-copyright text-sm xxsm:text-[0.8rem]"></i> 2024</p></div>
          </div>
        {/* </div> */}
       </div>)
}

export default SignIn