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
        <div className="experience-list single-box"> {/* Added a class for potential styling */}
          {workExperience.map((job, index) => (
            <React.Fragment key={index}> {/* Using React.Fragment to avoid extra divs if not needed for styling */}
              <div className="experience-item"> {/* Retaining this class for individual item styling */}
                <div className="experience-header">
                  <h3>{job.company}</h3>
                  <span className="period">{job.period}</span>
                </div>
                <p>{job.description}</p>
              </div>
              {index < workExperience.length - 1 && <hr className="experience-separator" />} {/* Optional: Add a separator */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
