'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _middlewares = require('./middlewares');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

// create middlewares
(0, _middlewares.createMiddlewares)(app);

// create routes
(0, _routes.createRoutes)(app);

app.server.listen(process.env.PORT || _config.DEFAULT_PORT);

console.log('Started on port ' + 3001);
//# sourceMappingURL=index.js.map