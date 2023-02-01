import React, {Fragment, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import genres from "../../store/genres";
import SongListItem from "./SongListItem";


const SongList = () => {

    // Access the filteredSongs state
    const filteredSongs = useSelector((state) => state.songs.filteredSongs);

    // Manage local state for grouped object
    const [groupedSongs, setGroupedSongs] = useState({});

    useEffect(() => {

        // Initialize the genre groups object
        const genreGroups = {};

        // Loop through songs and group by genre
        filteredSongs.forEach(song => {

            // Find genre group for current song
            const group = genres.find(g => g === song.genre);

            // Initialize genre group in the genreGroups object if it doesn't exist yet
            genreGroups[group] = genreGroups[group] || [];

            // Add the song to the group in the genreGroups object
            genreGroups[group].push(song);
        });
        // Update groupedSongs state with the genre groups
        setGroupedSongs(genreGroups);
    }, [filteredSongs]);


    return (
        <tbody>
        {Object.keys(groupedSongs).map((genre) => (

            <Fragment key={genre}>
                <tr>
                    <th colSpan={5}>{genre}</th>
                </tr>
                {groupedSongs[genre].map(song => (
                    <SongListItem key={song.id} song={song}/>
                ))}
            </Fragment>
        ))}
        </tbody>
    );
};

export default SongList;