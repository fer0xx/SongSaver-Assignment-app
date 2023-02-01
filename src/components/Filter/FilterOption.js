import React, {Children} from "react";
import {useDispatch} from "react-redux";
import {filterBy} from "../../reducers/SongSlice";

const FilterOption = ({type, options}) => {
    const dispatch = useDispatch();


    const handleFilter = (e) => {
        // Filter data by selected value & type
        const selectFilter = e.target.value;
        dispatch(filterBy({value: selectFilter, type: e.target.id}));
    }

    return (
        <>
            <select
                id={type}
                onChange={(e) => {
                    handleFilter(e)
                }}
            >
                <option value="">Filter by {type}</option>
                {Children.toArray(
                    options.map((option) => (
                        <option value={option}>
                            {option}
                        </option>
                    ))
                )}
            </select>
        </>
    );
};

export default FilterOption;