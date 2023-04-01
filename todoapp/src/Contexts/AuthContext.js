import React, { useState, useEffect, useContext } from 'react'
import { initializeApp } from '@firebase/app';
import { GithubAuthProvider, signInWithPopup, FacebookAuthProvider, signOut, getAuth} from 'firebase/auth'

export const AuthContext = React.createContext()
export const GitHubProvider = new GithubAuthProvider();

export function useAuth() {
    return getAuth
}

export default function AuthProvider({children}, props) {
    const [currentUser, setCurrentUser] = useState()
    const [error, setError] = useState()

    const SignInWithGitHub = async () => {
        try {
            await signInWithPopup(useAuth, GithubAuthProvider)
            setCurrentUser(useAuth.currentUser)
        } catch (error) {
            setError(error.message);
            console.log(error)
        }
    }

    const handleSignOut = async () => {
        try {
            await signOut(useAuth);
            setCurrentUser(null)
        } catch (error) {
          setError(error.message);
        }
      };

    const login = () => { SignInWithGitHub() };
    const logout = () => { handleSignOut() };

    const value = {currentUser, login, logout}
    // useEffect(() => {
    //     const authChange = useAuth.onAuthStateChanged(user =>{
    //         setCurrentUser(useAuth.currentUser)
    //     })
    //     return authChange
    // }, [])  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
        // <AuthContext.Provider value={value}>
        //     {}
        //     {children}
        // </AuthContext.Provider>

}