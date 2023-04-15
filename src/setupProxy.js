const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/contactus",
    createProxyMiddleware({
      target: "localhost:8083",
      changeOrigin: true,
    })
  );
};
