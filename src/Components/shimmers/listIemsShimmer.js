const ListCardsShimmer= ()=>{
    return(<div className="bg-slate-600 p-1 flex flex-col items-center my-1">
        <p className="w-11/12 h-[3rem] bg-slate-400 m-2 "></p>
        <div className="bg-slate-600 m-1 flex flex-wrap justify-evenly items-center h-[40rem] overflow-scroll no-scrollbar" key={"x542wr"}> 
        {Array(20).fill("").map(()=><div className="w-[130px] h-[150px] m-2 bg-slate-400 xxsm:w-[90px]  xsm:w-[90px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[120px] " key={Math.random()*"2a"}></div>)}
            {/* <div className="w-[130px] h-[150px] mx-2 bg-slate-400 xxsm:w-[80px]  xsm:w-[90px] sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[120px] "></div> */}
        </div>
    </div>)
}

export default ListCardsShimmer