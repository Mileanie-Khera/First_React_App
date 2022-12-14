import React, { Component } from "react";

//stateless functional component(sfc)
//lifecycle hooks can't be used in sfc
const Navbar = (props) => {
  console.log("Navbar-rendered");
  const { totalCounters } = props;
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
