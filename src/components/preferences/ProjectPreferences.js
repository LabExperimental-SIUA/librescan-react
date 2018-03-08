import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';
import PreferencesForm from './PreferencesForm';
import { css } from 'aphrodite';
import styles from './ProjectPreferences.styles';

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
            <Translate value="preferences.showPreferences"/>
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