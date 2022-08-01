import React, { Fragment } from 'react'
import "./Contact.scss"

const Contact = () => {
  return (
    <Fragment>
    <div className='contact-container'>
      <img className="contact-pic" src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80" alt="contact-pic" />
        <form className="form-container">
          <h1 className="contact">Reach Out</h1>
          <input className="name" placeholder="Name" type="text"></input>
          <input className="email" placeholder="Email" type="email"></input>
          <textarea className="message" placeholder="Your Message" type="text" rows="10"></textarea>
          <button className="send">Send</button>
        </form>
    </div>
    <h3 className='contact-qoute'>"A work of art which did not begin in emotion is not art"</h3>
    </Fragment>

  )
}

export default Contact