import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { projects } from "../ProjectList";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const projectIndex = wrap(0, projects.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const projectCard = () => (
    <div>
      <div className="project-header-about">
        <h3 className="project-text-about">
          <a href={projects[projectIndex].link}>{removeHyphensAndCapitalize(projects[projectIndex].name)}</a>{' '}
          <a href={projects[projectIndex].repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p className="project-description">{projects[projectIndex].description}</p>
      </div>
      <img src={require(`../../assets/projects/${projects[projectIndex].name}.png`)}></img>
    </div>
  )

  return (
    <>
      <div className="">
        {/* <div className="project-header-about">
          <h3 className="project-text-about">
            <a href={projects[projectIndex].link}>{removeHyphensAndCapitalize(projects[projectIndex].name)}</a>{' '}
            <a href={projects[projectIndex].repo}>
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p className="project-description">{projects[projectIndex].description}</p>
        </div> */}
        
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={projectCard}
            className="project-bg"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            // exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </div>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
}