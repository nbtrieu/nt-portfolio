import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Project({ project }) {
  const { name, skills, link, repo, description } = project;
  // console.log('project: ', project);
  // console.log('name: ', project.name);
  // console.log(`../../assets/projects/${project.name}.png`);

  return (
    <div className="project-card mt-5" key={name}>
      <div className="project-header-portfolio flex-row">
        <div>
          <h3 className="project-text-portfolio">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {removeHyphensAndCapitalize(name)}
            </a>
          </h3>
        </div>
        <div>
          <div className="mx-3">
            <h3>
              <a href={repo} mx-2>
                <i className="fab fa-github"></i>
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex-row project-skills-portfolio">
        <p className="project-skills">{skills}</p>
      </div>
      <div className="project-img-portfolio">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
          src={require(`../../assets/projects/${project.name}.png`)}
          alt={removeHyphensAndCapitalize(name)}
        ></img>
        </a>
        
      </div>
      <div className="flex-row px-4">
        <p className="project-description-portfolio">{description}</p>
      </div>
    </div>
  );
};

export default Project;
