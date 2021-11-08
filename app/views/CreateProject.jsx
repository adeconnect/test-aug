import React, { useState } from "react";
import Layout from "./Shared/Layout";
import { Button, Form, Alert } from "react-bootstrap";

export default function CreateProject({ props, user, err }) {
  let showError = false;
  err.length > 0 ? (showError = true) : (showError = false);

  return (
    <Layout user={user}>
       <main class="mx-auto w-50 p-3">
      <Form
        name="submitProject"
        id="createProjectForm"
        action="/projects/submit"
        method="POST"
      >
        {showError ? (
          <>
            {" "}
            <Alert className="alert alert-danger" variant="danger">
              {err.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </Alert>{" "}
          </>
        ) : (
          <></>
        )}
        <h1>Submit Project</h1>
        <Form.Group>
          <Form.Label htmlFor="projectname">Project name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            placeholder="Enter project name"
          />
        </Form.Group>

        <Form.Group controlId="exampleFormAbstract">
          <Form.Label>Project Abstract</Form.Label>
          <Form.Control as="textarea" rows={3} name="abstract" />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="authors">Authors</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            id=""
            placeholder="Enter author names (seperated by comma)"
            name="authors"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="tags">Tags</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            id="tags"
            placeholder="Use # to tag project with different topics (e.g. #javascript #mongodb)"
            name="tags"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
      </main>
    </Layout>
  );
}
