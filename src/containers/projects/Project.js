import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchProject,
  updateActiveProject
} from '../../actions';

class Project extends Component {

  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    if (projectId) {
      this.props.updateActiveProject(projectId);
      this.props.fetchProject(projectId);
    }

  }

  render() {
    return (
      <div className="container-fluid"/>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveProject() {
      dispatch(updateActiveProject(...arguments));
    },
    fetchProject() {
      dispatch(fetchProject(...arguments));
    }
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);

