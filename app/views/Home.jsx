import React from "react";
import { useState, useEffect } from "react";
// import uuid from "react-uuid";
import { Button, Jumbotron, Container, Row, Col } from "react-bootstrap";
import Layout from "./Shared/Layout";

export default function Home(props) {
  

  return (
    <div>
      <Layout user={props.user}>
        <Jumbotron>
          <div className="container">
            <div>
              <h1>Welcome to Project Explorer</h1>
            </div>
            <p>
              Project Explorer is a repository for final year projects across
              all departments at your institution. You can submit your project
              and search projects submitted by others to learn from.
            </p>
            <Button href="/signup" variant="primary" className="mr-4">
              Get Started
            </Button>
            <Button href="/login" variant="secondary">
              Login
            </Button>
          </div>
        </Jumbotron>

        <Container>
          <Row className="showcase">
            {/* {console.log(Projects)} */}

            {props.project.slice(0,4).map((projects, index) => (
              <Col className="" key={index}>
                <div>
                  {console.log(projects)}
                  <h5>
                    <a href={`/project/${projects.id}`}>{projects.name}</a>
                  </h5>
                  <h6> {projects.abstract}</h6>
                  <h6 className=""> {projects.authors}</h6>
                  {/* <p className="">{projects.tags}</p> */}
                  {projects.tags.map((tag, index) => (
                    <a href="/" key={index} style={{ margin: "5px" }}>
                      {tag}
                    </a>
                  ))}
                </div>
                <></>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    </div>
  );
}