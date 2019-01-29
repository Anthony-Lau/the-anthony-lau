import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
  render() {
    return (
      <a href={this.props.link} className="button">
        <div className="link">
            {this.props.socialMedia}
        </div>
      </a>  
    );
  }
}

export default Button;
