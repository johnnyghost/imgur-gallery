import GALLERY_CONSTANTS from 'store/constants/gallery';
import { ActionType } from 'store/types/ActionType';

/**
 * Dispatch an action to get the gallery.
 *
 * @method fetchGallery
 * @public
 *
 * @param {String} section The section type hot | top | user - defaults to hot
 * @param {String} sort The sort viral | top | time | rising (only available with user section) - defaults to viral
 * @param {String} w The window Change the date range of the request if the section is "top", day | week | month | year | all, defaults to day
 * @param {Number} page The page number
 * @param {Boolean} showViral true | false - Show or hide viral images from the 'user' section. Defaults to true
 *
 * @return {Object}
 */
export const fetchGallery = (section:?string, sort:?string, w:?string, page:?number, showViral:?bool):ActionType => (
  {
    type: GALLERY_CONSTANTS.FETCH_GALLERY,
    payload: {
      section,
      sort,
      w,
      page,
      showViral
    }
  }
)

/**
 * Dispatch an action to get the response of all images
 *
 * @method getGallerySuccess
 * @public
 *
 * @param {Array} payload The array of images
 *
 * @return {Object}
 */
export const getGallerySuccess = (payload:Array<Object>):ActionType => (
  {
    type: GALLERY_CONSTANTS.GET_GALLERY_SUCCESS,
    payload
  }
)

/**
 * Dispatch an action to get the next page
 *
 * @method nextPage
 * @public
 *
 *
 * @return {Object}
 */
export const nextPage = ():ActionType => (
  {
    type: GALLERY_CONSTANTS.NEXT_PAGE
  }
)

/**
 * Dispatch an action to change section
 *
 * @method changeSection
 * @public
 *
 * @param {String} value The value of the section
 * @return {Object}
 */
export const changeSection = (value:string):ActionType => (
  {
    type: GALLERY_CONSTANTS.CHANGE_SECTION,
    payload: {
      value
    }
  }
)

/**
 * Dispatch an action to change sort
 *
 * @method changeSort
 * @public
 *
 * @param {String} value The value of the sort
 * @return {Object}
 */
export const changeSort = (value:string):ActionType => (
  {
    type: GALLERY_CONSTANTS.CHANGE_SORT,
    payload: {
      value
    }
  }
)

/**
 * Dispatch an action to change window
 *
 * @method changeWindow
 * @public
 *
 * @param {String} value The value of the window
 * @return {Object}
 */
export const changeWindow = (value:string):ActionType => (
  {
    type: GALLERY_CONSTANTS.CHANGE_WINDOW,
    payload: {
      value
    }
  }
)

/**
 * Dispatch an action to change show viral
 *
 * @method changeWchangeShowViralindow
 * @public
 *
 * @param {Boolean} value The value of the show viral
 * @return {Object}
 */
export const changeShowViral = (value:string):ActionType => (
  {
    type: GALLERY_CONSTANTS.CHANGE_SHOW_VIRAL,
    payload: {
      value
    }
  }
)

/**
 * Dispatch an action to select item
 *
 * @method changeWchanselectItemgeShowViralindow
 * @public
 *
 * @param {Object} data The value of the show viral
 * @return {Object}
 */
export const selectItem = (data:Object):ActionType => (
  {
    type: GALLERY_CONSTANTS.SELECT_ITEM,
    payload: {
      data
    }
  }
)
