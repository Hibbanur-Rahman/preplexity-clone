import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice=createSlice({
    name:'sidebar',
    initialState:{
        expanded:true,
    },
    reducers:{
        toggleSidebar(state){
            state.expanded=!state.expanded;
        }
    }
})

export const {toggleSidebar}=sidebarSlice.actions;
export default sidebarSlice.reducer;