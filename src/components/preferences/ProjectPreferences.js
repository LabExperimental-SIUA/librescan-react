import React, { Component } from 'react';
import PreferencesForm from './PreferencesForm';
import { css } from 'aphrodite';
import styles from './ProjectPreferences.styles';
import CogIcon from 'react-icons/lib/fa/cog'

class ProjectPreferences extends Component {
  onButtonShowClick = () => {
      this.props.updateViewVisibility('preferences', true);
  };

  renderPreferences = () => {
    if (this.props.views.preferences.show) {
      return (
      <PreferencesForm
        thumbnails={this.props.views.thumbnails}
        updateThumbnailsView={this.props.updateThumbnailsView}
        updateViewVisibility={this.props.updateViewVisibility}
      />
      );
    } else {
      return (
        <div>
          <button className='btn btn-primary' onClick={this.onButtonShowClick}>
            <CogIcon/>
          </button>
        </div>
      );
    }
  };

  render() {
    return (
      <div className={css(styles.container)}>
        {this.renderPreferences()}
      </div>
    )
  }
}

export default ProjectPreferences;