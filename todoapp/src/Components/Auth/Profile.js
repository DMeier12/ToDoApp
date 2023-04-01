import { React, useState } from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import './Profile.css'
import { useNavigate, useHistory, useLocation, useNavigation } from 'react-router-dom'

export default function Profile(props) {
  const [currentUser, setCurrentUser] = useState()
  const { navigate } = useNavigate()

  console.log(props.value)
  if(currentUser ==null) navigate('/login')
  return (
    <span className='profile p-2'>
        {/* Hello {!currentUser.displayName ? currentUser.email : currentUser.displayName.split(' ')[0]}!
        <img src={currentUser.photoURL} alt='User profile pic' /> */}
    </span>
  )
}
