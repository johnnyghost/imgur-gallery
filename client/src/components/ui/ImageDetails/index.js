import React from 'react';
import styles from './image-details.css';

/**
 * Base url.
 * @type {String}
 */
const BASE_URL = 'http://i.imgur.com/';

type ImageDetailsType = {
  cover:?string
}

/**
 * <ImageDetails/>
 * @return {JSXElement}
 */
const ImageDetails = ({
  cover,
  title,
  description,
  upvote,
  downvote,
  score
}:ImageDetailsType):Object => {

  /**
   * Get cover image.
   *
   * @param {String} cover The cover image
   * @return {String} the url of the image
   */
  const getCover = (cover:?string):string => {
    return `${BASE_URL}/${cover}.gif`;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{title}</div>
      <img
        className={styles.image}
        src={getCover(cover)}
      />
      <div className={styles.description}>{description}</div>
      <div className={styles.status}>
        <div className={styles.like}><i className="fa fa-thumbs-o-up"></i> {upvote}</div>
        <div className={styles.dislike}><i className="fa fa-thumbs-o-up fa-rotate-180"></i> {downvote}</div>
        <div className={styles.score}><i className={' fa fa-star-o'}></i> {score}</div>
      </div>
    </div>
  )
}

export default ImageDetails;
