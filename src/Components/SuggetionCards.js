
import { POSTER_API } from "../utils/apiOptions"
import dummyImg from "../assets/noData.png"

 const SuggestionCards=({data})=>{
    return <div className="drop-shadow-lg m-2 flex flex-col w-4/12 h-[15.5rem] items-center overflow-hidden bg-black"  >
  {!POSTER_API+data?.backdrop_path?  <img src={POSTER_API+data?.backdrop_path} alt="poster" className="w-[280px] m-0" key={ data?.vote_count} ></img>
  :<img src={dummyImg} alt="poster" className="w-[140px] m-[auto]" key={ data?.vote_count} ></img>
   }
    <div className=" flex flex-col w-[100%] ">
    <p className="text-[0.9rem] p-1 text-center">{data.title||data.name}</p>
    <div className="text-green-500 text-sm py-2 px-1 flex justify-around ">
    <span><i className="fa-regular fa-star"></i> {Math.round(data?.vote_average)}</span> {" "}
    <span><i className="fa-regular fa-eye"></i>  {data?.vote_count/10}K</span> 
    <button className="bg-red-600 text-sm text-white px-2 py-1 hover:bg-gray-500">Watch Now</button>
    </div>
    </div>
    </div>
}

export default SuggestionCards