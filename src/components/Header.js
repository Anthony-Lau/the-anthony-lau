import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './Header.css'

class Header extends Component { 
  render() {
    return (
      <Router>
        <div className="header">
          <div className="name">
            Anthony Lau
          </div>
          <div className="contact">
            <Link to="/contact" className="routerLink" style={{textDecoration: "none"}}>
              Contact
            </Link>
          </div>
        </div>
      </Router>
    );
  }
}

export default Header;
