import React from "react";

function Filters({ onFilterChange }) {
    return (
        <div className="filters">
            <strong>Filters:</strong>
            <strong id="categories">Categories</strong>

            <label htmlFor="brass">
                <input type="radio" id="brass" name="filters" value="brass" onChange={onFilterChange} />
                Brass
            </label>

            <label htmlFor="woodwind">
                <input type="radio" id="woodwind" name="filters" value="woodwind" onChange={onFilterChange} />
                Woodwind
            </label>

            <label htmlFor="percussion">
                <input type="radio" id="percussion" name="filters" value="percussion" onChange={onFilterChange} />
                Percussion
            </label>

            <label htmlFor="stringed">
                <input type="radio" id="stringed" name="filters" value="stringed" onChange={onFilterChange} />
                Stringed
            </label>

            <strong id="price">Price</strong>

            <label htmlFor="<$100">
                <input type="radio" id="<$100" name="filters" value="<$100" onChange={onFilterChange} />
                Less than $100
            </label>

            <label htmlFor="$100-$249">
                <input type="radio" id="$100-$249" name="filters" value="$100-$249" onChange={onFilterChange} />
                $100 - $249
            </label>
            <label htmlFor="$250-$499">
                <input type="radio" id="$250-$499" name="filters" value="$250-$499" onChange={onFilterChange} />
                $250 - $499
            </label>
            <label htmlFor="$500+">
                <input type="radio" id="$500+" name="filters" value="$500+" onChange={onFilterChange} />
                $500+
            </label>
        </div>
    );
}
export default Filters;