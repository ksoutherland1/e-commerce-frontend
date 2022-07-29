import React, { Fragment } from 'react'
import "./Fifth.scss"
import {FaInstagram} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";


const Fifth = () => {

  return (
    <Fragment>
        <h3>Connect with us on social media</h3>
        <div className='social-icons'>
            <a className='social' href="#"><FaFacebook/></a>
            <a className='social' href="#"><FaYoutube/></a>
            <a className='social' href="#"><FaInstagram/></a>
            <a className='social' href="#"><FaTwitter/></a>
        </div>
    </Fragment>
  )
}

export default Fifth