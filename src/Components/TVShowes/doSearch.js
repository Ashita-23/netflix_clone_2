import { useEffect, useRef, useState } from "react"
// import openai from "../../utils/openai"
import { options } from "../../utils/apiOptions"
import netflixCover from "../../assets/netflixCover.jpeg"
import SearchCards from "../searchCards"
import SearchErrorCards from "../Errors/searchError"


const DoSearchPage = ()=>{

const searchText = useRef()

const [search,setSearch]=useState()
const [Movie_dataBySearch,setMovie_dataBySearch]=useState()

 useEffect(()=>{
    getData()
},[search])
//  xxsm: xsm: sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: */

const getData = async ()=>{
    const Api = await fetch("https://api.themoviedb.org/3/search/movie?query="+search+"&include_adult=false&language=en-US&page=1",options)
    const Json = await Api.json()
    // console.log(Json,"M by Stext")
    if(!Json?.results){ setMovie_dataBySearch([])}
    setMovie_dataBySearch(Json?.results.slice(0,5))
}

let sectionStyle = {
    width: "100%",
    backgroundImage: `url(${netflixCover})`,
    backgroundRepeat:" no-repeat",
    backgroundSize: "cover",
  };
if(!Movie_dataBySearch) return null
    return(<div className="h-[100vh] flex justify-center items-center"  style={sectionStyle}>
                    {/* <img alt="Cover" src={netflixCover} className="w-screen xxsm:h-[100vh] w xsm: sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl:" ></img> */}
                    <div className="flex flex-col bg-black bg-opacity-80   w-[90%] h-[80%]  xxsm:h-[85%] xsm: sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: ">
                   <form onSubmit={(e)=>e.preventDefault()} className="  w-12/12 flex py-4 px-2 items-center justify-center bg-black xxsm:w-[100%] xsm: sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl:">
                    <input type="text" ref={searchText} placeholder="What do you want to watch today?" className="w-10/12 py-2 px-4 text-md  rounded-l-md outline-none xxsm:text-[0.9rem]"/>
                    <button className=" cursor-pointer px-4 py-2 text-white text-md bg-red-600 rounded-r-md    xxsm:text-[0.9rem] sm: md: lg:"
                 onClick={()=>setSearch(searchText.current.value)}>Search</button>
                   </form>
                  { !search ? " ":<div className=" bg-black h-[90%]">
                    {Movie_dataBySearch.length === 0  ? <SearchErrorCards/>: 
                    <div className=" w-[100%] h-[100%] flex flex-wrap  p-[0.5rem] justify-center  bg-black  overflow-y-scroll no-scrollbar xxsm: ">
                   { Movie_dataBySearch?.map((data)=><SearchCards data={data}/>)}</div>}
                    
                  </div>}
                  </div>
                  </div>
                 )}


export default DoSearchPage