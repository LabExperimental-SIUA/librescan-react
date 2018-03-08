import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import { ImageList, ImagesStudio, ProjectPreferences } from "../../components";

import {
  fetchProject,
  updateActiveProject,
  fetchImages,
  createImages,
  updateThumbnailsView,
  updateViewVisibility
} from '../../actions';

import styles from './projects.styles';


class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {projectId: ""};
  }

  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    if (projectId) {
      this.setState({projectId});
      this.props.updateActiveProject(projectId);
      this.props.fetchProject(projectId);
      this.props.fetchImages(projectId);
    }
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <ImageList images={this.props.images} thumbnailProps={this.props.views.thumbnails}/>
        <section className={css(styles.imagesStudioContainer)}>
          <ProjectPreferences
            views={this.props.views}
            updateViewVisibility={this.props.updateViewVisibility}
            updateThumbnailsView={this.props.updateThumbnailsView}
          />
          <ImagesStudio onClick={this.props.createImages.bind(null, this.state.projectId)}/>
        </section>
      </div>
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
    },
    fetchImages() {
      dispatch(fetchImages(...arguments));
    },
    createImages() {
      dispatch(createImages(...arguments))
    },
    updateViewVisibility() {
      dispatch(updateViewVisibility(...arguments))
    },
    updateThumbnailsView() {
      dispatch(updateThumbnailsView(...arguments))
    }
  };
};

const mapStateToProps = ({images, views}) => {
  return {images, views};
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);

