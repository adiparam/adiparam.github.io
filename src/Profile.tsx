import React from 'react'
import './Profile.css'

const Profile: React.FC = () => {
  return (
    <div className="home-section">
      <div className="hero">
        <h1>Welcome to my profile</h1>
        <p>I'm a software engineer at <a href="https://verily.com/">Verily Life Sciences.</a></p>
      </div>
    </div>
  )
}

export default Profile
