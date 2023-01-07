import React from "react";
import "./Header.css";

const Header = ({ togglePopUp }) => {
  return (
    <div>
      <div className="header_div">
        <p className="today_heading">Today</p>

        <button className="plus_Sign" onClick={() => togglePopUp()}>
          +
        </button>
      </div>
    </div>
  );
};

export default Header;
