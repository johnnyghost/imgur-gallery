/**
 * Load the state from the localStorage
 * @return {Object}
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('redux-state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err){
    return undefined;
  }
}

/**
 * Save the state on the localStorage
 *
 * @param {Object} state The state
 * @return {Object}
 */
export const saveState = (state:Object) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('redux-state', serializedState)
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
