const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/logsys", {
      target: "http://localhost:4000", // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/logsys": "",
      },
      headers: {
        Connection: "keep-alive",
      },
    })
  );
  app.use(
    createProxyMiddleware("/lama", {
      target: "http://localhost:4001", // API endpoint 2
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
