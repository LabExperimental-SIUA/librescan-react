import React from 'react';
import { withRouter } from 'react-router-dom';

const openProject = (projectId, history) => {
  history.push(`/projects/${projectId}`);
};

const ProjectItem = withRouter((props) => {
  return (
    <li
      onClick={() => openProject(props.project.id, props.history)}
      className="project-item list-group-item-action"
      id={props.project.id}
    >
      <div className="col-md-12">
        <div className="project-header row">
          <h2>{props.project.name}</h2>
        </div>
        <div className="project-description row">
          <p>{props.project.description}</p>
        </div>
        <div className="project-creation-date row">
          <small>{props.project.creation_date}</small>
        </div>
        <div className="project-item-separator"/>
      </div>
    </li>
  );
});


export default (props) => {
  return (
    <ul className="list-unstyled">
      {Object.keys(props.projects).map(
        (projectId) => (
          <ProjectItem project={props.projects[projectId]} key={projectId}/>
        )
      )}
    </ul>
  );
}