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
                <p>I'm currently working
                  on <a href="https://verily.com/solutions/numetric/retinal-service">Verily Retinal Service</a>
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
                  I designed and built real-time stateful data processing systems that handled
                  hundreds of terabytes of data daily.
                </p>
              </div>
              {<hr className="experience-separator" />}
              <div className="experience-item">
                <div className="experience-header">
                  <h3>Bank of America</h3>
                  <span className="period">2005 - 2010</span>
                </div>
                <p>Software Developer at Bank of America</p>
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
                  Various methods have been explored for building 3D models of objects. Traditionally geometric modeling techniques were used. But recently image-based modeling and rendering has been gaining a lot of popularity among researchers. <br/><br/>

                  Acquisition of data is an integral process in image-based modeling. Existing approaches in acquiring realistic models are often limited by speed, cost, portability, and the objects' size, shape, and surface properties. In this thesis, we propose a novel interactive technique to address these constraints by tracking a stereo camera. Our algorithm captures a real-world object into voxels, and applies multiple statistical filtering techniqueson the resulting voxel grid in order to reduce noise that is inherent in all stereo techniques.<br/><br/>

                  Resulting meshes from various models demonstrate that our algorithm is independent of object's size and shape,and works well with varying textures and surface materials.
                </p>
              </div>
            </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default About
