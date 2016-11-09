import React from 'react';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';
import styles from './image.css';

/**
 * Base url.
 * @type {String}
 */
const BASE_URL = 'http://i.imgur.com/';

/**
 * Height offset
 * @type {Number}
 */
const HEIGHT_OFFSET = 300;

/**
 * Throttle
 * @type {Number}
 */
const THROTTLE = 200;

/**
 * Image Type.
 * @type {Object}
 */
type ImageType = {
  imageSrc: ?string,
  description: ?string
}

/**
 * <Image />
 * Image component.
 *
 * @return {JSXElement}
 */
const Image = ({
  imageId,
  cover,
  description,
  data,
  onItemClick
}: ImageType):Object => {

  /**
   * Get cover image.
   *
   * @param {String} cover The cover image
   * @return {String} the url of the image
   */
  const getCover = (cover:string):string => {
    return `${BASE_URL}/${cover}.gif`;
  }

  /**
   * [itemClickHandler description]
   * @method itemClickHandler
   */
  const itemClickHandler = () => {
    onItemClick(data);
  }

  return (
    <div
      className={styles.wrapper}
      onClick={itemClickHandler}
    >
      <Link to={`/image-details/${imageId}`}>
        <figure>
          <LazyLoad
            throttle={THROTTLE}
            height={HEIGHT_OFFSET}
          >
            <img src={getCover(cover)} alt={styles.description}/>
          </LazyLoad>
          <figcaption className={styles.description}>{description}</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default Image;
