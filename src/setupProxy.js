const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/lama", {
      target: "https://heroku-lama-api.herokuapp.com", // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/lama": "",
      },
      headers: {
        Connection: "keep-alive",
      },
    })
  );
};
