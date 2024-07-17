import { videoCardsTitle}from "../../utils/hardCodedData"
import Loading_img from "../../assets/Progressimg.png"
import VideoNotFoundGif from "../../assets/Questions.png"


const Mt_ShimmerCards = ()=>{
    const {titleText}=videoCardsTitle
    return(<div className="p-2 relative"  >
    <h1 className="text-2xl font-semibold p-2 text-white" key={titleText?.key} >{titleText?.titleText} </h1>
      <div className="flex overflow-scroll p-1 no-scrollbar ">
      {Array(12).fill("").map(()=>{return(<img src={Loading_img} alt="poster" className="w-[150px] h-[300px] border border-red-600 mx-2" key={Math.random()*4}></img>)})}
      </div>
     </div>)
}

export default Mt_ShimmerCards


// <img src={Loading_img} alt="poster" className="w-[150px] h-[180px] border border-red-600 mx-2" key={Math.random()*4}></img>
export const CardsImgShimmer = ()=>{
  return(<> <div className="bg-slate-900 m-1 flex  justify-evenly items-center h-[10rem] overflow-scroll no-scrollbar" key={"x542wr"}> 
        {Array(20).fill("").map(()=><div className="animate-pulse w-[130px] h-[140px] m-2 bg-slate-700 xxsm:w-[90px]  xsm:w-[90px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[120px] " key={Math.random()*"2a"}></div>)}
            {/* <div className="w-[130px] h-[150px] mx-2 bg-slate-400 xxsm:w-[80px]  xsm:w-[90px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[120px] "></div> */}
        </div>
  </>)
}


export const IframeShimmer = ()=>{
  return( <div className="w-screen aspect-video p-[2rem]  bg-black flex justify-center items-center">
    <img src={VideoNotFoundGif} alt="video not found img" className="xxsm:w-[14rem] xsm:w-[14rem] sm:w-[14rem] md:w-[16rem] lg:w-[16rem] xl:w-[18rem] 2xl:w-[19rem] 3xl:w-[20rem] 4xl:w-[21rem] 5xl:w-[22rem] 6xl:w-[23rem]"/>
    </div>)
}