import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div className="Container">
        <div className="nav-wrapper">
          <div className="left-side">
            <div className="nav-link-wrapper">
              <Link className="" to="#">
                {" "}
                Home
              </Link>
            </div>
            <div className="nav-link-wrapper">
              <Link className="" to="#">
                {" "}
                Moment
              </Link>
            </div>
          </div>
          <div className="right-side" />
          <div className="nav-link-wrapper">
            <Link className="" to="#">
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
