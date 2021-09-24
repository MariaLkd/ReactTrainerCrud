import { Navbar, Nav} from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/create">New Trainer</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
