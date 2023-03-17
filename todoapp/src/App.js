import React from 'react'
import './App.css';
import 'Bootstrap';
import 'axios';
import Routing from './components/Routing/Routing'
import Navigation from './components/Navigation';
import AuthProvider from './contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Auth/Login'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Categories from './components/Categories/Categories'
import Resources from './Components/Todos/Resources'
import Testing from './testing/Testing'
function App() {
  return (

    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<ProtectedRoute><Resources /></ProtectedRoute>} />
            <Route path='/categories' element={<ProtectedRoute><Categories /></ProtectedRoute>} />
            <Route path='/resources' element={<ProtectedRoute><Resources /></ProtectedRoute>} />

            <Route path='/login' element={<Login />} />
            <Route path='/bootstrap' element={<Bootstrap />} />
            <Route path='/routing' element={<Routing />} />
            <Route path='/testing' element={<Testing />} />


            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
      <header>
      <h1>Todo List</h1>
    </header>
    </div>
  );
}

export default App;
