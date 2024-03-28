import { POSTER_API } from "../utils/apiOptions"
import dummyImg from "../assets/noData.png"

const SearchCards = ({data})=>{
return(<div className="border border-red-500 m-2 flex justify-between p-2">
{
    !POSTER_API+data?.backdrop_path?<img src={POSTER_API+data?.backdrop_path} className="w-[250px] h-[150px]" />:
    <img src={dummyImg} alt="poster" className="w-[150px] ml-4" key={ data?.vote_count} ></img>
}
<div className="border border-blue-800 p-3 flex flex-col w-6/12  justify-center ">
<p className="text-white text-lg">{data?.title||data?.name}</p>
<div className="text-green-500 text-sm p-1  flex justify-around "><span><i className="fa-regular fa-star"></i> {Math.round(data?.vote_average)}</span> {" "}
    <span><i className="fa-regular fa-eye"></i>  {data?.vote_count/10}K</span></div>
<button className="rounded-sm text-white bg-red-600 px-3 py-2 m-2 hover:bg-red-800">Watch Now</button>
</div>
</div>)
}

export default SearchCards