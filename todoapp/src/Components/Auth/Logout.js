import { useContext, useEffect } from 'react'
import { signOut, AuthContext, currentUser } from '../../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const { signOut, currentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUser)
            navigate('/login'); //redirect to the login component
    })

    useEffect(() => {
        // This code will run when the component mounts (i.e., when it first loads)
        signOut()
        navigate('/login'); //redirect to the login component
    }, []);


    return (
        <div>
            <h1>Signing you out now.</h1>
        </div>
    );
};

export default Logout;
