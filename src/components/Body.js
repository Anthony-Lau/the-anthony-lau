import React, { Component } from 'react'
import Button from './Button.js'
import Phone from './Phone.js'
import './Body.css'

class Body extends Component {
  render() {
    return (
      <div className="body">
        <Phone/>
        <div className="footer">
          <Button text="LinkedIn" link="https://www.linkedin.com/in/anthony-lau-29a738117"></Button>
          <Button text="Github" link="https://github.com/Anthony-Lau"></Button>
        </div>
      </div>
    );
  }
}

export default Body;
