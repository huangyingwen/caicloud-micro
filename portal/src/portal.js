import * as singleSpa from "single-spa";
import { GlobalEventDistributor } from "./globalEventDistributor";
import { loadApp } from "./helper";

window.singleSpa = singleSpa;

async function init() {
  const globalEventDistributor = new GlobalEventDistributor();

  // app1: The URL "/app1/..." is being redirected to "http://localhost:9001/..." this is done by the webpack proxy (webpack.config.js)
  await loadApp(
    "app1",
    "/app1",
    "app1/singleSpaEntry",
    "app1/store",
    globalEventDistributor
  );

  // app2: The URL "/app2/..." is being redirected to "http://localhost:9002/..." this is done by the webpack proxy (webpack.config.js)
  await loadApp(
    "app2",
    "/app2",
    "app2/singleSpaEntry",
    "app2/store",
    globalEventDistributor
  );

  // app4: The URL "/app4/..." is being redirected to "http://localhost:9004/..." this is done by the webpack proxy (webpack.config.js)
  await loadApp("app4", "/app4", "app4/singleSpaEntry", null, null); // does not have a store, so we pass null

  await loadApp(
    "userweb",
    "/user-web",
    "user-web/build/singleSpaEntry",
    null,
    null
  ); // does not have a store, so we pass null

  singleSpa.start();

  const singleSpaNavigate = window.singleSpaNavigate;
  window.singleSpaNavigate = url => {
    var event = new CustomEvent("navigateToUrl", {
      detail: {
        url: url
      }
    });

    window.dispatchEvent(event);
    singleSpaNavigate(url);
  };
}

init();
