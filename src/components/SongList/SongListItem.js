import {deleteSong} from "../../reducers/SongSlice"
import Rating from "@mui/material/Rating";
import {useDispatch} from "react-redux";

const SongListItem = ({song}) => {
    const dispatch = useDispatch();

    // Dispatch delete action by song ID
    const handleDelete = (id) => {
        dispatch(deleteSong(id));
    };

    return (
        <tr key={song.id}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.genre}</td>
            <td>
                <Rating
                    sx={{color: "black"}}
                    readOnly
                    value={song.rating}
                />
            </td>
            <td>
                <button onClick={() => handleDelete(song.id)}>
                    DELETE
                </button>
            </td>
        </tr>
    );
};

export default SongListItem;