import React, { useState, useEffect} from "react";
import {} from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "./Shared/Layout";


export default function Project(props) {
  

  return (
    <div>
      <Layout user={props.user}>
        <h2 id="project_name">{props.props1.name}</h2>

        <Container className=" summary">
          <div className="row bg-light">
            <div className="col col-lg-3">
              <span>Created By</span> <br />
              <span id="project_author">{`${props.props2.firstname} ${props.props2.lastname}`}</span>
            </div>
            <div className="col col-lg-3">
              <span>Date Created</span> <br />
              <span>2021-02-09</span>
            </div>
            <div className="col col-lg-3">
              <span>Last Updated</span> <br />
              <span>2021-02-09</span>
            </div>
            <div className="col col-lg-3">
              <a
                href="editproject.html"
                className="btn btn-primary"
                role="button"
              >
                Edit Project
              </a>
            </div>
          </div>

          <Row className="mt-4">
            <Col lg={6}>
              <h4>Project Abstract</h4>
              <p id="project_abstract">
              {props.props1.abstract}
              </p>
              <h4>Comments</h4>
              <textarea
                className="form-control w-100 p-3"
                name="abstract"
                type="text"
                d="exampleFormControlTextarea1 "
                rows="3 "
                placeholder="leave a comment"
              ></textarea>
              <button type="button" className="btn btn-primary mt-3">
                Submit
              </button>
            </Col>

            <Col>
              <h4>Project Details</h4>
              <div className="card">
                <h5 className="card-header">Author(s)</h5>
                <div className="card-body">
                  <p className="card-text" id="project_authors">
                  {props.props1.authors}
                  </p>
                </div>
                <p className="card-header text-primary" id="project_tags">
                {props.props1.tags}
                </p>
              </div>

              <div className="card mt-3">
                <h5 className="card-header">Project files</h5>
                <div className="card-body">
                  <p className="card-text">No file uploaded yet</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}