const BASE_URL = 'https://medialab-server.herokuapp.com'; //'http://localhost:3001';
const PATH = 'gallery';

/**
 * Imgur service.
 * Abstraction of the imgur API.
 */
const apiService = {

  /**
   * Returns a list of images.
   *
   * @param {String} section The section type hot | top | user - defaults to hot
   * @param {String} sort The sort viral | top | time | rising (only available with user section) - defaults to viral
   * @param {String} w The window Change the date range of the request if the section is "top", day | week | month | year | all, defaults to day
   * @param {Number} page The page number
   * @param {Boolean} showViral true | false - Show or hide viral images from the 'user' section. Defaults to true
   *
   * @return {Promise<Array>} An array of food
   */
  getGallery (section:string = 'hot', sort:string = 'viral', w:string = 'day', page:number = 0, showViral:string = 'true'):Promise {
    return fetch(`${BASE_URL}/${PATH}/${section}/${sort}/${w}/${page}?showViral=${showViral}`)
      .then(successResponseHandler)
      .then((data:Object):Object => data)
  }
}

/**
 * Success response handler.
 *
 * @param {Object} response The response Object
 * @return {Object}
 */
const successResponseHandler = ((response:Object):Object => response.json());

export default apiService;
