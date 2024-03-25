import { configureStore } from "@reduxjs/toolkit";
import SearchToggle from "./searchToggle";
import AccordionToggle from "./accordionToggle"
import FormToogle from "./formToggle"
import UserSlice from "./userSlice";
import movieId from "./movieId";
import showMovie from "./showMovie";
import TvSearchToggle from "./tvSearchToggle";


const NetFlixStore = configureStore({
    reducer:{
Search_Toggel : SearchToggle,
Accordion_Toggle:AccordionToggle,
Form_Toogle:FormToogle,
User_Slice:UserSlice,
Movie_Id:movieId,
Show_Movie:showMovie,
Tv_SearchToggle:TvSearchToggle,
    }
})


export default NetFlixStore
