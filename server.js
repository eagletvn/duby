'use strict';

const cors_proxy = require('cors-anywhere');

const options = {
  originWhitelist: [],
  requireHeader: [],
  removeHeaders: ['cookie', 'cookie2']
};

const server = cors_proxy.createServer(options);

module.exports = (req, res) => {
  server.emit(
    'request',
    Object.assign(req, { url: req.url.replace(':/', '://') }),
    res
  );
};
