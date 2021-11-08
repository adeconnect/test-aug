import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
 //import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Header(props) {
  

  return (
    <div>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="container-fluid justify-content-between"
        collapseOnSelect
      >
        
          <Navbar.Brand href="/" className="text-white">Project Explorer</Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  >
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search Projects"
              className="mr-sm-2"
            />
            
          </Form>
          <Button variant="outline-light" type="submit" className="">
              Search
            </Button>
          <Nav className="mr-auto">
            <Nav.Link href="/">Projects</Nav.Link>
            <Nav.Link href="/projects/submit">Submit</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="">
            {props.user ? (
              <>
                <Nav.Link id="logout" href="/logout" >
                  Logout
                </Nav.Link>
                <Navbar.Text id="username">{`Hi, ${props.user.firstname}`}</Navbar.Text>
              </>
            ) : (
              <>
                {/* <Nav.Link href="/signup">Sign Up </Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link> */}
                <Nav.Link href="/signup" id="signup">Sign Up</Nav.Link>
                    <Nav.Link href="/login" id="login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}














