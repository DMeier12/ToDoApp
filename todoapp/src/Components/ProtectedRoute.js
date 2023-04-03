import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { useNavigate, useLocation} from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    const Navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    
    return currentUser ? children : <Navigate to='/login' />
}