import profileImage from '../../assets/profile/profile.JPG';
import { useState, useEffect } from "react";
import Carousel from "framer-motion-carousel";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function About() {
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState(
      "Hello. Thank you for visiting my website."
    )
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 40)
    }
  }, [index]);

  const [projects] = useState([
    {
      name: 'Meet-and-Treats',
      description: 'MERN/Node/React/MongoDB/Graphql',
      link: 'https://meet-n-treats.herokuapp.com/',
      repo: 'https://github.com/nbtrieu/meet-n-treats'
    },
    {
      name: 'pokemon-battle-simulator',
      description: 'JavaScript/HTML/FoundationCSS',
      link: 'https://wangbrian26.github.io/Pokemon-Fusion-Battle-Simulator/',
      repo: 'https://github.com/wangbrian26/Pokemon-Fusion-Battle-Simulator'
    },
    {
      name: 'SEND-MOODS',
      description: 'Node/Handlebars/Sequelize',
      link: 'https://shrouded-eyrie-81227.herokuapp.com/',
      repo: 'https://github.com/BryantTrinh/Mood-App-Send-Moods'
    },
    {
      name: 'weather-dashboard',
      description: 'JavaScript/HTML/CSS',
      link: 'https://nbtrieu.github.io/weather-dashboard/',
      repo: 'https://github.com/nbtrieu/weather-dashboard'
    },
    {
      name: 'tech-blog',
      description: 'Express/Handlebars/Sequelize',
      link: 'https://shrouded-falls-58011.herokuapp.com/',
      repo: 'https://github.com/nbtrieu/tech-blog'
    },
    {
      name: 'note-taker',
      description: 'Express/Handlebars/Sequelize',
      link: 'https://nbtrieu-note-taker.herokuapp.com/',
      repo: 'https://github.com/nbtrieu/note-taker'
    },
  ]);
  
  return (
    <div className='flex-row ml-5 mt-5'>
      <h2>{text}</h2>
      <div className='flex-row mx-auto my-5 justify-content-center align-items-center'>
        <div className='col-lg-2'>
          <img src={profileImage} alt='my profile' width='200'></img>
        </div>
        <div className='col-lg-10'>
          <p className='about-paragraph'>
            Science educator turned web developer passionate about making helpful clean apps with positive user experience. 
            I am a coding bootcamp graduate skilled in JavaScript and MERN stack development with experience creating 
            readable source code in both Client-Server architecture and MVC design pattern. I am looking for a role in
            front-end and/or back-end web development.
          </p>
          <div className='flex-row'>
            <a href="https://www.linkedin.com/in/nicole-nghi-trieu/" target="_blank" rel="noopener noreferrer"><button className='btn btn-linkedin'>LinkedIn</button></a>
            <a href="https://github.com/nbtrieu" target="_blank" rel="noopener noreferrer"><button className='btn btn-github'>GitHub</button></a>
          </div>
        </div>
      </div>

      <div className='carousel-container'>
        <Carousel>
          {projects.map((project) => {
            return <div>
              <div className="project-header-about">
                <h3 className="project-text-about">
                  <a href={project.link}>{removeHyphensAndCapitalize(project.name)}</a>{' '}
                  <a href={project.repo}>
                    <i className="fab fa-github"></i>
                  </a>
                </h3>
                <p className="project-description">{project.description}</p>
              </div>
              <img src={require(`../../assets/projects/${project.name}.png`)}></img>
            </div>
          })}
        </Carousel>
      </div>
      
      {/* <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div> */}
    </div>
  );
};

export default About;