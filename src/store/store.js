import {configureStore} from '@reduxjs/toolkit'
import songsSlice from "../reducers/SongSlice";


const store = configureStore({
    reducer: {
        songs: songsSlice
    },
});

export default store;