import { takeLatest } from 'redux-saga';
import GALLERY_CONSTANTS from 'store/constants/gallery';
import getGallery from './getGallery';

/**
 * Watch fetch gallery saga.
 */
export function* fetchGalleryList():void {
  yield* takeLatest(GALLERY_CONSTANTS.FETCH_GALLERY, getGallery);
}
