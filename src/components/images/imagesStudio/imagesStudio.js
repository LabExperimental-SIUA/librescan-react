import React from 'react';
import { Translate } from 'react-redux-i18n';
import { css } from 'aphrodite';
import CameraIcon from 'react-icons/lib/io/camera';
import RefreshIcon from 'react-icons/lib/io/refresh';
import TrashIcon from 'react-icons/lib/io/trash-a';
import { ImageBox } from '../../../components'
import { buildThumbnailUrl } from "../../../utils/api";
import { HTML_NON_BREAKING_SPACE_ENTITY } from "../../../utils/constants";
import styles from './imageStudio.styles';


const renderImages = (images, {width, height}) => {
  return images.active.map(imageId => {
    const image = images.content[imageId];
    return (
      <div className={css(styles.activeImageBox)}>
        <div className={css(styles.imageBoxDecoration)}>
          <ImageBox source={buildThumbnailUrl(image.project_id, image.id, width, height)}/>
        </div>
      </div>

    );
  })
};

export default (props) => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.label)}>
        <h2>
          <Translate value="components.images.imagesStudio.label"/>
        </h2>
      </div>
      <div className={css(styles.activeImagesContainer)}>
        {renderImages(props.images, props.studioViewProps)}

      </div>
      <div className={css(styles.actionButtonsContainer)}>
        <button className="btn btn-lg btn-dark" onClick={() => props.onClick()}>
          <CameraIcon/>
          {HTML_NON_BREAKING_SPACE_ENTITY}
          <Translate value="components.images.imagesStudio.shoot"/>
        </button>
        <div className={css(styles.editButtonsContainer)}>
          <button className={css(styles.editionButton, styles.deleteButton) + " btn btn-lg btn-dark"}
                  onClick={() => console.log("delete")}>
            <TrashIcon/>
            {HTML_NON_BREAKING_SPACE_ENTITY}
            <Translate value="components.images.imagesStudio.delete"/>
          </button>
          <button className={css(styles.editionButton, styles.retakeButton) + " btn btn-lg btn-dark"}
                  onClick={() => console.log("retake")}>
            <RefreshIcon/>
            {HTML_NON_BREAKING_SPACE_ENTITY}
            <Translate value="components.images.imagesStudio.retake"/>
          </button>
        </div>
      </div>
    </div>
  );
};