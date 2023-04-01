import React, { useState } from 'react'
import { Nav, Navbar, NavDropdown, Container  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'
import './Navigation.css'; // import the CSS file

export default function Navigation(props) {
const { currentUser } = useAuth()
  const [expanded, setExpanded] = useState(false);
  console.log(props.currentUser)
  console.log(props.value)
  return (
    <Navbar variant='dark' bg='dark' expanded={expanded} className="navbar-toggleable">
      <Container>
      <Navbar.Brand href="/login">Todos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="navbar-nav">
        {props.currentUser ? (<Nav className="me-auto">
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item as={Link} to="./Categories">View Categories</NavDropdown.Item>
              <NavDropdown.Item href="/Categories/categories/CatCreate">New Category</NavDropdown.Item>
              <NavDropdown.Item href="/Categories/categories/CatEdit">Edit Category</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Todos" id="todos-dropdown">
              <NavDropdown.Item href="/Todos/Todos">View Todos</NavDropdown.Item>
              <NavDropdown.Item href="/Todos/todos/TodoCreate">New Todo</NavDropdown.Item>
              <NavDropdown.Item href="/Todos/todos/TodoEdit">Edit Todo</NavDropdown.Item>
            </NavDropdown>
          </Nav>) : (
              <Nav.Link></Nav.Link>
            )}
          <Nav>
            {props.currentUser ? (
              <NavDropdown title="Logout" id="user-dropdown">
                <NavDropdown.Item as={Link} to="./Login">Sign Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link></Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  )}