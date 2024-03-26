import { useEffect, useRef, useState } from "react"
// import openai from "../../utils/openai"
import { options } from "../utils/apiOptions"
import netflixCover from "../assets/netflixCover.jpeg"
import {POSTER_API} from "../utils/apiOptions"

const DoSearchPage = ()=>{

const searchText = useRef()

const [search,setSearch]=useState()
const [Movie_dataBySearch,setMovie_dataBySearch]=useState()

 useEffect(()=>{
    getData()
},[search])

// 'https://api.themoviedb.org/3/search/movie?query=koi%20mil%20gaya&include_adult=false&language=en-US&page=1'

const getData = async ()=>{
    const Api = await fetch("https://api.themoviedb.org/3/search/movie?query="+search+"&include_adult=false&language=en-US&page=1",options)
    const Json = await Api.json()
    // console.log(Json,"M by Stext")
    setMovie_dataBySearch(Json?.results.slice(0,5))
}

if(!Movie_dataBySearch) return null
    return(  <>
            <div>
                    <img alt="Cover" src={netflixCover} className="w-screen"></img>
                   <form onSubmit={(e)=>e.preventDefault()} className=" w-6/12 flex py-4 px-2 items-center justify-center absolute -mt-[45%] ml-[18%]  bg-black rounded-md ">
                    <input type="text" ref={searchText} placeholder="What do you want to watch today?" className="w-10/12 py-2 px-4 text-md  rounded-l-md outline-none"/>
                    <button className="px-4 py-2 text-white text-md bg-red-600 rounded-r-md" onClick={()=>setSearch(searchText.current.value)}>Search</button>
                   </form>
                   <div className="border border-red-700 w-6/12 h-[50%] flex flex-col py-4 px-2  justify-center absolute -mt-[38%] ml-[18%]  bg-black rounded-md overflow-hidden ">
                 
                 {
                    Movie_dataBySearch.length === 0  ? <div className=" m-2 flex flex-col items-center p-1">
                    <img src={"https://img.freepik.com/premium-photo/cute-puppy-small-miniature-golden-doodle-dog-animal-picture-ai-generated-image_210643-1624.jpg"} className="w-[200px] h-[200px]" />
                    {/* <div className="border border-red-800 p-2"> */}
                    <p className="text-white text-2xl font-medium m-2">Try something else...</p>
                    {/* </div> */}
                    </div>
               :
                    Movie_dataBySearch.map((data)=><div className="border border-red-500 m-2 flex justify-around">
                    <img src={POSTER_API+data.poster_path} className="w-[150px] h-[200px]" />
                    <div className="border border-red-800 p-2">
                    <p className="text-white text-2xl">{data.title}</p>
                    <p className="text-[0.6rem] text-white truncate">{data.overview}</p>
                    <button className="rounded-sm text-white bg-red-600 px-3 py-2 m-2">Watch Now</button>
                    </div>
                    </div>)
                   }
                   </div>
                   {/* <div className="bg-black h-[50rem]"></div> */}
            </div>
        </>
    )
}


export default DoSearchPage