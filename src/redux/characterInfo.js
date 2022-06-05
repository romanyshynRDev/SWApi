import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personageDetails: [],
    personageFilms: []
}

const personageInfo = createSlice({
    name:'personageInfo',
    initialState,
    reducers:{
    getCharacterInfo: (state, action) => {
        state.personageDetails = action.payload
    },
    characterFilms: (state, {payload}) => {
        state.personageFilms = payload
    }
    }
})

export const { getCharacterInfo, characterFilms } = personageInfo.actions
export default personageInfo.reducer