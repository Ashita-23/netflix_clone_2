
import { footerCardsData ,footerSecCD } from "../utils/hardCodedData"
const FooterCards = ()=>{
    return( <><div className="  justify-center mt-[2rem] w-[80%] xxsm:w-[100%] xsm:w-[90%] sm:w-[90%] md:w-[80%] lg:w-[98%]  xl:w-[80%] 2xl:w-[80%] 3xl:w-[70%] 4xl:w-[70%] 5xl:w-[70%]  6xl:w-[70%]">
    <h1 className="text-white text-3xl select-none p-2 font-bold xxsm:text-2xl xsm:text-2xl ">A plan to suit your needs</h1>
    <div className="flex xxsm:flex-col items-center xsm:flex-wrap sm:flex-wrap md:flex-wrap justify-center  ">
       {footerCardsData?.map((data) =>{return( <div key={data?.key} className="bg-gradient-to-b from-[#661e3d] to-[#230d10] rounded-2xl p-6 m-2 text-white h-[14rem] w-3/12 flex flex-col items-start justify-around
       xxsm:w-[14rem]  xsm:w-[14.8rem] sm:w-[14.8rem] md:w-[14.8rem] m-3">
            <p className="text-3xl select-none font-semibold xxsm:text-[1.2rem] xsm:text-[1.3rem] ">{data?.title}</p>
            <p className="text-lg select-none text-slate-200 font-semibold xxsm:text-[1rem] xsm:text-[1rem] ">{data?.text}</p>
            <p  className="text-lg select-none text-white font-semibold xxsm:text-md ">{data?.cost}</p>
        </div>)
       })}
       
    </div>
</div>
<div className=" mt-[2rem] w-[80%] xxsm:w-[100%] xsm:w-[90%] sm:w-[90%] md:w-[80%] lg:w-[98%]  xl:w-[80%] 2xl:w-[80%] 3xl:w-[70%] 4xl:w-[70%] 5xl:w-[70%]  6xl:w-[70%]">
    <h1 className="text-white text-3xl p-2 font-bold xxsm:text-2xl xsm:text-2xl select-none" >More reasons to join </h1>
    <div className="flex justify-center xxsm:flex-col  items-center  xsm:flex-wrap sm:flex-wrap md:flex-wrap  ">
       {footerSecCD?.map((data) =>{return( <div key={data?.key} className="bg-gradient-to-b from-[#1c1c39] to-[#21101b] rounded-2xl p-4 m-2 text-white h-[18rem] w-3/12 flex flex-col items-start justify-around
       xxsm:w-[14rem] xsm:w-[14.8rem] sm:w-[14.8rem] md:w-[14.8rem] m-3" >
            <p className="text-2xl font-semibold  select-none xxsm:text-[1.2rem] xsm:text-[1.3rem]">{data?.title}</p>
            <p className="text-md text-slate-200 select-none font-semibold xxsm:hyphens-auto text-[1rem] xsm:text-[1rem] ">{data?.text}</p>
            <i className={data.Icon+"  text-3xl text-[#962e5b]  font-semibold  "}></i>
        </div>)
       })}
       
    </div>
</div></> )
}

export default FooterCards