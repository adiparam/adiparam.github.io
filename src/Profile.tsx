import React from 'react'
import './Profile.css'

const Profile: React.FC = () => {
  return (
    <div className="home-section">
      <div className="hero">
        <h1>Welcome to my profile</h1>
        <p>I'm a software engineer currently working
          on <a href="https://verily.com/solutions/numetric/retinal-service">Verily Retinal Service</a>
        </p>
      </div>
    </div>
  )
}

export default Profile
