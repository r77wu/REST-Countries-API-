import React from "react";
import "./styles.scss";

function Card(props) {
  const { country } = props;

  return (
    <div className="card">
      <div className="flag">
        <img src={country.flag} alt="flag" />
      </div>
      <div className="name">{country.name}</div>
      <div className="information">
        <div>
          <strong>Population:</strong>{" "}
          {String(country.population).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
        </div>
        <div>
          <strong>Region:</strong> {country.region}
        </div>
        <div>
          <strong>Capital:</strong> {country.capital}
        </div>
      </div>
    </div>
  );
}

export default Card;
