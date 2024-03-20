import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import MainLayout from './components/MainLayout/MainLayout';
import CustomersView from './components/Customers/CustomersView';
import HomeComponent from './components/HomeComponent/HomeComponent';
import Login from './components/Login/Login'; // Ensure correct path to Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <MainLayout>
                <HomeComponent />
              </MainLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/customers" 
          element={
            <ProtectedRoute>
              <MainLayout>
                <CustomersView />
              </MainLayout>
            </ProtectedRoute>
          } 
        />
        {/* Define other routes inside ProtectedRoute as needed */}
        {/*<Route 
          path="*" 
          element={
            <ProtectedRoute>
              <MainLayout>
                <HomeComponent />
              </MainLayout>
            </ProtectedRoute>
          }
        />*/}
      </Routes>
    </Router>
  );
}

export default App;
