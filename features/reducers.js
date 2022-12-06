import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState={
user:{}
}
const instagramSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addUserInfo(state,action){
state.user=action.payload
        },
      
    },
  })
  
  // Extract the action creators object and the reducer

  // Extract and export each action creator by name
  export const { addUserInfo } =instagramSlice.actions
  // Export the reducer, either as a default or named export
  export default instagramSlice.reducer


//   export const {addMovies,removeMovieOrShow}=movieSlice.actions;
// export const getAllShows=(state)=>state.movies.shows
// export const getAllMovies=(state)=>state.movies.movies
// export const getDetail=(state)=>state.movies.movieDetail