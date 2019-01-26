import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
  render() {
    return (
      <div className="button">
        <a href={this.props.link} class="btn btn-lg" style={{color: "#2c2b2c"}}>{this.props.socialMedia}</a>
      </div>
    );
  }
}

export default Button;
