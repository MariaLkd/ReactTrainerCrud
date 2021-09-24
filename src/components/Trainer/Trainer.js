import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, FormCheck, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TrainerRow from "./TrainerRow";
import "./Trainer.css";

function Trainer() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    getTrainer();
  }, []);

  function getTrainer() {
    axios
      .get("http://localhost:8080/api/trainers")
      .then((data) => {
        let trainers = data.data;
        setTrainers(
          trainers.map((t) => {
            return {
              trainerid: t.trainerid,
              firstname: t.firstname,
              lastname: t.lastname,
              subject: t.subject,
            };
          })
        );
      })
      .catch((err) => alert(err));
  }

  // const deleteByIds = () => {
  //   let idsArray = [];
  //   trainers.forEach((tr) => {
  //     if (tr.select) {
  //       idsArray.push(tr.id);
  //     }
  //   });
  //   console.log(idsArray);
  //   axios
  //     .delete(`http://localhost:8080/api/trainers/${idsArray}`)
  //     .then((data) => {
  //       console.log(data);
  //       getTrainer();
  //     })
  //     .catch((err) => alert(err));
  // };

  const deleteById = () => {
    trainers.forEach((tr) => {
      if (tr.select) {
        axios
      .delete(`http://localhost:8080/api/trainers/${tr.trainerid}`)
      .then((data) => {
        console.log(data);
        getTrainer();
      })
      .catch((err) => alert(err));
      }
    });
    
  }

  return (
    <div>
      <span>
        <h2 className="title">Trainers List</h2>
      </span>
      <Container>
        <div id="new-delete-button">
          <span id="new-button">
              <Button as={Link} to="/create">New Trainer</Button>
          </span>
          <span id="delete-button">
            <Button variant="danger"
              onClick={() => {
                deleteById();
              }}
             text="Delete Selected">
              Delete Trainer(s)
            </Button>
          </span>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <FormCheck
                  onChange={(e) => {
                    let value = e.target.checked;
                    setTrainers(
                      trainers.map((trs) => {
                        trs.select = value;
                        console.log(trs.value);
                        return trs;
                      })
                    );
                  }}
                />
              </th>
              <th>#id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Subject</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <TrainerRow trainers={trainers} setTrainers={setTrainers} />
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Trainer;
