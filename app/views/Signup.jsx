import React from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import Layout from './Shared/Layout';

const Signup = ({ props1, props2, props3, user }) => {

    console.log(props1);
    console.log(props2);
    console.log(props3);
    console.log(user);
 
    return (
        <Layout user={user}>
            <main className="mx-auto w-50 p-3">
            <h1>Signup</h1>
            <Form id="signupForm" action="signup" method="POST"> 
               
                <Form.Group as={Row}>
                    <Col>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" id="firstname" name="firstName" placeholder="First Name" />
                    </Col>
                    <Col>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" id ="lastname" name="lastName" placeholder="Last Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type="email" id="email" name="email" placeholder="Your Email Address" />
                    </Col>
                    <Col>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" id="password" name="password" placeholder="Your password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Label>Program:</Form.Label>
                        <Form.Control as="select" name="program" id="program">
                            <option>Select Program</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Label>Matric Number:</Form.Label>
                        <Form.Control type="text" id="matricNumber" name="matricNumber" placeholder="16/2020" />
                    </Col>
                    <Col>
                        <Form.Label>Graduation Year:</Form.Label>
                        <Form.Control as="select" name="graduationYear" id="graduationYear">
                            <option>Select Graduation Year</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">Sign Up</Button>
            </Form> <br/>
            </main>
        </Layout>
    )
}

export default Signup;
