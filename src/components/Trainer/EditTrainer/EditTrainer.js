import React, {useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./EditTrainer.css";

function EditTrainer(props) {
  const [stateTrainer, setStateTrainer] = useState([]);

  useEffect(() => {
    let trainerid = props.match.params.id;
    function getTrainerById (trainerid) {
      axios
        .get(`http://localhost:8080/api/trainers/${trainerid}`)
        .then((tr) => {
          let trainer = tr.data;
          setStateTrainer({
            trainerid: trainer.trainerid,
            firstname: trainer.firstname,
            lastname: trainer.lastname,
            subject: trainer.subject,
          });
        })
        .catch((err) => alert(err));
    };
    getTrainerById(trainerid);
  }, [props]);

  

  const putTrainer = (s) => {
    axios
      .put('http://localhost:8080/api/trainers', stateTrainer)
      .then((tr) => {
        props.history.push("/");
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="container">
      <span>
        <h2 className="title">Edit Trainer #{stateTrainer.trainerid}</h2>
      </span>
      <Form
        onSubmit={(s) => {
          s.preventDefault();
          putTrainer(s);
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={stateTrainer.firstname}
            onChange={(s) => {
              let value = s.target.value;
              setStateTrainer({
                trainerid: stateTrainer.trainerid,
                firstname: value,
                lastname: stateTrainer.lastname,
                subject: stateTrainer.subject,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={stateTrainer.lastname}
            onChange={(s) => {
              let value = s.target.value;
              setStateTrainer({
                trainerid: stateTrainer.trainerid,
                firstname: stateTrainer.firstname,
                lastname: value,
                subject: stateTrainer.subject,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder={stateTrainer.subject}
            onChange={(s) => {
              let value = s.target.value;
              setStateTrainer({
                trainerid: stateTrainer.trainerid,
                firstname: stateTrainer.firstname,
                lastname: stateTrainer.lastname,
                subject: value,
              });
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(EditTrainer);
