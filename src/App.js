import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Blogs from './Component/Blogs/Blogs';
import ContactUs from './Component/Contact/ContactUs';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import About_us from './Component/About/About_us';
// import Calculator from './Component/CALCULATOR/Calculator';
// import "./App.css";
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />            
                    <Route path="/about" element={<About_us />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/services" element={<Services />} />
                    {/* <Route path="/costestimation" element={<Calculator />} /> */}
                </Routes>
                
                <Footer />
            </div>
        </Router>
    );
}

export default App;
