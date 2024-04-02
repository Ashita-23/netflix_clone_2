import { configureStore } from "@reduxjs/toolkit";
import SearchToggle from "./searchToggle";
import AccordionToggle from "./accordionToggle"
import FormToogle from "./formToggle"
import UserSlice from "./userSlice";
import movieId from "./movieId";
import TvSearchToggle from "./tvSearchToggle";
import SeriesId from "./seriesId"
import My_List_Data from "./myList";


const NetFlixStore = configureStore({
    reducer:{
Search_Toggel : SearchToggle,
Accordion_Toggle:AccordionToggle,
Form_Toogle:FormToogle,
User_Slice:UserSlice,
Movie_Id:movieId,
Tv_SearchToggle:TvSearchToggle,
Series_Id:SeriesId,
My_Watch_List: My_List_Data,
    }
})


export default NetFlixStore
