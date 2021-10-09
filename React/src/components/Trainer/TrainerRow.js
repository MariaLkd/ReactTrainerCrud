import "bootstrap/dist/css/bootstrap.min.css";
import { Button, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";

function TrainerRow(props) {
  return props.trainers.map((tr) => (
    <tr key={tr.trainerid}>
      <td>
        <FormCheck
          checked={tr.select}
          onChange={(s) => {
            let value = s.target.checked;
            props.setTrainers(
              props.trainers.map((trs) => {
                if (tr.trainerid === trs.trainerid) {
                  trs.select = value;
                }
                // console.log(trs);
                return trs;
              })
            );
          }}
        />
      </td>
      <td>{tr.trainerid}</td>
      <td>{tr.firstname}</td>
      <td>{tr.lastname}</td>
      <td>{tr.subject}</td>
      <td>
          <Button as={Link} to={`edit/${tr.trainerid}`}>Edit</Button>
      </td>
    </tr>
  ));
}

export default TrainerRow;
