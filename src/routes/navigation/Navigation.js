import React, { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';
import "./Navigation.scss";

const Navigation = () => {

  return (
    <Fragment>
      <div className='nav-container'>
          <Link className='logo' to="/">
            Earth
          </Link>
          <div className='nav-links'>
            <Link className='link' to="/About">
              About
            </Link>
            <Link className='link' to="/Shop">
              Shop
            </Link>
          </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation