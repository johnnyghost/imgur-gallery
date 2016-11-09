'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMiddlewares = undefined;

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createMiddlewares = exports.createMiddlewares = function createMiddlewares(app) {
  app.use((0, _cors2.default)());
  app.use(_bodyParser2.default.json({}));
};
//# sourceMappingURL=middlewares.js.map