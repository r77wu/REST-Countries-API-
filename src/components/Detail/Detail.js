import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles.scss";

function Detail(props) {
  const [countryDetail, setCountryDetrail] = useState(null);
  const country = useParams().country;

  async function fetchData(country) {
    try {
      const response = await axios.get(
        `https://restcountries.eu/rest/v2/name/${country}`
      );
      setCountryDetrail(response.data[0]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData(country);
  }, [country]);

  let detailCard =
    countryDetail !== null ? (
      <div className="detailContainer">
        <div className="backBtn" onClick={() => props.history.goBack()}>
          <a href={props.history.location.state.prePage}>
            <i class="fas fa-arrow-left"></i> Back
          </a>
        </div>
        <div className="flag">
          <img src={countryDetail.flag} alt="flag" />
        </div>
        <div className="name">{countryDetail.name}</div>
        <div className="basic">
          <div>
            <strong>Native Name:</strong> {countryDetail.nativeName}
          </div>
          <div>
            <strong>Population:</strong>{" "}
            {String(countryDetail.population).replace(
              /(.)(?=(\d{3})+$)/g,
              "$1,"
            )}
          </div>
          <div>
            <strong>Region:</strong> {countryDetail.region}
          </div>
          <div>
            <strong>Sub Region:</strong> {countryDetail.subregion}
          </div>
          <div>
            <strong>Capital:</strong> {countryDetail.capital}
          </div>
        </div>
        <div className="extra">
          <div>
            <strong>Top Level Domain:</strong> {countryDetail.topLevelDomain}
          </div>
          <div>
            <strong>Currencies:</strong> {countryDetail.currencies[0].code}
          </div>
          <div>
            <strong>Languages:</strong> {countryDetail.languages[0].name}
          </div>
        </div>
        <div className="borders">
          <div>
            <strong>Border Countries:</strong>
          </div>
          <div className="bordersContainer">
            {countryDetail.borders.map((border) => (
              <div className="border">{border}</div>
            ))}
          </div>
        </div>
      </div>
    ) : null;
  return detailCard;
}

export default Detail;
