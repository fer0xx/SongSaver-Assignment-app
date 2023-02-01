import React from "react";
import { useDispatch } from "react-redux";
import { sort } from "../../reducers/SongSlice";

const SongOverviewTableHead = ({label, field, isNumeric}) => {
    const dispatch = useDispatch();

    // Dispatch sort action with a key & sorting type
    const handleSort = (key, type = "ascending") => {
        dispatch(sort({key, type}));
    }

    return (
        <th>
            {label /* Display the label of the table head */ }
            {field ? ( /* Check if the field is provided */
                <>
                    <button
                        className="sort-button"
                        onClick={() => handleSort(field)}
                    >
                        {isNumeric ? '1-5' : 'A-Z'}
                    </button>
                    <button
                        className="sort-button"
                        onClick={() => handleSort(field, "descending")}
                    >
                        {isNumeric ? '5-1' : 'Z-A'}
                    </button>
                </>
            ) : (
                '' /* If the field is not provided, don't display anything */
            )}
        </th>
    );
};

export default SongOverviewTableHead;