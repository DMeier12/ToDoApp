import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3PY--mgFjc74eX5IW24Xz3zB_-VpdV4M",
    authDomain: "todoapp-317a2.firebaseapp.com",
    projectId: "todoapp-317a2.firebaseapp.com",
    storeageBucket: "todoapp-317a2.appspot.com",
    messagingSenderId: "810183923352",
    appId: "1:810183923352:web:3627842f510a10239362ed"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
//export const {auth}