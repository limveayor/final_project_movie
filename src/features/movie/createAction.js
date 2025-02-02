import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllMovieCard = createAsyncThunk('movieCard/fetchAllMovieCard', async() =>{

    try{
        //fetch resource from API
        let response = await fetch(`${import.meta.env.VITE_BASE_URL}popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)
        console.log( "hello",response.results);       
        let data = await response.json();
        return data.results;
    }catch(error)
    {
        return Promise.reject(error);
    }
})