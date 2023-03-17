import React from 'react'
import './App.css';
//import 'Bootstrap';
import 'axios';
import Routing from './Components/Routing/Routing'
import Navigation from './Components/Navigation';
import AuthProvider from './Contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Auth/Login'
import NotFound from './Components/NotFound'
import Footer from './Components/Footer'
import ProtectedRoute from './Components/ProtectedRoute'
import Categories from './Components/Categories/Categories'
import Resources from './Components/Todos/Todos'
import Testing from './testing/Testing'
function App() {
  return (

    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path='./' element={<ProtectedRoute><Resources /></ProtectedRoute>} />
            <Route path='./categories' element={<ProtectedRoute><Categories /></ProtectedRoute>} />
            <Route path='./resources' element={<ProtectedRoute><Resources /></ProtectedRoute>} />

            <Route path='./login' element={<Login />} />
            <Route path='./routing' element={<Routing />} />
            <Route path='./bootstrap' element={<Bootstrap />} />
            <Route path='./testing' element={<Testing />} />

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
