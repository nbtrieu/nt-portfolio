import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Project({ project }) {
  const { name, skills, link, repo, description } = project;
  // console.log('project: ', project);
  // console.log('name: ', project.name);
  // console.log(`../../assets/projects/${project.name}.png`);

  return (
    <div className="project-card mt-5" key={name}>
      <div className="project-header-about">
        <h3 className="project-text-portfolio">
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <div className="flex-row">
          <p className="project-skills">{skills}</p>
        </div>
      </div>
      <div className="project-img-portfolio">
        <img
          src={require(`../../assets/projects/${project.name}.png`)}
          alt={removeHyphensAndCapitalize(name)}
        ></img>
      </div>
      <div className="flex-row px-3">
        <p className="project-description-portfolio">{description}</p>
      </div>
    </div>
  );
};

export default Project;
