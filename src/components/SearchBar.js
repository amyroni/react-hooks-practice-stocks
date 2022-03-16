import React from "react";

function SearchBar({ onFilter, onSort }) {
  // const [alphaIsChecked, setAlphaIsChecked] = useState(false);
  // const [priceIsChecked, setPriceIsChecked] = useState(false);

  function handleAlphaCheck() {
    // setAlphaIsChecked(!alphaIsChecked);
    // if (alphaIsChecked || priceIsChecked) {
    //   setPriceIsChecked(!priceIsChecked);
    // }
    onSort("name");
  }

  function handlePriceCheck() {
    // setPriceIsChecked(!priceIsChecked);
    // if (alphaIsChecked || priceIsChecked) {
    //   setAlphaIsChecked(!alphaIsChecked);
    // }
    onSort("price");
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          // checked={alphaIsChecked}
          onChange={handleAlphaCheck}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          // checked={priceIsChecked}
          onChange={handlePriceCheck}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => onFilter(event.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
