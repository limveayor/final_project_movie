import { createSlice } from "@reduxjs/toolkit";
import { fetchAllMovieCard, fetchUpcomingMovieCard, findMovie } from "./createAction";

export const movieSlice = createSlice({
  name: "movieR",
  initialState: {
    movies: [],
    upcomingMovie: { results: [] },
    topRateMovie: { results: [] },
    isLoading: true,
    error: null,
    status: "idle",
  },
  reducers: {},
  //extra reducer are for handing action generate by createAsyncThunk
  extraReducers(builder) {
    builder
      .addCase(fetchAllMovieCard.pending, (state, action) => {
        state.status = "Pending";
      })
      .addCase(fetchAllMovieCard.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
        state.status = "successfully received Movie";
      })
      .addCase(fetchAllMovieCard.rejected, (state) => {
        state.status = "Rejected";
        state.error = action.error;
      })
      .addCase(fetchUpcomingMovieCard.pending, (state, action) => {
        state.status = "Pending";
      })
      .addCase(fetchUpcomingMovieCard.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
        state.status = "successfully received Movie";
      })
      .addCase(fetchUpcomingMovieCard.rejected, (state) => {
        state.status = "Rejected";
        state.error = action.error;
      })
      .addCase(findMovie.pending, (state, action) => {
        state.status = "Pending";
      })
      .addCase(findMovie.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
        state.status = "Find movie is success";
      })
      .addCase(findMovie.rejected, (state, action) => {
        state.status = "Rejected";
        state.error = action.error;
      });
  },
});

export default movieSlice.reducer;
