import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import MainLayout from './components/MainLayout/MainLayout';
import CustomersView from './components/Customers/CustomersView';
import HomeComponent from './components/HomeComponent/HomeComponent';
import Login from './components/Login/Login'; 
import { AuthProvider } from './components/Login/AuthContext'; 


function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
