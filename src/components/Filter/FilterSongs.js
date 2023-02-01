import FilterOption from "./FilterOption";
import genres from "../../store/genres";
import ratingOptions from "../../store/ratingOptions";

const FilterSongs = () => {
    return (
        <div className="filter-container">
            <form className="flex-filter">
                <FilterOption type="genre" options={genres} />
                <FilterOption type="rating" options={ratingOptions} />
            </form>
        </div>
    )
};

export default FilterSongs;
