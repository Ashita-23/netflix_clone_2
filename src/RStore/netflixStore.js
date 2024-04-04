import { configureStore } from "@reduxjs/toolkit";
import SearchToggle from "./searchToggle";
import AccordionToggle from "./accordionToggle"
import FormToogle from "./formToggle"
import UserSlice from "./userSlice";
import netflixCardsData from "./netflixCardsData";
import movieId from "./movieId";
import TvSearchToggle from "./tvSearchToggle";
import SeriesId from "./seriesId"
import My_List_id_Data from "./myList";
import MY_LIST_DATA from "./mylistData";


const NetFlixStore = configureStore({
    reducer:{
Search_Toggel : SearchToggle,
Accordion_Toggle:AccordionToggle,
Form_Toogle:FormToogle,
User_Slice:UserSlice,
Netflix_CardsData: netflixCardsData,
Movie_Id:movieId,
Tv_SearchToggle:TvSearchToggle,
Series_Id:SeriesId,
My_List_id_Data:My_List_id_Data,
My_List_Data:MY_LIST_DATA,
    }
})


export default NetFlixStore
