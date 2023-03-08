import React from 'react';
// import { projects } from '../ProjectList';
// import { removeHyphensAndCapitalize } from '../../utils/helpers';

export default function MyCarousel() {
  return (
    <div className='carousel-container '>
      {/* {projects.map((project, i) => {
        return <div className='mySlides fade'>
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
              style="width:100%"
            ></img>
          </div> */}
          {/* Next and previous buttons */}
          {/* <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
      })} */}
      {/* The dots/circles */}
      {/* <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div> */}
    </div>
  )
}
