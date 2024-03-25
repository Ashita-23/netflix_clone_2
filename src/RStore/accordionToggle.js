import { createSlice } from "@reduxjs/toolkit";


const  AccordionToggle = createSlice({
    name:"Accordion Toggle",
    initialState:{
        IsOpen:false
    },
    reducers:{
        ShowAccordion:(state)=>{
            state.IsOpen=!state.IsOpen
        },
    }
})


export const {ShowAccordion}= AccordionToggle.actions
export default AccordionToggle.reducer