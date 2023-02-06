import { createSlice } from "@reduxjs/toolkit";

const achievements = createSlice({
    name: 'achievements',
    initialState: [],
    reducers: {
        push(state, {type, payload}){
            state.push({...payload})
        }
    }
})

const {push} = achievements.actions;

export {push}
export default achievements.reducer
