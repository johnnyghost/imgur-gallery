import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { galleryActionCreators }  from 'store/actions/';
import { Grid, Header } from 'components/ui';
import { loadState } from 'store/utils';

/**
 * <GalleryContainer />
 *
 * @return {JSXElement}
 */
class GalleryContainer extends Component {

  /**
   * Component is rendered.
   */
  componentDidMount() {
    const persistedState = loadState();
    if (persistedState && persistedState.gallery.length) {
      this.props.galleryActions.getGallerySuccess(persistedState.gallery.list);
    } else {
      this.props.galleryActions.fetchGallery();
    }
  }

  /**
   * Get the gallery list.
   *
   * @method galleryList
   * @return {Array} The gallery list array
   */
  get galleryList():Array {
    return this.props.galleryList;
  }

  /**
   * Load more images.
   */
  loadMoreHandler() {
    this.props.galleryActions.nextPage();
  }

  /**
   * Select the item.
   * @param {Object} data The selected data
   */
  itemClickHandler(data:Object) {
    this.props.galleryActions.selectItem(data);
  }

  /**
   * Change section handler.
   *
   * @param {Object} event The event object
   */
  changeSectionHandler(event:Object) {
    const value = event.target.value;
    this.props.galleryActions.changeSection(value);
  }

  /**
   * Change sort handler.
   *
   * @param {Object} event The event object
   */
  changeSortHandler(event:Object) {
    const value = event.target.value;
    this.props.galleryActions.changeSort(value);
  }

  /**
   * Change window handler.
   *
   * @param {Object} event The event object
   */
  changeWindowHandler(event:Object) {
    const value = event.target.value;
    this.props.galleryActions.changeWindow(value);
  }

  /**
   * Change show viral handler.
   *
   * @param {Object} event The event object
   */
  changeShowViralHandler(event:Object) {
    const value = event.target.value;
    this.props.galleryActions.changeShowViral(value);
  }

  /**
   * Renders <GalleryContainer />
   *
   * @return {JSXElement}
   */
  render():Object {
    return (
      <div>
        <Header
          section={this.props.section}
          sort={this.props.sort}
          window={this.props.window}
          showViral={this.props.showViral}
          onChangeSection={::this.changeSectionHandler}
          onChangeSort={::this.changeSortHandler}
          onChangeWindow={::this.changeWindowHandler}
          onChangeShowViral={::this.changeShowViralHandler}
        />
        <Grid
          list={this.galleryList}
          onItemClick={::this.itemClickHandler}
          onLoadMoreClick={::this.loadMoreHandler}
        />
      </div>
    );
  }
}

/**
 * Will subscribe to Redux store updates
 *
 * @method
 *
 * @param  {Object} state Store’s state
 * @return {Object} and returns an object to be passed as props
 */
const mapStateToProps = (state:Object):Object => {

  return {
    galleryList: state.gallery.list,
    page: state.gallery.page,
    sort: state.gallery.sort,
    section: state.gallery.section,
    window: state.gallery.w,
    showViral: state.gallery.showViral
  }
};

/**
 * Bound to the store.
 * Will be merged into the component’s props.
 *
 * @method
 *
 * @param {Function} dispatch Dispatch function
 * @return {Object}
 */
const mapDispatchToProps = (dispatch:Function):Object => ({
  galleryActions : bindActionCreators(galleryActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer);
