import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { fetchProjects } from "../../actions";
import NewProjectHint from '../../components/projects/newProjectHint';
import ProjectList from '../../components/projects/projectList';

class Project extends Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    if (Object.keys(this.props.content).length <= 0) {
      return (
        <NewProjectHint/>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <h2><Translate value="entities.projects"/></h2>
        </div>
        <ProjectList projects={this.props.content}/>
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
  return {content: projects.content};
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);