import { useLayoutEffect, useState } from "react"


const useScreenWith = ()=>{
    const [screenSize,setScreenSize]=useState()

    useLayoutEffect(()=>{
        function upDateSize(){
            setScreenSize(window.screen.width)
        }
        window.addEventListener("resize",upDateSize)
        return()=> window.removeEventListener("resize",upDateSize)
    },[])

    return screenSize
}

export default useScreenWith
