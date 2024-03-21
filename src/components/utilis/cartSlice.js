import { createSlice } from "@reduxjs/toolkit";

 const appStore = createSlice({
    name: "Cart Store",
    initialState:{
        item: []
    },
    reducers: {
        addItems: (state, action) => {
            // mutating the state
            state.item.push(action.payload);
        },
        deleteItems: (state, action) => {
            state.item.pop();
        },
        emptyItems: (state, action) => {
            state.item.length = 0;
        }
    }
 })

 export const {addItems, deleteItems, emptyItems} = appStore.actions;
 export default appStore.reducer;