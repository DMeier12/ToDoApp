import React, { useContext, useState } from 'react';
import { AuthContext, signOut } from '../../Contexts/AuthContext'
import { Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const  Login = ()=> {
    const { signInWithGitHub, currentUser, handleSignOut} = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignInWithGitHub = async () => {
        try {
            await signInWithGitHub().then(result => { navigate('/ToDos'); })
        } catch (error) {
            setError(error.message);
            console.error(error.message)
        }
    };

    return (
        <div>
            {!currentUser?(
                <div className = 'login'>
                    <article className='bg-info mb-5 p-5 text-dark'>
                        <h1 className='text-center'>Welcome to your ToDo list!</h1>
                      </article>
                      <Container>
                        <Card className='m-2 border-dark text-center'>
                            <Card.Header className='bg-dark text-white'>
                                <h2>Login Here:</h2>
                            </Card.Header>
                            <Card.Body>
                                    <button onClick={() => {handleSignInWithGitHub()}}>Sign in with GitHub</button>
                            </Card.Body>
                        </Card>
                    </Container>
                    </div>
            ): (
                    <div>
                        <div className='login'>
                            <article className='bg-info mb-5 p-5 text-dark'>
                                <h1 className='text-center'>Welcome to your ToDo list!</h1>
                            </article>
                        </div>
                    </div>
            )}
        </div>
    )
}
export default Login;
