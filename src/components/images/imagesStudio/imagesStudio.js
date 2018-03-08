import React from 'react';
import { Translate } from 'react-redux-i18n';
import { css } from 'aphrodite';

import styles from './imageStudio.styles';

export default (props) => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.activeImagesContainer)}>
        <div className={css(styles.activeImageBox)}>
          Image Placeholder
        </div>

        <div className={css(styles.activeImageBox)}>
          Image Placeholder
        </div>

      </div>

      <button className="btn btn-lg btn-primary" onClick={() => props.onClick()}>
        <Translate value="projects.createImage"/>
      </button>
    </div>
  );
};