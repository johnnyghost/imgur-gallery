import React from 'react';
import styles from './header.css';

/**
 * Header type.
 * @type {Object}
 */
type HeaderType = {
  section: string,
  sort: string,
  window: string,
  showViral: string,
  onChangeSection: Function,
  onChangeSort: Function,
  onChangeWindow: Function,
  onChangeShowViral: Function
};

const Header = ({
  section,
  sort,
  window,
  showViral,
  onChangeSection,
  onChangeSort,
  onChangeWindow,
  onChangeShowViral
}:HeaderType):Object => {

  /**
   * [renderSectionOptions description]
   * @return {Object}
   */
  const renderSectionOptions = ():Object => {
    return (
      <label>
        section
        <select
          name="section"
          onChange={onChangeSection}
          value={section}
        >
          <option value="hot">Hot</option>
          <option value="top">Top</option>
          <option value="user">User</option>
        </select>
      </label>
    )
  }

  /**
   * [renderSortOptions description]
   * @return {Object}
   */
  const renderSortOptions = ():Object => {
    return (
      <label>
        sort
        <select
          name="sort"
          onChange={onChangeSort}
          value={sort}
        >
          <option value="viral">Viral</option>
          <option value="top">Top</option>
          <option value="time">Time</option>
          <option value="rising">Rising</option>
        </select>
      </label>
    )
  }

  /**
   * [renderSortOptions description]
   * @return {Object}
   */
  const renderWindowOptions = ():Object => {
    return (
      <label>
        window
        <select
          name="window"
          onChange={onChangeWindow}
          value={window}
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
          <option value="all">All</option>
        </select>
      </label>
    )
  }

  /**
   * [renderSortOptions description]
   * @return {Object}
   */
  const renderShowViral = ():Object => {
    return (
      <label>
        show viral
        <select
          name="showViral"
          onChange={onChangeShowViral}
          value={showViral}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </label>
    )
  }

  return (
    <div className={styles.wrapper}>
      {renderSectionOptions()}
      {renderSortOptions()}
      {section === 'top' ? renderWindowOptions() : null}
      {renderShowViral()}
    </div>
  )
}

export default Header;
