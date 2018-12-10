/* eslint-disable import/no-extraneous-dependencies */

const path = require("path"); /* eslint-disable-line */

process.env.NODE_ENV !== "production" /* eslint-disable-line */ &&
  require("dotenv").config({
    path: path.resolve(__dirname, ".env")
  }); /* eslint-disable-line */

const session = require("koa-session");
const render = require("koa-ejs");
const koaRouter = require("koa-router");

const clientFactory = require("@caicloud/auth-client");

const { ISSUER, client_id, client_secret, grant_types } = process.env;

const { client, checkTokenMiddlewareKoa } = clientFactory(
  {
    baseUrl: "/account",
    prefixUrl: "",
    ISSUER,
    clientOpt: { client_id, client_secret, grant_types },
    koaSession: app => {
      return session({ key: "rp:sess", signed: false }, app);
    }
  },
  true
);

// const app = new Koa();
const app = client;

render(app, {
  cache: false,
  layout: false,
  root: path.join(__dirname, "release"),
  viewExt: "html"
});

require("./proxy-webpack-dev-server")(app);
require("./micro-proxy")(app);

app.use(checkTokenMiddlewareKoa);

app.use(async (ctx, next) => {
  if (!ctx.session.tokenset || ctx.state.tokenExpire) {
    return ctx.redirect("/account/login");
  }

  await next();
});

const router = koaRouter();

router.get("*", async ctx => {
  await ctx.render("index", {
    session: ctx.session,
    token: ctx.session.tokenset.id_token,
    uid: ctx.session.tokenset.id_token_dec.sub
  });
});

app.use(router.routes(), router.allowedMethods());

app.listen(3000);
