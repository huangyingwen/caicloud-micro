let c2k = require("koa2-connect");
let proxy = require("http-proxy-middleware");
const pathToRegexp = require("path-to-regexp");

module.exports = function httpProxy(options) {
  return async function(ctx, next) {
    const { targets = {} } = options;
    const { path } = ctx;
    for (const route of Object.keys(targets)) {
      if (pathToRegexp(route).test(path)) {
        await c2k(proxy(targets[route]))(ctx, next);
        return;
      }
    }
    await next();
  };
};
