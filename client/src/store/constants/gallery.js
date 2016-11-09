import { createConstants } from 'utils/redux';

const galleryConstants = createConstants(
  'FETCH_GALLERY',
  'GET_GALLERY_SUCCESS',
  'NEXT_PAGE',
  'CHANGE_SECTION',
  'CHANGE_SORT',
  'CHANGE_WINDOW',
  'CHANGE_SHOW_VIRAL',
  'SELECT_ITEM',
  'ERROR'
);

export default galleryConstants;
