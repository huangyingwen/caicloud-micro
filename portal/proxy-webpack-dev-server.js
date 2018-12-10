const httpProxy = require("./http-proxy");

module.exports = function(app) {
  if (process.env.NODE_ENV !== "development") return;
  const target = "http://localhost:9019/";

  const opts = {
    target,
    changeOrigin: true,
    logLevel: "debug"
  };

  app.use(
    httpProxy({
      targets: {
        [`/public/(.*)`]: opts
        // '/__webpack_dev_server__/*': opts,
        // '/webpack-dev-server*': opts,
      }
    })
  );
};
