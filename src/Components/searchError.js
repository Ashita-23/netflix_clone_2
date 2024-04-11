import searchErrorimg from "../assets/sreactError.png"

 const SearchErrorCards = ()=>{
    return(<div className=" m-2  flex flex-col items-center p-1">
    <img src={searchErrorimg} className="w-[200px] h-[200px]" />
    <p className="text-white text-2xl font-medium m-2">Try something else...</p>
    </div>)
}

export default SearchErrorCards