import React, { useState } from "react";
import "./styles.scss";

const regions = [
  {
    id: 0,
    region: "Africa",
  },
  {
    id: 1,
    region: "Americas",
  },
  {
    id: 2,
    region: "Asia",
  },
  {
    id: 3,
    region: "Europe",
  },
  {
    id: 4,
    region: "Oceania",
  },
  { id: 5, region: "All" },
];

function Filter(props) {
  const { setRegion, setSearch } = props;
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownMenu = (
    <div className="dropdown" onMouseLeave={() => setOpenDropdown(false)}>
      <ul className="list">
        {regions.map((region) => (
          <li
            key={region.id}
            onClick={() => {
              setRegion(region.region.toLowerCase());
              setSearch(null);
            }}
          >
            {region.region}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="filter">
      <div
        className="filterBtn"
        onClick={() => {
          setOpenDropdown((prev) => !prev);
        }}
      >
        <span>Filter by Region</span>
        <i class="fas fa-arrow-down"></i>
      </div>
      {openDropdown ? dropdownMenu : null}
    </div>
  );
}

export default Filter;
