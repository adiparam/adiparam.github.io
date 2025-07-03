import React from 'react'

interface WorkExperience {
  company: string
  period: string
  description: string
}

const About: React.FC = () => {
  const workExperience: WorkExperience[] = [
    {
      company: 'Verily Life Sciences',
      period: '2022 - Present',
      description: 'Current position at Verily Life Sciences'
    },
    {
      company: 'Google',
      period: '2010 - 2022',
      description: 'Software Engineer at Google'
    },
    {
      company: 'Bank of America',
      period: '2005 - 2010',
      description: 'Software Developer at Bank of America'
    }
  ]

  return (
    <div className="home-section">
      <div className="work-experience">
        <h2>Work Experience</h2>
        <div className="experience-list">
          {workExperience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{job.company}</h3>
                <span className="period">{job.period}</span>
              </div>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
