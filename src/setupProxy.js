const { createProxyMiddleware } = require("http-proxy-middleware");

// This ensures that the heroku api becomes rewritten as /lama
// mutiple enpoints for future apis can be added here:

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/lama", {
      target: "https://heroku-lama-api.herokuapp.com", // API endpoint 1
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
