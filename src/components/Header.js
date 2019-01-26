import React, { Component } from 'react'
import { PageHeader, Grid, Row, Col } from 'react-bootstrap'
import './Header.css'

class Header extends Component { 
  render() {
    return (
      <PageHeader className="headerStyle">
        <Grid>
          <Row>
            <Col xsOffset={6}>
              Anthony Lau
            </Col>
          </Row>
        </Grid>
      </PageHeader>
    );
  }
}

export default Header;
