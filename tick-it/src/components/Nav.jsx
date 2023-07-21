import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";

const CustomNav = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            TickitGuru
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link> */}
              <NavLink as={Link} to="/">
                Home
              </NavLink>
              <NavLink as={Link} to="/events/concerts">
                Concerts
              </NavLink>
              <NavLink as={Link} to="/events/sports">
                Sports
              </NavLink>
              <NavLink as={Link} to="/events/theatre">
                Theatre
              </NavLink>
              <Nav.Link as={Link} to="/tickets">
                My Tickets
              </Nav.Link>
              <Nav.Link as={Link} to="/signin">
                Sign In
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNav;
