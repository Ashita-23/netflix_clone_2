
import { useEffect, useRef, useState } from "react"
// import openai from "../../utils/openai"
import { options } from "../utils/apiOptions"
import netflixCover from "../assets/netflixCover.jpeg"
import SearchCards from "./searchCards"
import SearchErrorCards from "./searchError"


const TvSearchPage = ()=>{

const searchText = useRef()

const [search,setSearch]=useState()
console.log(search,"stext")
const [Movie_dataBySearch,setMovie_dataBySearch]=useState()

 useEffect(()=>{
    getData()
},[search])

// 'https://api.themoviedb.org/3/search/tv?query=good&include_adult=false&language=en-US&page=1''

const getData = async ()=>{
    const Api = await fetch("https://api.themoviedb.org/3/search/tv?query="+search+"&include_adult=false&language=en-US&page=1",options)
    const Json = await Api.json()
    // console.log(Json,"M by Stext")
    setMovie_dataBySearch(Json?.results.slice(0,5))
}

if(!Movie_dataBySearch) return null
    return(  <div>
                    <img alt="Cover" src={netflixCover} className="w-screen"></img>
                   <form onSubmit={(e)=>e.preventDefault()} className=" w-6/12 flex py-4 px-2 items-center justify-center absolute -mt-[45%] ml-[18%]  bg-black rounded-md ">
                    <input type="text" ref={searchText} placeholder="What do you want to watch today?" className="w-10/12 py-2 px-4 text-md  rounded-l-md outline-none"/>
                    <button className="px-4 py-2 text-white text-md bg-red-600 rounded-r-md" onClick={()=>setSearch(searchText.current.value)}>Search</button>
                   </form>
              {!search ? "": <div className="border border-green-700 w-6/12 h-[60%] flex flex-col p-[0.5rem] pt-[1rem] absolute -mt-[38%] ml-[18%]  bg-black rounded-md overflow-y-scroll no-scrollbar ">
                 {
                    Movie_dataBySearch.length === 0  ? <SearchErrorCards/>
               :
                    Movie_dataBySearch?.map((data)=><SearchCards data={data}/>)
                   }
                  
                   </div>}
            </div>
        
    )
}

export default TvSearchPage