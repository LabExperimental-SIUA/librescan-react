import React from 'react';
import { css } from 'aphrodite';
import styles from './imageBox.styles';
import Spinner from 'react-icons/lib/fa/spinner';
import { Translate } from 'react-redux-i18n';
import { HTML_NON_BREAKING_SPACE_ENTITY } from "../../../utils/constants";

export default (props) => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.imageContainer)}>
        <img src={props.source} alt="project-img"/>
        {props.spinner &&
        <div className={css(styles.loadingSpinner)}>
          <div>
            <Spinner className="fa fa-spinner faa-spin animated"/>
            {HTML_NON_BREAKING_SPACE_ENTITY}
            <Translate value="components.images.imageBox.processing"/>
          </div>
        </div>
        }
      </div>
    </div>
  )
}