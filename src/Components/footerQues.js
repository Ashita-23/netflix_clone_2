import { useSelector , useDispatch} from "react-redux"
import {acordionData} from "../utils/hardCodedData"
import {ShowAccordion} from "../RStore/accordionToggle"

const FooterQues = ()=>{
    const IsOpen = useSelector((store)=>store.Accordion_Toggle.IsOpen)
    const dispatch =useDispatch()
    // console.log(IsOpen,"ADFS")
    return(<div className="mt-[2rem]  flex justify-center" >
    <div className="w-[60%] flex flex-col  ">
        <h1 className="text-white p-2 text-3xl font-semibold mb-1">Frequently Asked Questions</h1>
{ acordionData?.map((data)=>{return(<div className="text-white  m-1">
<div className="flex justify-between mb-[0.1rem] bg-[#2d2d2d] text-2xl py-3 px-6 hover:bg-[#4e4e4e] cursor-pointer">
            <p className=" p-1 text-2xl  ">{data.hText} </p>
            {IsOpen ?<button className="text-2xl p-2" onClick={()=>dispatch(ShowAccordion(false))}><i className="fa-solid fa-xmark"></i></button>:
            <button className="text-2xl p-2" onClick={()=>dispatch(ShowAccordion(true))}><i className="fa-solid fa-plus"></i></button>}
           </div>
           {IsOpen &&  <p className=" bg-[#2d2d2d] text-2xl px-4 py-5 hover:bg-[#4e4e4e] cursor-pointer">{data.bText}</p>}
        </div>)})}

        </div>
    </div>)
}

export default FooterQues