import { configureStore } from '@reduxjs/toolkit'
import instagramSlice from "../features/reducers"

const store = configureStore({
  reducer:{
    user:instagramSlice
  }
})

export default store