import { Link, BrowserRouter as Router, Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">My Posts</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/posts" >Posts</Nav.Link>
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Navigationbar;