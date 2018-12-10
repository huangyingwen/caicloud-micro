import * as singleSpa from "single-spa"; // waiting for this to be merged: https://github.com/CanopyTax/single-spa/pull/156
import loadJs from "./loadJs";

export function historyPrefix(prefix) {
  return function(location) {
    console.log(
      location.pathname,
      prefix,
      location.pathname.startsWith(prefix)
    );
    return location.pathname.startsWith(prefix);
  };
}

// function loadJs(url) {
//   return new Promise((resolve, reject) => {
//     window.requirejs([url], app => {
//       resolve(app);
//     });
//   });
// }

export async function loadApp(
  name,
  hash,
  appURL,
  storeURL,
  globalEventDistributor
) {
  let storeModule = {},
    customProps = { globalEventDistributor: globalEventDistributor, singleSpa };

  // try to import the store module
  try {
    storeModule = storeURL ? await loadJs(storeURL) : { storeInstance: null };
  } catch (e) {
    console.log(`Could not load store of app ${name}.`, e);
  }

  if (storeModule.storeInstance && globalEventDistributor) {
    // add a reference of the store to the customProps
    customProps.store = storeModule.storeInstance;

    // register the store with the globalEventDistributor
    globalEventDistributor.registerStore(storeModule.storeInstance);
  }

  // register the app with singleSPA and pass a reference to the store of the app as well as a reference to the globalEventDistributor
  singleSpa.registerApplication(
    name,
    () => loadJs(appURL),
    historyPrefix(hash),
    customProps
  );
}
