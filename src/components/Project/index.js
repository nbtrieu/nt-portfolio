import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Project({ project }) {
  const { name, description, link, repo } = project;
  // console.log('project: ', project);
  // console.log('name: ', project.name);
  // console.log(`../../assets/projects/${project.name}.png`);

  return (
    <div className="project" key={name}>
      <img
        src={require(`../../assets/projects/${project.name}.png`)}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      ></img>
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
