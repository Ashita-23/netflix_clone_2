import { POSTER_API } from "../utils/apiOptions"
import dummyImg from "../assets/noData.png"

const SearchCards = ({data})=>{


return(<div className=" m-1 flex flex-col justify-center items-center p-2 w-[200px] h-[280px] border border-slate-400" >
{
    !POSTER_API+data?.backdrop_path?<img src={POSTER_API+data?.backdrop_path} className="w-[200px] h-[150px]  xxsm:w-[180px] xsm:w-[180px] sm: md: lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl: " />:
    <img src={dummyImg} alt="poster" className="w-[150px] ml-4" key={ data?.vote_count} ></img>
}
<div className=" px-1  flex flex-col w-[100%]  justify-center ">
<p className="text-white text-md xxsm:text-[0.8rem] xsm:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl:">{data?.title||data?.name}</p>
<div className="text-green-500   text-sm p-1  flex justify-between "><span><i className="fa-regular fa-star"></i> {Math.round(data?.vote_average)}</span> {" "}
    <span><i className="fa-regular fa-eye"></i>  {data?.vote_count/10}K</span></div>
<button className="rounded-sm text-white bg-red-600 px-3 py-2 my-1 hover:bg-red-800">Watch Now</button>
</div>
</div>)
}

export default SearchCards