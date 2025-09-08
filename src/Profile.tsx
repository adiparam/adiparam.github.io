import React from 'react'
import './Profile.css'

const Profile: React.FC = () => {
  return (
    <div className="home-section">
      <div className="hero">
        <div className="profile-container">
          <div className="profile-image-container">
            <img 
              src="/resources/profile.png" 
              alt="Aditya Paramatmuni" 
              className="profile-image"
            />
          </div>
          <div className="profile-content">
            <h1>Welcome to my profile</h1>
            <p>I'm a software engineer with over 20 years of experience developing infrastructure.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
