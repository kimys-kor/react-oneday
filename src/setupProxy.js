const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/contactus",
    createProxyMiddleware({
      target: "http://dev.syurl.co.kr:8083",
      changeOrigin: true,
    })
  );
};
