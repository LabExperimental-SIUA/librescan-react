import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from "../../actions";
import NewProjectHint from '../../components/projects/newProjectHint';
import ProjectList from '../../components/projects/projectList';


class Project extends Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    if (Object.keys(this.props.projects).length <= 0) {
      return (
        <NewProjectHint/>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <h2>Projects</h2>
        </div>
        <ProjectList projects={this.props.projects}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects() {
      dispatch(fetchProjects(...arguments))
    }
  };
};


const mapStateToProps = ({projects}) => {
  return {projects: projects.projects};
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);