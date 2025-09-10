import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="home-section">
      <div className="about-section">
        <h2>Work Experience</h2>
        <div className="experience-list">
            <React.Fragment>
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Verily Life Sciences</h3>
                  <span className="period">2022 - Present</span>
                </div>
                <p>I architected and led the development of the primary clinical workflow on GCP using GKE microservices,
                  enabling the launch of the 
                  <a href="https://web.archive.org/web/verily.com/solutions/numetric/retinal-service"> Verily Numetric Retinal Service </a>
                  from concept to production. I built an 
                  <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfRL/rl.cfm?lid=800483&lpcd=OUG"> image
                   storage and retrieval solution </a> called SID which has been approved by the FDA as a 
                   Class I Software medical device system and has since served 1000s of patients.
                </p>
                <br/>
                <p>I also built data processing and machine learning pipelines on GCP using Vertex AI and Cloud Run to
                   run various analysis and image classification models on medical images at scale.
                </p>
              </div>
              {<hr className="experience-separator" />}
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Google</h3>
                  <span className="period">2010 - 2022</span>
                </div>
                <p>
                  As a tech lead for a team working on large scale data processing infrastructure, 
                  I designed and built large scale distributed data processing systems that are the foundation of 
                  Google's multi-billion dollar business including YouTube and Display Ads. I worked with teams across Google to 
                  build new storage systems that support OLAP data warehouses with 100s of Terabytes of data as well as real-time 
                  distributed event processing infrastructure that supports 100s of billions of events per day. 
                </p>
              </div>
              {<hr className="experience-separator" />}
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Bank of America</h3>
                  <span className="period">2005 - 2010</span>
                </div>
                <p>I built financial models using Intex and Bloomberg APIs on an in-house distributed server farm 
                  to calculate pricing and risk measures for fixed income securities.
                </p>
              </div>
            </React.Fragment>
        </div>
      </div>
      <div className="about-section">
        <h2>Publications</h2>
        <div className="experience-list">
            <React.Fragment>
              <div className="experience-item">
                <div className="experience-header">
                  <h3><a href="https://www.google.com/books/edition/_/ldpenQEACAAJ?hl=en">Image-based Modeling and Rendering Using Stereo</a></h3>
                  <span className="period">May 2004</span>
                </div>
                <p>
                  Various methods have been explored for building 3D models of objects. Traditionally geometric modeling
                  techniques were used. But recently image-based modeling and rendering has been gaining a lot of 
                  popularity among researchers. <br/><br/>
                  Acquisition of data is an integral process in image-based modeling. Existing approaches in acquiring 
                  realistic models are often limited by speed, cost, portability, and the objects' size, shape, and surface
                  properties. In this thesis, we propose a novel interactive technique to address these constraints by 
                  tracking a stereo camera. Our algorithm captures a real-world object into voxels, and applies multiple 
                  statistical filtering techniqueson the resulting voxel grid in order to reduce noise that is inherent in 
                  all stereo techniques.<br/><br/>
                  Resulting meshes from various models demonstrate that our algorithm is independent of object's size and 
                  shape,and works well with varying textures and surface materials.
                </p>
              </div>
            </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default About
