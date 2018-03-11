import React from 'react';
import { css } from 'aphrodite';
import styles from './imageList.styles';
import { ImageGroup } from '../imageGroup';
import { Translate } from 'react-redux-i18n';


const imagesToGrops = (images, layout=2) => {
  return images.order.reduce((result, imageId, index) => {
    const groupIndex = parseInt(index / layout);
    if (result.length > groupIndex) {
      result[groupIndex].push(images.content[imageId]);
    } else {
      result.push([images.content[imageId]])
    }
    return result;
  }, []);
};


const renderGroups = (groups, active, thumbnailProps, onClick) => {
return groups.map((imageGroup, index) => {
  const key = imageGroup.reduce((key, image) => (key+image.id), "");
    return (
      <ImageGroup
        key={key}
        active={key===active}
        onClick={onClick}
        images={imageGroup}
        thumbnailProps={thumbnailProps}
        groupIndex={index + 1}
      />
    );
  });
};

export default (props) => {
  const groups = imagesToGrops(props.images, props.layout);
  const active = props.images.active.reduce((key, imageId) => (key+imageId), "");
  return (
    <div className={css(styles.imagesSidebar)}>
      <div>
        <h3>
        <Translate value="components.images.imageList.label"/>
        </h3>
      </div>
      <div className={css(styles.imageGroupsContainer)}>
        {renderGroups(groups, active, props.thumbnailProps, props.onItemClick)}
      </div>
    </div>
  );
}