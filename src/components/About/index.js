import profileImage from '../../assets/profile/profile.JPG';
import { useState, useEffect } from "react";
import Carousel from "framer-motion-carousel";
import { removeHyphensAndCapitalize } from '../../utils/helpers';

// import MyCarousel from '../Carousel';

// let slideIndex = 1;
// showSlides(slideIndex);
// // wtf();
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   // console.log(document);
//   // console.log(thing);
//   // console.log('>>>slides in showSlides: ', slides);
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     // console.log('>>>>', slides[i]);
//     // console.log('>>>>>>>>>', slides[i].style.display);
//     // console.log('>>>>>>>>>>>>>>>', typeof(slides[i].style.display));

//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// function wtf() {
//   let thing = document.getElementsByClassName('carousel-container');
//   console.log('thing: ', thing);
//   let slides = document.getElementsByClassName('mySlides');
//   console.log('slides: ', slides);
// }

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
      skills: 'MERN / Node / React / MongoDB / Graphql',
      link: 'https://meet-n-treats.herokuapp.com/',
      repo: 'https://github.com/nbtrieu/meet-n-treats'
    },
    {
      name: 'pokemon-battle-simulator',
      skills: 'JavaScript / HTML / FoundationCSS',
      link: 'https://wangbrian26.github.io/Pokemon-Fusion-Battle-Simulator/',
      repo: 'https://github.com/wangbrian26/Pokemon-Fusion-Battle-Simulator'
    },
    {
      name: 'SEND-MOODS',
      skills: 'Node / Handlebars / Sequelize',
      link: 'https://shrouded-eyrie-81227.herokuapp.com/',
      repo: 'https://github.com/BryantTrinh/Mood-App-Send-Moods'
    },
    {
      name: 'weather-dashboard',
      skills: 'JavaScript / HTML / CSS',
      link: 'https://nbtrieu.github.io/weather-dashboard/',
      repo: 'https://github.com/nbtrieu/weather-dashboard'
    },
    {
      name: 'tech-blog',
      skills: 'Express / Handlebars / Sequelize',
      link: 'https://shrouded-falls-58011.herokuapp.com/',
      repo: 'https://github.com/nbtrieu/tech-blog'
    },
    {
      name: 'note-taker',
      skills: 'Express / Handlebars / Sequelize',
      link: 'https://nbtrieu-note-taker.herokuapp.com/',
      repo: 'https://github.com/nbtrieu/note-taker'
    },
  ]);
  
  return (
    <div className='flex-row ml-5 mt-5'>
      <h2>{text}</h2>
      <div className='flex-row mx-auto my-5 justify-content-center align-items-center'>
        <div className='col-lg-3'>
          <img src={profileImage} alt='my profile' width='200' className='mt-3'></img>
        </div>
        <div className='col-lg-9'>
          <p className='about-paragraph mt-3'>
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
        <Carousel 
          autoPlay={true}
        >
          {projects.map((project, i) => {
            return <div className='project-card'>
              <div className="project-header-about flex-row">
                <div>
                  <h3 className="project-text-portfolio">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {removeHyphensAndCapitalize(project.name)}
                    </a>
                  </h3>
                </div>
                <div>
                  <div className="mx-3">
                    <h3>
                      <a href={project.repo} mx-2>
                        <i className="fab fa-github"></i>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className='project-skills-about flex-row '>
                <p className="project-skills">{project.skills}</p>
              </div>
              <div className="project-img-about">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img 
                  src={require(`../../assets/projects/${project.name}.png`)}
                  draggable="false"
                  key={i}
                  alt=""
                ></img>
                </a>
                
              </div>
              
            </div>
          })}
        </Carousel>
      </div>
      {/* <MyCarousel /> */}
      {/* <div className='carousel-container mt-5'>
        {projects.map((project, i) => {
          return <div className="mySlides" name="thing">
            <div className="project-header-about">
              <h3 className="project-text-about">
                <a href={project.link}>{removeHyphensAndCapitalize(project.name)}</a>{' '}
                <a href={project.repo}>
                  <i className="fab fa-github"></i>
                </a>
              </h3>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-img-about">
              <img 
                src={require(`../../assets/projects/${project.name}.png`)}
                draggable="false"
                key={i}
              ></img>
            </div>
            <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={plusSlides(1)}>&#10095;</a>
          </div>
        })}
        <div className='text-center dots-container'>
          <span className="dot" onClick={currentSlide(1)}></span>
          <span className="dot" onClick={currentSlide(2)}></span>
          <span className="dot" onClick={currentSlide(3)}></span>
          <span className="dot" onClick={currentSlide(4)}></span>
          <span className="dot" onClick={currentSlide(5)}></span>
          <span className="dot" onClick={currentSlide(6)}></span>
        </div>
      </div> */}
    </div>
  );
};

export default About;