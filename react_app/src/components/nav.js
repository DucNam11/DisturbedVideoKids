import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink exact to="/" activeClassName="active">
        HOME
      </NavLink>
      <NavLink exact to="/algorithm" activeClassName="active">
        INTRODUCTION 
      </NavLink>
      {/* <NavLink exact to="/aboutus" activeClassName="active">
        ABOUT US
      </NavLink> */}
      <NavLink exact to="/app" activeClassName="active">
        APPLICATION
      </NavLink>
    </div>
  );
};

export default Nav