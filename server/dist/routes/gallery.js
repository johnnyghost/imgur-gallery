'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGalleryRoutes = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_URL = 'https://api.imgur.com/3';
var PATH = 'gallery';

var HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Client-ID 12f546c383eeb36'
};

/**
 * Helper method to make a request
 *
 * @method makeRequest
 *
 * @param  {String} url The url string
 * @param  {Object} res The response object
 * @return {Object}
 */
var makeRequest = function makeRequest(url, res) {
  return _axios2.default.get(url, { headers: HEADERS }).then(function (data) {
    return res.json(data.data);
  }).catch(function (e) {
    return res.json({ err: { message: e.response.data.data.error } });
  });
};

/**
 * Create the gallery routes
 * @public
 * @param {Object} app App instance
 */
var createGalleryRoutes = exports.createGalleryRoutes = function createGalleryRoutes(app) {

  /**
   * Get the gallery by page.
   *
   * @see https://api.imgur.com/endpoints/gallery#gallery
   */
  app.get('/gallery/:section?/:sort?/:window?/:page?', function (req, res) {
    var section = req.params.section || 'hot';
    var sort = req.params.sort || 'viral';
    var w = req.params.window || 'day';
    var page = req.params.page || 0;
    var showViral = req.query.showViral || true;

    var url = BASE_URL + '/' + PATH + '/' + section + '/' + sort + '/' + w + '/' + page + '?showViral=' + showViral;
    makeRequest(url, res);
  });

  /**
   * Get a image details.
   *
   * @see https://api.imgur.com/endpoints/gallery#image
   */
  app.get('/gallery/image/:id', function (req, res) {
    var imageId = req.params.id;
    var url = BASE_URL + '/' + path + '/image/' + imageId;

    makeRequest(url, res);
  });
};
//# sourceMappingURL=gallery.js.map