import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/counter/counterSlice";
import movieSlice from "../features/movie/movieSlice";

export const store = configureStore({
    reducer:{
        counter : counterSlice,
        movieR : movieSlice,
    },
})