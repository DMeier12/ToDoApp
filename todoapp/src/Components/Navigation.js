import React, { useState, useContext } from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { AuthContext } from '../Contexts/AuthContext'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom'
import './Navigation.css'; // import the CSS file

export default function Navigation() {
    const {currentUser} = useContext(AuthContext);

  return (
    <Navbar variant='dark' bg='dark' className="navbar-toggleable">
      <Container>
      <Navbar.Brand href="/">Todos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
        {currentUser ? (<Nav className="me-auto">
            <NavDropdown as={Link} to="./Categories"title="Categories" id="categories-dropdown">
              <NavDropdown.Item as={Link} to="./Categories">View Categories</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Todos" href="./Todos" id="todos-dropdown">
              <NavDropdown.Item href="./Todos">View Todos</NavDropdown.Item>
            </NavDropdown>
          </Nav>) : (
              <Nav.Link></Nav.Link>
            )}
          <Nav>
            {currentUser ? (
                          <NavDropdown title={!currentUser.displayName ? currentUser.email : currentUser.displayName.split(' ')[0]} id="user-dropdown">
                              <NavDropdown.Item as={Link} to="./Profile">Profile</NavDropdown.Item>
                              <NavDropdown.Item as={Link} to="./Logout">Log Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link></Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
)
}