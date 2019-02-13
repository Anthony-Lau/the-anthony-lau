import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
  render() {
    return (
      <div className="center">
        <a href={this.props.link} className="button" target="_blank" rel="noopener noreferrer">
          <div className="text">
              {this.props.text}
          </div>
        </a>  
      </div>
    );
  }
}

export default Button;
