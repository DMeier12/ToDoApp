import React from 'react'
import Logout from './Auth/Logout'
import { useAuth } from '../Contexts/AuthContext'

export default function Footer() {
  const {currentUser} = useAuth()

  return (
    <>
      {currentUser &&
        <Logout />
      }
    </>
  )
}