import React from 'react'
import './App.css';
import 'Bootstrap';
import 'axios';
import Bootstrap from './components/Bootstrap/Bootstrap';
import Routing from './components/Routing/Routing'
import Navigation from './components/Navigation';
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
