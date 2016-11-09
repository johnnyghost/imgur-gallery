import { fork } from 'redux-saga/effects';
import { fetchGalleryList } from './watchGetGallery';
import { nextPage } from './watchNextPage';
import { changeSection } from './watchSectionChange';
import { changeSort } from './watchSortChange';
import { changeWindow } from './watchWindowChange';
import { changeShowViral } from './watchShowViralChange';

/**
 * Github saga root.
 */
export function* gallery():void {
  yield fork(fetchGalleryList);
  yield fork(nextPage);
  yield fork(changeSection);
  yield fork(changeSort);
  yield fork(changeWindow);
  yield fork(changeShowViral);
}
