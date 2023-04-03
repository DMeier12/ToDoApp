import React, {useContext, useEffect } from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext'

export default function Profile() {
    const navigate = useNavigate();
    const {currentUser } = useContext(AuthContext);

    console.log('current user in profile')
    console.log(currentUser)

    useEffect(() => {
        if (!currentUser)
            navigate('/login'); //redirect to the login component
    })

    return (
        <span className='profile p-2'>
             Hello {!currentUser.displayName ? currentUser.email : currentUser.displayName.split(' ')[0]}!
        <img src={currentUser.photoURL} alt='User profile pic' /> 
        </span>
    )
}
