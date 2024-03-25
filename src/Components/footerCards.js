
import { footerCardsData ,footerSecCD } from "../utils/hardCodedData"
const FooterCards = ()=>{
    return( <><div className="border border-red-700 mt-[2rem]">
    <h1 className="text-white text-3xl p-2 font-bold">A plan to suit your needs</h1>
    <div className="flex ">
       {footerCardsData?.map((data) =>{return( <div key={data.key} className="bg-gradient-to-b from-[#661e3d] to-[#230d10] rounded-2xl p-6 m-2 text-white h-[14rem] w-3/12 flex flex-col items-start justify-around">
            <p className="text-3xl font-semibold">{data.title}</p>
            <p className="text-lg text-slate-200 font-semibold ">{data.text}</p>
            <p  className="text-lg text-white font-semibold ">{data.cost}</p>
        </div>)
       })}
       
    </div>
</div>
<div className="border border-red-700 mt-[2rem] ">
    <h1 className="text-white text-3xl p-2 font-bold" >More reasons to join </h1>
    <div className="flex  ">
       {footerSecCD?.map((data) =>{return( <div key={data.key} className="bg-gradient-to-b from-[#1c1c39] to-[#21101b] rounded-2xl p-6 m-2 text-white h-[18rem] w-3/12 flex flex-col items-start justify-around" >
            <p className="text-2xl font-semibold">{data.title}</p>
            <p className="text-md text-slate-200  font-semibold  ">{data.text}</p>
            <i className={data.Icon+"  text-3xl text-[#962e5b]  font-semibold "}></i>
        </div>)
       })}
       
    </div>
</div></> )
}

export default FooterCards