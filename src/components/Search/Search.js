import React, { useState } from "react";
import "./styles.scss";

function Search(props) {
  const { setSearch } = props;
  const [searchCountry, setSearchCountry] = useState("");
  return (
    <div className="searchConatiner">
      <div className="searchIron">
        <i class="fas fa-search"></i>
      </div>
      <div className="formContainer">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSearch(searchCountry);
            setSearchCountry("");
          }}
        >
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchCountry}
            onChange={(event) => {
              setSearchCountry(event.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
