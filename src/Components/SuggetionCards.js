
import { POSTER_API } from "../utils/apiOptions"
import dummyImg from "../assets/noData.png"

 const SuggestionCards=({data})=>{
//   console.log(data,"image data")
    return (<div className="drop-shadow-lg m-2 flex flex-col border border-slate-700 h-[12rem] justify-between items-center overflow-hidden bg-black xxsm:w-[12.5rem] xsm:w-[14rem] sm:h-[12rem] w-[10rem] md:h-[12rem] lg:h-[12rem] xl:h-[12rem] 2xl:h-[12rem] 3xl:h-[12rem] 4xl:h-[12rem] 5xl:h-[12rem] 6xl:h-[12rem]"  >
{!POSTER_API+data?.backdrop_path?<img src={POSTER_API+data?.backdrop_path} alt="poster" className="m-0 " key={ data?.vote_count} ></img>
:<img src={dummyImg} alt="poster" className="w-[110px} xxsm:w-[110px] xsm:w-[110px] sm:w-[110px] md:w-[110px] lg:w-[110px] lx:w-[110px] 2xl:w-[110px] 3xl:w-[110px] 4xl:w-[110px] 5xl:w-[110px] 6xl:w-[110px]" key={ data?.vote_count} ></img>}
    <div className=" flex flex-col w-[100%] p-1 justify-center  h-[50%] ">
    <p className="text-[0.9rem] p-1 text-center truncate w-[100%]   ">{data?.title||data.name}</p>
    <button className="bg-red-600 outline-none text-sm text-white px-2 py-1 hover:bg-gray-500">Watch Now</button>
    </div>
    </div>)
}
// 'https://api.themoviedb.org/3/movie/23739?language=en-US'
export default SuggestionCards


