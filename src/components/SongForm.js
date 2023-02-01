import { useDispatch } from "react-redux";
import React, {Children, useState} from "react";
import { addSong } from "../reducers/SongSlice";
import genres from "../store/genres";
import ratingOptions from "../store/ratingOptions";


const SongForm = () => {

    const dispatch = useDispatch();

    // Initialize state variables with default values as empty strings
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();

        // Creating new song object
        const song = { id: Date.now(), title, artist, genre, rating: parseInt(rating) };
        dispatch(addSong(song));

        // Reset state variables to default value
        setTitle("");
        setArtist("");
        setGenre("");
        setRating("");
    };


    return (
        <>
            <div className="form-container">
                <form className="flex" value="" onSubmit={handleOnSubmit}>
                    <input
                        required
                        type="text"
                        name="title"
                        value={title}
                        placeholder="Title.."
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        required
                        type="text"
                        name="artist"
                        value={artist}
                        placeholder="Your favourite artist.."
                        onChange={(e) => setArtist(e.target.value)}
                    />
                    <select
                        required
                        name="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <option value="">-- GENRE --</option>
                        {Children.toArray(
                            genres.map((option) => (
                                <option value={option}>
                                    {option}
                                </option>
                            ))
                        )}
                    </select>
                    <select
                        required
                        name="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option value="">-- RATING --</option>
                        {Children.toArray(
                            ratingOptions.map((option) => (
                                <option value={option}>
                                    {option}
                                </option>
                            ))
                        )}
                    </select>
                    <button
                        className="add-button"
                        type="submit"
                    >
                        ADD SONG
                    </button>
                </form>
            </div>
        </>
    );
};

export default SongForm;