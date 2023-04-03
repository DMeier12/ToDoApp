import React from 'react'
import './App.css';
import Navigation from './Components/Navigation';
import AuthProvider from './Contexts/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Auth/Login'
import NotFound from './Components/NotFound'
import Footer from './Components/Footer'
import ProtectedRoute from './Components/ProtectedRoute'
import Categories from './Components/Categories/Categories'
import Todos from './Components/Todos/Todos'
import CreateTodos from './Components/Todos/TodoCreate'
import EditTodos from './Components/Todos/TodoEdit'
import Profile from './Components/Auth/Profile'
import LogOut from './Components/Auth/Logout'
import CreateCategory from './Components/Categories/CatCreate'
import EditCategory from './Components/Categories/CatEdit'

function App() {
  return (
      <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
           <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/categories' element={<ProtectedRoute><Categories /></ProtectedRoute>} /> 
             <Route path='/todos' element={<ProtectedRoute><Todos /></ProtectedRoute>} />
             <Route path='/login' element={<Login />} />
             <Route path='/logout' element={<ProtectedRoute><LogOut /></ProtectedRoute>} />
             <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
             <Route path='*' element={<NotFound />} />  
          </Routes>
          <Footer />
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;