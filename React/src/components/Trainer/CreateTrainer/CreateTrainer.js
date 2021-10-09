import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";

function CreateTrainer(props) {
  const submit = (s) => {
    let firstname = s.target[0].value;
    let lastname = s.target[1].value;
    let subject = s.target[2].value;
    let data = {
      firstname,
      lastname,
      subject,
    };
    console.log(data);
    postTrainer(data);
  };

  const postTrainer = (data) => {
    axios
      .post("http://localhost:8080/api/trainers", data)
      .then((d) => {
        console.log(d);
        props.history.push("/");
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <span>
        <h2 className="title">Create New Trainer</h2>
      </span>
      <Container>
      <Form
        onSubmit={(s) => {
          s.preventDefault();
          submit(s);
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter subject" />
        </Form.Group>
        <div className="buttons">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      </Container>
    </div>
  );
}

export default withRouter(CreateTrainer);
