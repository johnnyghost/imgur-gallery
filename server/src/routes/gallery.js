import axios from 'axios';

const BASE_URL = 'https://api.imgur.com/3';
const PATH = 'gallery';

const HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Client-ID 12f546c383eeb36'
}

/**
 * Helper method to make a request
 *
 * @method makeRequest
 *
 * @param  {String} url The url string
 * @param  {Object} res The response object
 * @return {Object}
 */
const makeRequest = (url, res) => {
  return axios
    .get(url, { headers: HEADERS })
    .then(data => res.json(data.data))
    .catch((e) => res.json({ err: { message: e.response.data.data.error }}))
}

/**
 * Create the gallery routes
 * @public
 * @param {Object} app App instance
 */
export const createGalleryRoutes = (app) => {

  /**
   * Get the gallery by page.
   *
   * @see https://api.imgur.com/endpoints/gallery#gallery
   */
  app.get('/gallery/:section?/:sort?/:window?/:page?', (req, res) => {
    const section = req.params.section || 'hot';
    const sort    = req.params.sort || 'viral';
    const w       = req.params.window || 'day';
    const page    = req.params.page || 0;
    const showViral = req.query.showViral || true;

    const url = `${BASE_URL}/${PATH}/${section}/${sort}/${w}/${page}?showViral=${showViral}`;
    makeRequest(url, res);
  });

  /**
   * Get a image details.
   *
   * @see https://api.imgur.com/endpoints/gallery#image
   */
  app.get('/gallery/image/:id', (req, res) => {
    const imageId = req.params.id;
    const url = `${BASE_URL}/${path}/image/${imageId}`;

    makeRequest(url, res);
  });
}
