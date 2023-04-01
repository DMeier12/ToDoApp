import React, { createContext } from 'react'
import { auth} from '../../base'
import {useAuth, GitHubProvider} from '../../Contexts/AuthContext'
import { Container, Card } from 'react-bootstrap'
import { useNavigate, useHistory, useLocation, useNavigation } from 'react-router-dom'
import {signInWithPopup, signOut} from 'firebase/auth'

export default function Login() {
    const AuthContext = createContext();
  const navigate = useNavigate();
  const location = useLocation();

  const SignInWithGitHub = async () => {
    try {
      await signInWithPopup(auth, GitHubProvider).then(function (result){
        var token = result.token;
        var user = result.user;
      });
    } catch (error) {
      console.error(error);
    }
  };

        const handleLogout = () => {
          console.log(`User logged out`);
          navigate("/login"); // redirect the user to /dashboard
    };

    async function handleAuth() {
        await AuthContext.login
        navigate("/todos"); // redirect the user to /dashboard
    }

  return (
    <div className='login'>
        <article className='bg-info mb-5 p-5 text-dark'>
            <h1 className='text-center'>Welcome to your ToDo list!</h1>
          </article>
          <Container>
            <Card className='m-2 border-dark text-center'>
                <Card.Header className='bg-dark text-white'>
                    <h2>Login Here:</h2>
                </Card.Header>
                <Card.Body>
            <button onClick={() => {
              SignInWithGitHub()

              if (location.state?.from) {
                navigate(location.state.from);
              }
            }
            }>Sign in with GitHub</button>
            <button onClick={handleLogout}>Log out</button>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
