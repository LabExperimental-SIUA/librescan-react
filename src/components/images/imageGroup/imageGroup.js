import React from 'react';
import { ImageBox } from '../imageBox';
import { css } from 'aphrodite';
import { Translate } from 'react-redux-i18n';
import { buildThumbnailUrl } from '../../../utils/api';

import styles from './imageGroup.styles';

const groupOnClick = (updateActiveImages, images) => {
  updateActiveImages(images.map(image => image.id)); // Dispatch update active images
};

const renderImages = (images, {width, height}) => {
  return images.map(image => {
    return (
      <ImageBox source={buildThumbnailUrl(image.project_id, image.id, width, height)} key={image.id} spinner/>
    )
  })
};

export default (props) => {
  const containerClassName = css(styles.container, props.active && styles.active);
  return (
    <div className={containerClassName} onClick={() => groupOnClick(props.onClick, props.images)}>
      <div className={css(styles.groupLabel)}>
        <h4> <Translate value="components.images.imageGroup.label" index={props.groupIndex}/></h4>
      </div>
      <div className={css(styles.imagesBoxContainer)}>
        {renderImages(props.images, props.thumbnailProps)}
      </div>
      <div className={css(styles.separator)}/>
    </div>
  );
}