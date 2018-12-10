const rootNode = document.getElementById("root");

let callbackLoadJs;

const observer = new MutationObserver((ms, ob) => {
  for (let m of ms) {
    if (m.type === "childList") {
      observer.disconnect();
      callbackLoadJs && callbackLoadJs();
      break;
    }
  }
});

observer.observe(rootNode, { childList: true });

const appsNode = (() => {
  let node;
  return () => {
    if (!node) {
      node = document.getElementById("apps");
    }
    return node;
  };
})();

export default function loadJs(url) {
  if (appsNode()) {
    return new Promise((resolve, reject) => {
      window.requirejs([url], app => {
        resolve(app);
      });
    });
  }

  return new Promise((resolve, reject) => {
    callbackLoadJs = () => {
      window.requirejs([url], app => {
        resolve(app);
      });
    };
  });
}
