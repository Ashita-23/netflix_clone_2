import { POSTER_API } from "../utils/apiOptions"

const My_Watch_List = ()=>{
    return(<div className="border border-red-600 bg-black h-[100vh] w-[full] flex justify-center pt-[5rem] pb-[0.5rem]">
    <div className="text-white border border-blue-400 h-[auto] w-[90%] overflow-scroll ">
            <p className="text-3xl px-2">Previously watched</p>
            <div className="border border-red-500 p-4 my-2">
                <p className="text-xl">Movie</p>
                <div className="border border-red-500 p-2 overflow-scroll flex">
               <My_List_cards/>
               </div>
            </div>
            <div className="border border-green-500 p-4 my-2">
                <p className="text-xl">Tv Searies</p>
                <div className="border border-red-500 p-2 overflow-scroll flex">
                <My_List_cards/>
         
                </div>

            </div>
            </div>
    </div>)
}


export const My_List_cards = ({data})=>{
    return(<div className="border border-red-800 h-[250px] w-[250px] mx-2 flex flex-col justify-between ">
        <img src={POSTER_API+data?.poster_path} alt="poster" className="w-[150px] mx-2" key={data?.vote_count} ></img>
        <div className="border justify-between items-center  flex  p-2">
            <p className="text-xl truncate">{"Name"}</p>
            <button className="px-3 py-2 bg-gray-600 text-white text-sm rounded-full m-1 hover:bg-gray-400 text-black"><i className="fa-regular fa-circle-play"></i></button>
        </div>
    </div>)
}




export default My_Watch_List