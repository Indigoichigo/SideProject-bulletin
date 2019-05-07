const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy(['/account/login'], { target: 'http://54.152.132.20:8888' }));
};
