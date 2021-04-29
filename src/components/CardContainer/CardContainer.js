import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Card from "../Card/Card";
import "./styles.scss";

function CardContainer(props) {
  const [countries, setCountries] = useState([]);
  const { region, search } = props;

  async function fetchData(param, search) {
    if (search) {
      try {
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/name/${search}?fields=name;capital;region;population;flag`
        );
        setCountries(response.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let response;
        if (param === "all") {
          response = await axios.get(
            `https://restcountries.eu/rest/v2/${param}?fields=name;capital;region;population;flag`
          );
        } else {
          response = await axios.get(
            `https://restcountries.eu/rest/v2/region/${param}?fields=name;capital;region;population;flag`
          );
        }
        response.data.sort(function (a, b) {
          return (a.population - b.population) * -1;
        });
        setCountries(response.data.slice(0, 8));
      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    fetchData(region, search);
  }, [region, search]);

  const cards =
    countries.length > 0
      ? countries.map((country) => (
          <Link
            key={country.name}
            to={{
              pathname: `${country.name}`,
              state: { prevPage: props.location.pathname },
            }}
            className="link"
          >
            <Card country={country} />
          </Link>
        ))
      : null;

  return <div className="cardContainer">{cards}</div>;
}

export default withRouter(CardContainer);
