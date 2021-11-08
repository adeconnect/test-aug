import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    FormControl,
    Button
} from 'react-bootstrap'

const NavLinks = (props) => {
    if (props.firstname === null) {
        return (
            <>
                <Nav.Link id="signup" href="/signup">Sign Up</Nav.Link>
                <Nav.Link id="login" href="/login">Login</Nav.Link>
            </>
        )
    }
    else {
        return (
            <>
                <Nav.Link id="logout" href="/logout">Logout</Nav.Link>
                <Nav.Item className="navbar-text" id="username" href="/">{'Hi, ' + props.firstname}</Nav.Item>
            </>
        )
    }
}

const Header = ({user}) => {
    let firstname = null
    if (user){
        firstname = user.firstname
    }

    return (
        <Navbar bg="primary" variant="dark" style={{ padding: '0.5rem' }}>
            <NavbarBrand href="/">Project Explorer</NavbarBrand>
            <Nav>
                <FormControl type="text" placeholder="Search Projects" />
                <Button variant="outline-light">Search</Button>
                <Button>Submit</Button>
            </Nav>
            <Nav style={{ marginLeft: 'auto' }}>
                {/* set the first name here oh! */}
                <NavLinks firstname={firstname} />
            </ Nav>
        </Navbar>
    )
}

export default Header;
