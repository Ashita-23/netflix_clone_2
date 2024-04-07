import { useSelector , useDispatch} from "react-redux"
import {acordionData} from "../utils/hardCodedData"
import {ShowAccordion} from "../RStore/accordionToggle"

const FooterQues = ()=>{
    const IsOpen = useSelector((store)=>store.Accordion_Toggle.IsOpen)
    const dispatch =useDispatch()
    return(<div className="mt-[2rem]  flex justify-center w-[80%] xxsm:w-[100%] xsm:w-[90%] sm:w-[90%] md:w-[80%] lg:w-[98%]  xl:w-[80%] 2xl:w-[80%] 3xl:w-[70%] 4xl:w-[70%] 5xl:w-[70%]  6xl:w-[70%]" >
    <div className="w-[60%] flex flex-col xxsm:w-[90%] xsm:w-[95%] sm:w-[90%] md:w-[70%]  ">
        <h1 className="text-white select-none p-2 text-3xl font-semibold mb-1 xxsm:text-xl xsm:text-2xl">Frequently Asked Questions</h1>
{ acordionData?.map((data)=>{return(<div className="text-white  m-1 xxsm:w-[100%]" key={data?.key}>
<div className="flex justify-between mb-[0.1rem] bg-[#2d2d2d] text-2xl py-3 px-6 hover:bg-[#4e4e4e] cursor-pointer">
            <p className=" p-1 text-xl select-none xxsm:text-[1rem] xsm:text-[1rem] sm:text-[1rem.2] ">{data?.hText} </p>
            {IsOpen ?<button className="cursor-pointer text-xl p-2 xxsm:text-[1rem] xsm:text-[1rem] sm:text-[1rem.2]" onClick={()=>dispatch(ShowAccordion(false))}><i className="fa-solid fa-xmark"></i></button>:
            <button className="cursor-pointer text-xl p-2 xxsm:text-[1rem] xsm:text-[1rem] sm:text-[1rem.2]" onClick={()=>dispatch(ShowAccordion(true))}><i className="fa-solid fa-plus"></i></button>}
           </div>
           {IsOpen &&  <p className=" bg-[#2d2d2d] select-none text-xl px-4 py-5 hover:bg-[#4e4e4e] cursor-pointer xxsm:text-[1rem] xsm:text-[1rem] sm:text-[1.1rem]">{data?.bText}</p>}
        </div>)})}

        </div>
    </div>)
}

export default FooterQues