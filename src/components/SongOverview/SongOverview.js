import React from "react";
import SongList from "../SongList/SongList";
import {useDispatch} from "react-redux";
import Header from "../Header";
import SongForm from "../SongForm";
import {deleteAllSongs} from "../../reducers/SongSlice";
import Footer from "../Footer";
import SongOverviewTableHead from "./SongOverviewTableHead";

const SongOverview = () => {
    const dispatch = useDispatch();

    const handleDeleteAllSongs = () => {
        dispatch(deleteAllSongs());
    }

    return (
        <div className="song-overview">
            <header>
                <Header/>
            </header>
            <main>
                <SongForm/>
                <table>
                    <thead>
                    <tr>
                        <SongOverviewTableHead label="Title" field="title"/>
                        <SongOverviewTableHead label="Artist" field="artist"/>
                        <SongOverviewTableHead label="Genre" field="genre"/>
                        <SongOverviewTableHead label="Rating" field="rating" isNumeric/>
                        <SongOverviewTableHead label="Delete"/>
                    </tr>
                    </thead>
                    <SongList/>
                </table>
            </main>

            <button className="clear-button" onClick={handleDeleteAllSongs}>
                Delete all
            </button>

            <Footer/>
        </div>

    );
};

export default SongOverview;