function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p className="resume">Download my <a href="https://docs.google.com/document/d/1T5XzGWGIqNqxX_mQ1Tby3NTYNrvgvExAuRNAo-U8Uzg/edit?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a></p>
        <div className="flex-row">
          <div className="col-sm-4 skills-title">
            <h3>Front-end Proficiencies</h3>
          </div>
          <div className="col-sm-4">
            <ul className="skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          
        </div>
        <div className="flex-row">
          <div className="col-sm-4 skills-title">
            <h3>Back-end Proficiencies</h3>
          </div>
          <div className="col-sm-4">
            <ul className="skills">
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
          
        </div>
        
      </div>
    </section>
  )
};

export default Resume;