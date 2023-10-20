import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import CustomersView from './components/Customers/CustomersView';
import HomeComponent from './components/HomeComponent/HomeComponent';


function App() {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/home" element={<HomeComponent />} />
                    <Route path="/customers" element={<CustomersView />} />
                    {/* Add other routes as needed */}
                    <Route path="*" element={<HomeComponent />} />
                </Routes>
            </MainLayout>
        </Router>
    );
}

export default App;
