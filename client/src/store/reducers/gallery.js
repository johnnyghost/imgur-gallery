import GALLERY_CONSTANTS from 'store/constants/gallery';
import { createReducer } from 'utils/redux';

/**
 * The initial state.
 * @type {Object}
 */
const initialState = {
  list: [],
  section: 'hot',
  sort: 'viral',
  w: 'day',
  showViral: 'true',
  page: 0,
  selected: {}
};

/**
 * Get the gallery
 *
 * @method getGallery
 *
 * @param  {Object} state The state
 * @param  {Object} data  The data received
 *
 * @return {Object} The current state
 */
const getGallery = (state:Object, data:Object):Object => {
  return {
    ...state,
    list: state.list.concat(data)
  };
}

/**
 * Next page
 *
 * @method nextPage
 *
 * @param  {Object} state The state
 * @return {Object} The current state
 */
const nextPage = (state:Object):Object => {
  return {
    ...state,
    page: state.page + 1
  };
}

/**
 * Change section
 *
 * @method changeSection
 *
 * @param  {Object} state The state
 * @param  {Object} payload The payload
 * @return {Object} The current state
 */
const changeSection = (state:Object, payload:Object):Object => {

  return {
    ...state,
    list: [],
    section: payload.value
  };
}

/**
 * Change sort
 *
 * @method changeSort
 *
 * @param  {Object} state The state
 * @param  {Object} payload The payload
 * @return {Object} The current state
 */
const changeSort = (state:Object, payload:Object):Object => {
  return {
    ...state,
    list: [],
    sort: payload.value
  };
}

/**
 * Change window
 *
 * @method changeWindow
 *
 * @param  {Object} state The state
 * @param  {Object} payload The payload
 * @return {Object} The current state
 */
const changeWindow = (state:Object, payload:Object):Object => {
  return {
    ...state,
    list: [],
    w: payload.value
  };
}

/**
 * Change show viral
 *
 * @method changeShowViral
 *
 * @param  {Object} state The state
 * @param  {Object} payload The payload
 * @return {Object} The current state
 */
const changeShowViral = (state:Object, payload:Object):Object => {
  return {
    ...state,
    list: [],
    showViral: payload.value
  };
}

/**
 * Change show viral
 *
 * @method selectItem
 *
 * @param  {Object} state The state
 * @param  {Object} payload The payload
 * @return {Object} The current state
 */
const selectItem = (state:Object, payload:Object):Object => {
  return {
    ...state,
    list: [],
    selected: payload.data
  };
}

export default createReducer(initialState, {
  [GALLERY_CONSTANTS.GET_GALLERY_SUCCESS]: getGallery,
  [GALLERY_CONSTANTS.NEXT_PAGE]: nextPage,
  [GALLERY_CONSTANTS.CHANGE_SECTION]: changeSection,
  [GALLERY_CONSTANTS.CHANGE_SORT]: changeSort,
  [GALLERY_CONSTANTS.CHANGE_WINDOW]: changeWindow,
  [GALLERY_CONSTANTS.CHANGE_SHOW_VIRAL]: changeShowViral,
  [GALLERY_CONSTANTS.SELECT_ITEM]: selectItem
});
