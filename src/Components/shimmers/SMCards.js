import { videoCardsTitle}from "../../utils/hardCodedData"
import Loading_img from "../../assets/Progressimg.png"


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
  return(<>
     {Array(18).fill("").map(()=>{return(<img src={Loading_img} alt="poster" className="w-[150px] h-[180px] border border-red-600 mx-2" key={Math.random()*4}></img>)})}
  </>)
}