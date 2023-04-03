import React, { useState, useEffect, createContext } from 'react';
import {firebaseConfig } from '../base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp(firebaseConfig);

// Create a context for the authentication provider
export const AuthContext = createContext();

// Create the authentication provider component
const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // Listen for Firebase auth state changes
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    // Sign in with GitHub
    const signInWithGitHub = () => {
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider);
    };

    //Sign out
    const signOut = () => {
        firebase.auth().signOut();
    };


    return (
        <AuthContext.Provider value={{ currentUser, signInWithGitHub, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;