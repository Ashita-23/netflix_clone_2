import { configureStore } from "@reduxjs/toolkit";
import SearchToggle from "./searchToggle";
import AccordionToggle from "./accordionToggle"
import FormToogle from "./formToggle"
import UserSlice from "./userSlice";
import movieId from "./movieId";
import showMovie from "./showMovie";
import TvSearchToggle from "./tvSearchToggle";
import showSeries from "./showSeries";
import SeriesId from "./seriesId"
import My_List_Data from "./myList";


const NetFlixStore = configureStore({
    reducer:{
Search_Toggel : SearchToggle,
Accordion_Toggle:AccordionToggle,
Form_Toogle:FormToogle,
User_Slice:UserSlice,
Movie_Id:movieId,
Show_Movie:showMovie,
Tv_SearchToggle:TvSearchToggle,
Show_Series:showSeries,
Series_Id:SeriesId,
My_Watch_List: My_List_Data,
    }
})


export default NetFlixStore
