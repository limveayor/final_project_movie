import { createSlice } from "@reduxjs/toolkit"
import { fetchAllMovieCard } from "./createAction"

export const movieSlice = createSlice({
    name: 'movieR',
    initialState: {
        movies : [],
        isLoading : true,
        error : null,
        status : 'idle'
    },
    reducers:{},
    //extra reducer are for handing action generate by createAsyncThunk
    extraReducers(builder){
        builder.addCase(fetchAllMovieCard.pending, (state , action) =>{
            state.status = "Pending"
        })
        .addCase(fetchAllMovieCard.fulfilled,(state , action) =>{
            state.movies = action.payload
            state.isLoading = false
            state.status = "successfully received Movie"
        })
        .addCase(fetchAllMovieCard.rejected, (state)=>{
            state.status = "Rejected"
            state.error = action.error           
        })
    }
})

export default movieSlice.reducer