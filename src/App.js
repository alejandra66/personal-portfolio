import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProjectGrid from './pages/projectGrid';
import SignUpForm001 from "./pages/projects/dailyUi/signUpForm-001";
import CreditCardCheckout002 from "./pages/projects/dailyUi/creditCardCheckout-002";
import LandingPage003 from "./pages/projects/dailyUi/landingPage-003";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/ProjectGrid" element={<ProjectGrid />} />
                    <Route path="/SignUpForm001" element={<SignUpForm001 />} />
                    <Route path="/CreditCardCheckout002" element={<CreditCardCheckout002 />} />
                    <Route path="/LandingPage003" element={<LandingPage003 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

