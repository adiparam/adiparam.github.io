import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Profile from './Profile'
import Blog from './Blog'
import About from './About'
import Footer from './Footer'
import AnalyticsTracker from './AnalyticsTracker' // Import the tracker
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <AnalyticsTracker /> {/* Add the tracker here */}
      <div className="app">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <h2>Aditya Paramatmuni</h2>
            </div>
            <div className="nav-menu">
              <Link to="/" className="nav-item">Home</Link>
              <Link to="/blog" className="nav-item">Blog</Link>
              <Link to="/about" className="nav-item">About</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
