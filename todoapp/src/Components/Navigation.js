import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'

export default function Navigation() {
  const { currentUser } = useAuth()

  return (
    <Navbar expand='md' variant='dark' bg='dark' className='p-3'>
        <Navbar.Brand href='/'>ResourePlus</Navbar.Brand>
        {/* Hamburger button below */}
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Nav>
              {currentUser &&
                <>
                  <Link to='/categories' className='nav-link'>Categories</Link>
                  <Link to='/ToDos' className='nav-link'>ToDos</Link>
                </>
              }
                <Link to='/bootstrap' className='nav-link'>Bootstrap</Link>
                <Link to='/routing' className='nav-link'>Routing</Link>
                <Link to='/testing' className='nav-link'>Testing</Link>
                {!currentUser &&
                  <Link to='/login' className='nav-link'>Login</Link>
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
