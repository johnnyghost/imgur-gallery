import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import GALLERY_CONSTANTS from 'store/constants/gallery';
import getGallery from './getGallery';

/**
 * Fetch the gallery.
 */
function *getNextPage():void {
  try {
    yield call(getGallery);
  } catch (error) {
    console.log(error);
    yield put({ type: GALLERY_CONSTANTS.ERROR });
  }
}

/**
 * Watch fetch gallery saga.
 */
export function* nextPage():void {
  yield* takeLatest(GALLERY_CONSTANTS.NEXT_PAGE, getNextPage);
}
