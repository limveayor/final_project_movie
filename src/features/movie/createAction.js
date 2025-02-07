import { createAsyncThunk } from "@reduxjs/toolkit";
import { retry } from "@reduxjs/toolkit/query";

//get Data From API
export const fetchAllMovieCard = createAsyncThunk('movieCard/fetchAllMovieCard', async() =>{
    try{
        //fetch resource from API
        let response = await fetch(`${import.meta.env.VITE_BASE_URL}popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)
        //console.log( "hello",response.results);       
        let data = await response.json();
        return data.results;
    }catch(error)
    {
     Promise.reject(error);
    }
})
//get Data Upcoming movie From API
export const fetchUpcomingMovieCard = createAsyncThunk('movieCard/fetchUpcomingMovieCard' , async() =>{
    try{
        let response = await fetch(`${import.meta.env.VITE_BASE_URL}upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)
        let data = await response.json();
        console.log(" upcoming movie",data.results);    
        return data.results;
    }catch(error){
        Promise.reject(error);
    }
})
//get Data Top Rated movie From API
export const fetchTopRatedMovieCard = createAsyncThunk('movieCard/fetchTopRatedMovieCard', async() =>{
    try{
        let response = await fetch(`${import.meta.env.VITE_BASE_URL}top_rated?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)   
        let data = await response.json();
        return data.results;
    }catch(error){
        Promise.reject(error);
    }
})

export const findMovie = createAsyncThunk('/movies/findmovies', async() =>{
    try{
        let response = await fetch(`${import.meta.env.VITE_BASE_URL}api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&query=horr`)
        let data = await response.json();
        return data.results;
    }catch(error){
        Promise.reject(error);
    }
})

// Function to get detail product by id
export const getOneMovie = async (id) =>{
    try{
        let response = await fetch(`${import.meta.env.VITE_BASE_URL}${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`)
        if(!response.ok){
            throw new Error("fail fetch data from details movie")
        }
        let data = await response.json() 
        return data.results;      
    }catch(error){
        return Promise.reject(error);
    }
}

//fetch movie detail from API
export const fetchMovieDetails = createAsyncThunk('movieCard/fetchMovieDetail', async(id) =>{
    try{
        let response = await fetch(`${import.meta.env.VITE_BASE_URL}${movieId}?api_key=${apiKey}&language=en-US`)
        let data = await response.json();
        return data.results;
    }catch(error){
        Promise.reject(error);
    }
})

