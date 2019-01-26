import React, { Component } from 'react'
import Button from './Button.js'
import './Body.css'

class Body extends Component {
  render() {
    return (
      <div className="body">
        <Button socialMedia="Facebook" link="https://www.facebook.com/anthony.lau.161"></Button>
        <Button socialMedia="LinkedIn" link="https://www.linkedin.com/in/anthony-lau-29a738117"></Button>
        <Button socialMedia="Github" link="https://github.com/Anthony-Lau"></Button>
      </div>
    );
  }
}

export default Body;
