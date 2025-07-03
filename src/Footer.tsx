import React from 'react'
import liLogo from '../resources/icons8-linkedin-48.png'
import ghLogo from '../resources/icons8-github-48.png'
import blueskyLogo from '../resources/icons8-bluesky-48.png'

interface SocialLink {
  name: string
  url: string
  icon: string
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/adiparam',
      icon: liLogo
    },
    {
      name: 'GitHub',
      url: 'https://github.com/adiparam',
      icon: ghLogo
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/adityaparamatmuni.com',
      icon: blueskyLogo
    }
  ]

  return (
    <footer className="footer">
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title={link.name}
          >
            <img 
              src={link.icon} 
              alt={`${link.name} icon`}
              className="social-icon"
              width="24"
              height="24"
            />
            
          </a>
        ))}
      </div>
      <div className="footer-text">
        <p>&copy; 2025 Aditya Paramatmuni. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
