import { combineReducers } from 'redux';

// reducers
import galleryReducer from './gallery';

/**
 * Combine all reducers.
 */
const appReducer = combineReducers({
  gallery: galleryReducer
});

/**
 * Delegates to the appReducer.
 *
 * @method
 * @private
 *
 * @param  {Object} state  The state object
 * @param  {Object} action The action
 * @return {Object}
 */
const rootReducer = (state:?Object, action:Object):Object => appReducer(state, action);

export default rootReducer;
