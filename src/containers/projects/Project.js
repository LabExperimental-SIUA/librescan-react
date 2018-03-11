import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import ResponsiveSidebar from 'react-sidebar';
import { ImageList, ImagesStudio, ProjectPreferences } from "../../components";

import {
  fetchProject,
  updateActiveProject,
  fetchImages,
  createImages,
  updateThumbnailsView,
  updateViewVisibility,
  updateActiveImages
} from '../../actions';

import styles, { sidebarStyles } from './projects.styles';

const mql = window.matchMedia(`(min-width: 800px)`);

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projectId: "",
      mql: mql,
      docked: props.docked,
      open: props.open
    };
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
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

  onSetSidebarOpen = (open) => {
    this.setState({sidebarOpen: open});
  };

  mediaQueryChanged = () => {
    this.setState({sidebarDocked: this.state.mql.matches});
  };

  render() {
    const imageList = <ImageList
        onItemClick={this.props.updateActiveImages}
        images={this.props.images}
        thumbnailProps={this.props.views.thumbnails}
    />;

    return (
      <div className={css(styles.container)}>
        <ResponsiveSidebar sidebar={imageList}
                           styles={{...sidebarStyles}}
                           open={this.state.sidebarOpen}
                           docked={this.state.sidebarDocked}
                           onSetOpen={this.onSetSidebarOpen}>
          <section className={css(styles.imagesStudioContainer)}>
            <ProjectPreferences
              views={this.props.views}
              updateViewVisibility={this.props.updateViewVisibility}
              updateThumbnailsView={this.props.updateThumbnailsView}
            />
            <ImagesStudio
              studioViewProps={this.props.views.studio}
              onClick={this.props.createImages.bind(null, this.state.projectId)}
              images={this.props.images}
            />
          </section>
        </ResponsiveSidebar>
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
    },
    updateActiveImages() {
      dispatch(updateActiveImages(...arguments))
    }
  };
};

const mapStateToProps = ({images, views}) => {
  return {images, views};
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
