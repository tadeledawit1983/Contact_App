import { configureStore } from '@reduxjs/toolkit'
import contactSlice from './contactSlice'
const store = configureStore({
    reducer: {
        data: contactSlice,
    }
})
export default store;