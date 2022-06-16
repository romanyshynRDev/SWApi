import { createSlice } from "@reduxjs/toolkit";
import { characterInfoAPI } from "../../Service/ApiService";

const initialState = {
   personageDetails: {},
   personageFilms: [],
   isLoading: false
}

const personageInfo = createSlice({
   name:'personageInfo',
   initialState,
   extraReducers: (builder) => {
      builder
      .addCase(characterInfoAPI.pending, (state) => {
         state.isLoading = true
      })
   .addCase(characterInfoAPI.fulfilled, (state, {payload}) => {
      state.personageDetails = payload[0]
      state.personageFilms = payload[1]
      state.isLoading = false
   })
   .addCase(characterInfoAPI.rejected, (state) => {
      state.isLoading = false
   })
   }
})

export default personageInfo.reducer