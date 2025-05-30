// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Blog Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {user && <Nav.Link as={Link} to="/dashboard">My Posts</Nav.Link>}
            {user && <Nav.Link as={Link} to="/new">New Post</Nav.Link>}
          </Nav>
          <Nav>
            {user ? (
              <>
                {/* <Navbar.Text className="me-3">Signed in as: <b>{user?.username.charAt(0).toUpperCase() + user?.username.slice(1) || 'Guest'}</b></Navbar.Text> */}

                {/* <Navbar.Text className="me-3 text-light d-flex align-items-center">
                  <i className="bi bi-person-circle me-1"></i>
                  <span className="fw-semibold">
                    {user?.username.charAt(0).toUpperCase() + user?.username.slice(1) || 'Guest'}
                  </span>
                </Navbar.Text> */}
                <Navbar.Text className="me-3 d-flex align-items-center text-white">
                  <i
                    className="bi bi-person-circle me-2"
                    style={{ fontSize: '1.5rem', color: '#0dcaf0' }} // Bootstrap's cyan
                  ></i>
                  <span className="fw-semibold">
                    Welcome, <span style={{ color: '#ffc107' }}>
                      {user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}
                    </span>
                  </span>
                </Navbar.Text>


                <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
