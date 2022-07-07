import { Link, BrowserRouter as Router, Outlet, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Fragment, useState, useEffect, Component } from "react";

// const navigate = useNavigate();
class Navigationbar extends Component {
  // navigate = useNavigate();

  constructor(){
    super();
    this.state = {
      user: null,
    }
  }

  removeUserInLocalStorage = () => {
    localStorage.removeItem('user');
    // navigate('/');
  }

  componentDidMount(){
    // const navigate = useNavigate();
    this.getUserData();
  }

  getUserData = () => {
    let user = localStorage.getItem('user');
    if (user) {
      let parseUser = JSON.parse(user);
      let userId = parseUser.userName;
      console.log(userId);
      this.setState({
        user : parseUser
      })
    }
  }
  render(){

    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand as={Link} to="/">My Posts</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/posts" >Posts</Nav.Link> 
              {
                !this.state.user &&
                <Fragment>
                  <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                  <Nav.Link as={Link} to="/register" >Register</Nav.Link>
                </Fragment>
              }
              {
                this.state.user &&
                <Fragment>
                  <Nav.Link as={Link} to="/profile" >profile</Nav.Link>
                  <Nav.Link as={Button} onClick={this.removeUserInLocalStorage} >logout</Nav.Link>
                </Fragment>
              }
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    );
  }
}

export default Navigationbar;