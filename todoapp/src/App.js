import React from 'react'
import './App.css';
//import 'Bootstrap';
//import 'axios';
import Navigation from './Components/Navigation';
import AuthProvider from './Contexts/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Auth/Login'
import NotFound from './Components/NotFound'
import Footer from './Components/Footer'
import ProtectedRoute from './Components/ProtectedRoute'
import Categories from './Components/Categories/Categories'
import Todos from './Components/Todos/Todos'
import Routing from './Components/Routing/Routing'
import Profile from './Components/Auth/Profile'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
           <Routes>
            <Route path='/' element={<ProtectedRoute><Login /></ProtectedRoute>} />
            {/* <Route path='/categories' element={<ProtectedRoute><Categories /></ProtectedRoute>} /> */}
            {/* <Route path='/todos' element={<ProtectedRoute><Todos /></ProtectedRoute>} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />}/>
            {/* <Route path='*' element={<NotFound />} />  */}
          </Routes>
          <Footer />
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
