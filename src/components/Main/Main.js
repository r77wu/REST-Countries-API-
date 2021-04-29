import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.scss";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import CardContainer from "../CardContainer/CardContainer";
import Detail from "../Detail/Detail";

function Main() {
  const [region, setRegion] = useState("all");
  const [search, setSearch] = useState(null);
  return (
    <section>
      <Switch>
        <Route path="/" exact>
          <Search setSearch={setSearch} />
          <Filter setRegion={setRegion} setSearch={setSearch} />
          <CardContainer region={region} search={search} />
        </Route>
        <Route path="/:country" exact component={Detail} />
      </Switch>
    </section>
  );
}

export default Main;
