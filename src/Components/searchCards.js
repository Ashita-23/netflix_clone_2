import { POSTER_API } from "../utils/apiOptions"
import dummyImg from "../assets/noData.png"

const SearchCards = ({data})=>{


return(<div className=" m-1 flex flex-col justify-center items-center p-0 w-[140px] h-[240px] " >
{
    !POSTER_API+data?.poster_path?<img src={POSTER_API+data?.poster_path} className="w-[130px] mx-2  xxsm:w-[80px]  xsm:w-[90px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[120px]" />:
    <img src={dummyImg} alt="poster" className="w-[150px] ml-4" key={ data?.vote_count} ></img>
}
 <div className=" px-1  flex flex-col w-[100%]  justify-center ">
<p className="text-white truncate p-y-[0.3rem]  text-center text-md xxsm:text-[0.8rem] xsm:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg: xl: 2xl: 3xl: 4xl: 5xl: 6xl:">{data?.title||data?.name}</p>
</div> 
</div>)
}

export default SearchCards