import React, { Component } from 'react';
import {
    Container,
  } from "react-bootstrap";
  

export default class Footer extends Component {
  render() {
    const footerStyle ={
        backgroundColor: '#e9ecef',
        height: '50px',
        marginTop: "20px",
        padding: "10px",
    }
    return (
        <Container>
           <footer style={footerStyle} >
            <div className="d-flex justify-content-end">
            <span className="">Project Explorer © 2020</span>
            <span>Edconnect</span>
          </div>
        </footer>
        </Container>
    )
  }
}