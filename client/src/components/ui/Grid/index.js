import React from 'react';
import { ImageThumb } from 'components/ui';
import styles from './grid.css';

/**
 * Grid Type
 * @type {Object}
 */
type GridType = {
  list: Array,
  onLoadMoreClick:Function,
  onItemClick:Function
}

/**
 * <Grid/>
 * @method Grid
 *
 * @return {JSXElement}
 */
const Grid = ({
  list,
  onLoadMoreClick,
  onItemClick
}:GridType):Object => {

  /**
   * Render a list of images.
   *
   * @return {JSXElement}
   */
  const renderList = ():?Object => {
    return list.map((item:Object, index: number):?Object => {
      if (!item.cover) {
        return ;
      }
      return (
        <ImageThumb
          key={index}
          imageId={item.id}
          description={item.description}
          cover={item.cover}
          data={item}
          onItemClick={onItemClick}
        />
      )
    })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {renderList()}
      </div>
      {list.length ?
        <button
          className={styles.loadMore}
          onClick={onLoadMoreClick}
        >Load More</button> : <i className="fa fa-circle-o-notch fa-spin"></i>}
    </div>
  )
}

export default Grid;
