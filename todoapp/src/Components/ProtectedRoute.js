import React from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    const location = useLocation()
    const {currentUser} = useAuth.currentUser
    return currentUser ? children : <Navigate to="/login" state={{from: location}} />
}