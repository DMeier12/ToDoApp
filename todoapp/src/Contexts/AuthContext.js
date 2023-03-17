import React, { useState, useEffect, useContext } from 'react'
import { auth } from '.../base'
import { githubAuthProvider, signInWithPopup, signout } from 'firebase/auth'

const AuthContext = react.createContext()
export function useAught() {
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const githubAuthProvider = new GithubAuthProvider()

    async function login() {
        return (signInWithPopup(auth, githubAuthProvider).then(authData => {
            console.log(authData)
            setCurrentUser(authData.user)
        }))
    }
    async function logout(){
        signout(auth).then(setCurrentUser(null))
    }
    const value = {currentUser, login, logout}
    useEffect(() => {
        const authChange = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
        return authChange
    }, [])  
    return (
        <AuthContext.Provider value={value}>
            {}
            {!loading && children}
        </AuthContext.Provider>
    )
}