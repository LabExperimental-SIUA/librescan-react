import React from 'react';
import { css } from 'aphrodite';
import styles from './imageList.styles';
import { ImageBox } from '../imageBox';

import { buildThumbnailUrl } from '../../../utils/api';

const renderImages = (images, {width, height}) => {
  return images.order.map(imageId => {
    const { id, project_id } = images.content[imageId];
    return (
      <ImageBox source={buildThumbnailUrl(project_id, id, width, height)} key={id}/>
    );
  });
};

export default (props) => {
  return (
    <section className={css(styles.imagesSidebar)}>
      <div className={css(styles.imagesBoxContainer)}>
        {renderImages(props.images, props.thumbnailProps)}
      </div>
    </section>
  );
}