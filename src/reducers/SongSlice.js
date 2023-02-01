import {createSlice} from "@reduxjs/toolkit";
import songs from "../store/songs";

export const songsSlice = createSlice({
    name: "songs",
    initialState: {
        songs: songs,
        filteredSongs: songs
    },
    reducers: {

        // --- Add & Delete functions --- \\
        addSong: (state, action) => {
            // Add new song to both arrays
            state.songs.push(action.payload);
            state.filteredSongs.push(action.payload);
        },
        deleteSong: (state, action) => {
            // Delete song by ID from both arrays
            const id = action.payload;
            state.songs = [...state.songs.filter((song) => song.id !== id)];
            state.filteredSongs = [...state.filteredSongs.filter((song) => song.id !== id)];
        },
        deleteAllSongs: (state) => {
            // Clear all arrays in the state
            state.songs = [];
            state.filteredSongs = [];
        },

        // --- Sort & Filter functions --- \\
        sort: (state, action) => {
            // Get sort key & type from action payload
            const {key: sortKey, type: sortType} = action.payload;

            // Sort filteredSongs array based on the sortKey and sortType
            state.filteredSongs = state.filteredSongs.sort((a, b) => {
                // Get value from each song object to compared
                let aValue = a[sortKey];

                // If the value is a string, convert to lowercase
                if (typeof aValue === "string") {
                    aValue = aValue.toLowerCase();
                }
                let bValue = b[sortKey];
                if (typeof aValue === "string") {
                    bValue = bValue.toLowerCase();
                }

                // Return 1 if aValue should come after bValue based on the sort type
                // Return -1 if bValue should come after aValue based on the sort type
                const result = sortType === "ascending" ? aValue > bValue : bValue > aValue;
                return result ? 1 : -1;
            });
        },
        filterBy: (state, action) => {
            // Get filter type & value from action payload
            const {type, value} = action.payload;

            // Filter songs based on type & value
            state.filteredSongs = state.songs.filter((song) => {
                return song[type].toString() === value.toString();
            });
        },
    },
});

export const {
    addSong,
    deleteSong,
    deleteAllSongs,
    filterBy,
    sort
} = songsSlice.actions;

export default songsSlice.reducer;