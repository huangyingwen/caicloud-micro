const httpProxy = require("./http-proxy");

module.exports = function(app) {
  const proxy = httpProxy({
    targets: {
      "/app1(.*)": {
        target: "http://localhost:9001",
        pathRewrite: { "^/app1": "" },
        changeOrigin: true,
        logLevel: "debug"
      },
      "/app2(.*)": {
        target: "http://localhost:9002",
        pathRewrite: { "^/app2": "" },
        changeOrigin: true,
        logLevel: "debug"
      },
      "/app4(.*)": {
        target: "http://localhost:9004",
        pathRewrite: { "^/app4": "" },
        changeOrigin: true,
        logLevel: "debug"
      },
      "/user-web(.*)": {
        target: "http://localhost:3006",
        pathRewrite: {
          "^/user-web/socket.io": "/socket.io",
          "^/user-web/api": "/api",
          "^/user-web": "/user-web"
        },
        changeOrigin: true,
        logLevel: "debug",
        proxyTimeout: 1000 * 60 * 5,
        timeout: 1000 * 60 * 5,
        ws: true // enable websocket proxy
      }
    }
  });

  app.use(async (ctx, next) => {
    if (ctx.header.accept.startsWith("text/html")) return await next();
    await proxy(ctx, next);
  });
};
