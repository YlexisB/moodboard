/* eslint-disable no-unused-vars */
import react from "react";
import { Link } from "react-router-dom";
import Search from "./Search-bar";
const Header = () => {
  return (
    <div id="header-all">
      <div id="section-header">
        <div className="left">
          <Link to="/About/" className="text-link">
            <h4 id="about">about</h4>
          </Link>
          <Link to="/Contact/" className="text-link">
            <h4 id="contact">contact us</h4>
          </Link>
        </div>
        <Link to="/" className="text-link">
          {" "}
          <h1>Snap Still</h1>
        </Link>
        <div className="right">
          <Search id="search-bar" />
          <Link to="/Personalboard/" className="text-link">
            <h4 id="mood-board">mymoodboard</h4>
          </Link>
        </div>
      </div>
      <hr />
      <div id="scroll-container">
        <div id="scroll-text">
          <p className=" brown">create</p>
          <p className="green">download</p>
          <p className="scarlet">share</p>
          <p className="pink">inspire</p>
          <p className="blue">reflect</p>
          <p className="orange">excite</p>
          <p className="brown">create</p>
          <p className="green">download</p>
          <p className="scarlet">share</p>

          <p className="pink">inspire</p>
          <p className="blue">reflect</p>
          <p className="orange">excite</p>
          <p className=" brown">create</p>
          <p className="green">download</p>
          <p className="scarlet">share</p>
          <p className="pink">inspire</p>
          <p className="blue">reflect</p>
          <p className="orange">excite</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
