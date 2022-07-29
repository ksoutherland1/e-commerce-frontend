import React, { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';
import "./Navigation.scss";

const Navigation = () => {

  return (
    <Fragment>
      <div className='nav-container'>
          <Link to="/">
            Home
          </Link>
          <Link to="/About">
            About
          </Link>
          <Link to="/Shop">
            Shop
          </Link>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation