import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProjectGrid from './pages/projectGrid';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/ProjectGrid" element={<ProjectGrid />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

