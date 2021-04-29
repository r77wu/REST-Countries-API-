import React from "react";
import "./styles.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="titleContainer">
          <h1 className="title">Where in the world?</h1>
        </div>
        {/* <div className="theme">
          <i class="far fa-moon"></i> <span>Dark Mode</span>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
