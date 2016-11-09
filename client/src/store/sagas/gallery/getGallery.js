import { put, call, select } from 'redux-saga/effects';
import { galleryService } from 'core/services'
import { getGallerySelector } from 'store/selectors';
import GALLERY_CONSTANTS from 'store/constants/gallery';

/**
 * Get the gallery
 */
export default function *getGallery():void {
  try {
    const {
      section,
      sort,
      w,
      page,
      showViral
    } = yield select(getGallerySelector);

    const list = yield call(galleryService.getGallery, section, sort, w, page, showViral);
    yield put({ type: GALLERY_CONSTANTS.GET_GALLERY_SUCCESS, payload: list.data });

  } catch (error) {
    console.log(error);
    yield put({ type: GALLERY_CONSTANTS.ERROR });
  }
}
