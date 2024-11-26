// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kdNth":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "54039f29d4499576";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"76eRa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainJs = require("./main.js");
var _mainJsDefault = parcelHelpers.interopDefault(_mainJs);
var _navJs = require("./nav.js");
var _navJsDefault = parcelHelpers.interopDefault(_navJs);
var _liveJs = require("./live.js");
var _liveJsDefault = parcelHelpers.interopDefault(_liveJs);
var _rideJs = require("./ride.js");
var _rideJsDefault = parcelHelpers.interopDefault(_rideJs);
var _rideDetailJs = require("./rideDetail.js");
var _rideDetailJsDefault = parcelHelpers.interopDefault(_rideDetailJs);
// import ToggleInitializer from "../livebuttons/toggle.js";
document.addEventListener("DOMContentLoaded", ()=>{
    const container = document.getElementById("driverProfileContainer");
    const container1 = document.getElementById("tab-render");
    const container2 = document.getElementById("live-tracking-container");
    // const container3 = document.getElementById('toggle')
    const container4 = document.getElementById("Ride-details");
    const container5 = document.getElementById("passengerDetailsContainer");
    new (0, _mainJsDefault.default)(container);
    // new ToggleInitializer(container3);  
    new (0, _navJsDefault.default)(container1);
    new (0, _liveJsDefault.default)(container2);
    new (0, _rideJsDefault.default)(container4);
    new (0, _rideDetailJsDefault.default)(container5);
});

},{"./main.js":"jgoTl","./nav.js":"1hQ4A","./live.js":"gNwXV","./ride.js":"itZcr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./rideDetail.js":"bnM1s"}],"jgoTl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RideDetails", ()=>RideDetails);
var _backPng = require("../../assets/back.png");
var _backPngDefault = parcelHelpers.interopDefault(_backPng);
var _dropPng = require("../../assets/drop.png");
var _dropPngDefault = parcelHelpers.interopDefault(_dropPng);
var _imageRemovebgPreviewPng = require("../../assets/image-removebg-preview.png");
var _imageRemovebgPreviewPngDefault = parcelHelpers.interopDefault(_imageRemovebgPreviewPng);
var _penPng = require("../../assets/pen.png");
var _penPngDefault = parcelHelpers.interopDefault(_penPng);
var _delPng = require("../../assets/del.png");
var _delPngDefault = parcelHelpers.interopDefault(_delPng);
var _profilePng = require("../../assets/profile.png");
var _profilePngDefault = parcelHelpers.interopDefault(_profilePng);
class RideDetails {
    constructor(container){
        this.container = container;
        this.user_id = "NOTDR001";
        this.fetchDriverData(); // Fetch and render data when the instance is created
    }
    // Fetch driver data from the server
    async fetchDriverData() {
        try {
            // Update the URL to fetch all driver information
            const response = await fetch(`http://127.0.0.1:3000/driver_info`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error("Error fetching driver data:", error);
            this.render(); // Render with default values in case of error
        }
    }
    // Format time in HH:MM format
    formatTime(timeString) {
        const [hours, minutes] = timeString.split(":");
        return `${hours}h ${minutes}m`;
    }
    // Render the ride details component
    render(data = []) {
        // Check if data is an array and has items
        if (!Array.isArray(data) || data.length === 0) {
            this.container.innerHTML = "<p>No driver data available.</p>";
            return;
        }
        // Map through the data to create the HTML for each driver
        const driverHTML = data.map((driver)=>{
            const { name = "Loading...", last_update = "Loading...", user_id = "Loading...", experience_years = "N/A", total_distance = "N/A", total_hours = "N/A", total_office_trips = "N/A", total_regular_trips = "N/A", total_revenue = "N/A", driver_revenue = "N/A", joined_date = "N/A", status = "N/A" } = driver;
            return `
                <div class="profile-header">
                    <div class="status-container">
                        <div class="left">
                            <img src=${0, _backPngDefault.default} alt="Back" class="back-icon" width="30px" height="30px">
                        </div>
                        <div class="right">
                            <div class="status-button">
                                <span class="active-1">
                                    <img style="width: 30px; display: flex; justify-content: center;" src=${0, _imageRemovebgPreviewPngDefault.default} alt="">
                                    2 Documents are yet to expire
                                </span>
                            </div>
                            <div class="status-button">
                                <button class="active-m">
                                    <span id="status">${status}</span>
                                    <img style="padding-left: 4px;" src=${0, _dropPngDefault.default} alt="" width="10px">
                                </button>
                            </div>
                            <div class="icon-button">
                                <button class="pen"><img src=${0, _penPngDefault.default} width="20px"></button>
                            </div>
                            <div class="icon-button">
                                <button class="del"><img src=${0, _delPngDefault.default} width="20px"></button>
                            </div>
                        </div>
                    </div>
                    <div class="user-info">
                        <div class="img">
                            <img src=${0, _profilePngDefault.default} alt="User Profile Picture" class="logo">
                        </div>
                        <div class="name-txt">
                            <h3 id="user-name">${name} 
                                <span class="sub-text" id="last-update">Last Update: ${new Date(last_update).toLocaleString()}</span>
                            </h3>
                            <span class="NOTDR001" id="user-id">${user_id}</span>
                        </div>
                    </div>
                    <div class="status-section">
                        <div class="status-card">
                            <h3 id="experience_years">${experience_years ? `${experience_years} Years` : "N/A"}</h3>
                            <p>Experience</p>
                        </div>
                        <div class="status-card">
                            <h3 id="total_distance">${total_distance ? `${total_distance} Km` : "N/A"}</h3>
                            <p>Total Distance</p>
                        </div>
                        <div class="status-card">
                            <h3 id="total_hours">${total_hours ? this.formatTime(total_hours) : "N/A"}</h3>
                            <p>Total Hours</p>
                        </div>
                        <div class="status-card">
                            <h3 id="total_office_trips">${total_office_trips !== undefined ? total_office_trips : "N/A"}</h3>
                            <p>Total Office Trips</p>
                        </div>
                        <div class="status-card">
                            <h3 id="total_regular_trips">${total_regular_trips !== undefined ? total_regular_trips : "N/A"}</h3>
                            <p>Total Regular Trips</p>
                        </div>
                        <div class="status-card">
                            <h3 id="total_revenue">${total_revenue ? `\u{20B9}${total_revenue.toLocaleString()}` : "N/A"}</h3>
                            <p>Total Revenue</p>
                        </div>
                        <div class="status-card">
                            <h3 id="driver_revenue">${driver_revenue ? `\u{20B9}${driver_revenue.toLocaleString()}` : "N/A"}</h3>
                            <p>Driver Revenue</p>
                        </div>
                        <div class="status-card">
                            <h3 id="joined_date">${joined_date ? new Date(joined_date).toLocaleDateString() : "N/A"}</h3>
                            <p>Joined Date</p>
                        </div>
                    </div>
                </div>
            `;
        }).join("");
        // Update the container's innerHTML
        this.container.innerHTML = driverHTML;
    }
}
exports.default = RideDetails;

},{"../../assets/back.png":"b2alz","../../assets/drop.png":"1sGpr","../../assets/image-removebg-preview.png":"8Gf5O","../../assets/pen.png":"ds5Hf","../../assets/del.png":"aGk50","../../assets/profile.png":"eL63X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b2alz":[function(require,module,exports) {
module.exports = require("90b1d2edf49710d5").getBundleURL("7dcJj") + "back.172dddc6.png" + "?" + Date.now();

},{"90b1d2edf49710d5":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"1sGpr":[function(require,module,exports) {
module.exports = require("1fda1f567e3410a7").getBundleURL("7dcJj") + "drop.8c3f489d.png" + "?" + Date.now();

},{"1fda1f567e3410a7":"lgJ39"}],"8Gf5O":[function(require,module,exports) {
module.exports = require("f73a596a3f980272").getBundleURL("7dcJj") + "image-removebg-preview.74fb17e6.png" + "?" + Date.now();

},{"f73a596a3f980272":"lgJ39"}],"ds5Hf":[function(require,module,exports) {
module.exports = require("f23a9f7c2e1d9947").getBundleURL("7dcJj") + "pen.5a718b03.png" + "?" + Date.now();

},{"f23a9f7c2e1d9947":"lgJ39"}],"aGk50":[function(require,module,exports) {
module.exports = require("38e5a2b5988980f0").getBundleURL("7dcJj") + "del.9701b970.png" + "?" + Date.now();

},{"38e5a2b5988980f0":"lgJ39"}],"eL63X":[function(require,module,exports) {
module.exports = require("edce0bc90c01c3b6").getBundleURL("7dcJj") + "profile.f6dbac75.png" + "?" + Date.now();

},{"edce0bc90c01c3b6":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1hQ4A":[function(require,module,exports) {
// import LiveTracking from './live.js';
// import Ride from './ride.js';
// export class TabMenu {
//     constructor(container) {
//         this.container = container;
//         this.activeTab = 'Live Tracking';
//         this.mapContainer = document.getElementById('map');
//         this.liveTrackingContainer = document.getElementById('live-tracking-container');
//         this.rideDetailsContainer = document.getElementById('ride-details-container');
//         this.liveTrackingInstance = null; // To store the LiveTracking instance
//         this.rideInstance = null; // To store the Ride instance
//         this.render();
//         this.addEventListeners();
//     }
//     render() {
//         // Render the tab menu with the correct active tab
//         this.container.innerHTML = `
//             <div class="tab-buttons">
//                 <button class="tab-button ${this.activeTab === 'Personal Details' ? 'active' : ''}" data-tab="Personal Details">Personal Details</button>
//                 <button class="tab-button ${this.activeTab === 'Live Tracking' ? 'active' : ''}" data-tab="Live Tracking">Live Tracking</button>
//                 <button class="tab-button ${this.activeTab === 'Services Applied' ? 'active' : ''}" data-tab="Services Applied">Services Applied</button>
//                 <button class="tab-button ${this.activeTab === 'Trip History' ? 'active' : ''}" data-tab="Trip History">Trip History</button>
//                 <button class="tab-button ${this.activeTab === 'Payment Reports' ? 'active' : ''}" data-tab="Payment Reports">Payment Reports</button>
//                 <button class="tab-button ${this.activeTab === 'Vehicles Driven' ? 'active' : ''}" data-tab="Vehicles Driven">Vehicles Driven</button>
//                 <button class="tab-button ${this.activeTab === 'Customer Feedback' ? 'active' : ''}" data-tab="Customer Feedback">Customer Feedback</button>
//                 <button class="tab-button ${this.activeTab === 'Accidental Reports' ? 'active' : ''}" data-tab="Accidental Reports">Accidental Reports</button>
//             </div>
//         `;
//     }
//     addEventListeners() {
//         // Select all the buttons using the correct class name
//         const buttons = this.container.querySelectorAll('.tab-button');
//         buttons.forEach(button => {
//             button.addEventListener('click', () => this.handleTabClick(button));
//         });
//     }
//     handleTabClick(button) {
//         const tabName = button.getAttribute('data-tab');
//         this.activeTab = tabName;
//         this.render(); // Re-render the tabs with the updated active state
//         this.addEventListeners(); // Re-attach event listeners after rendering
//         // Clear the containers if the tab is not "Live Tracking"
//         if (this.activeTab !== 'Live Tracking') {
//             this.liveTrackingContainer.innerHTML = ''; // Clear existing LiveTracking content
//             this.rideDetailsContainer.innerHTML = ''; // Clear existing Ride details content
//             this.liveTrackingInstance = null; // Clear the LiveTracking instance
//             this.rideInstance = null; // Clear the Ride instance
//             return;
//         }
//         // Initialize LiveTracking and Ride when "Live Tracking" tab is active
//         this.initLiveTracking();
//         this.initRide();
//     }
//     initLiveTracking() {
//         // Create an instance of LiveTracking if not already created
//         if (!this.liveTrackingInstance) {
//             this.liveTrackingInstance = new LiveTracking(this.liveTrackingContainer);
//         }
//     }
//     initRide() {
//         // Create an instance of Ride if not already created
//         if (!this.rideInstance) {
//             this.rideInstance = new Ride('ride-details-container');
//         }
//     }
// }
// export default TabMenu;
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TabMenu", ()=>TabMenu);
var _liveJs = require("./live.js");
var _liveJsDefault = parcelHelpers.interopDefault(_liveJs);
var _rideJs = require("./ride.js");
var _rideJsDefault = parcelHelpers.interopDefault(_rideJs);
class TabMenu {
    constructor(container){
        this.container = container;
        this.activeTab = "Live Tracking";
        this.mapContainer = document.getElementById("map");
        this.liveTrackingContainer = document.getElementById("live-tracking-container");
        this.rideDetailsContainer = document.getElementById("passengerDetailsContainer");
        this.liveTrackingInstance = null; // To store the LiveTracking instance
        this.rideInstance = null; // To store the Ride instance
        this.render();
        this.addEventListeners();
        this.updateMapVisibility(); // Set initial map visibility
    }
    render() {
        // Render the tab menu with the correct active tab
        this.container.innerHTML = `
            <div class="tab-buttons">
                <button class="tab-button ${this.activeTab === "Personal Details" ? "active" : ""}" data-tab="Personal Details">Personal Details</button>
                <button class="tab-button ${this.activeTab === "Live Tracking" ? "active" : ""}" data-tab="Live Tracking">Live Tracking</button>
                <button class="tab-button ${this.activeTab === "Services Applied" ? "active" : ""}" data-tab="Services Applied">Services Applied</button>
                <button class="tab-button ${this.activeTab === "Trip History" ? "active" : ""}" data-tab="Trip History">Trip History</button>
                <button class="tab-button ${this.activeTab === "Payment Reports" ? "active" : ""}" data-tab="Payment Reports">Payment Reports</button>
                <button class="tab-button ${this.activeTab === "Vehicles Driven" ? "active" : ""}" data-tab="Vehicles Driven">Vehicles Driven</button>
                <button class="tab-button ${this.activeTab === "Customer Feedback" ? "active" : ""}" data-tab="Customer Feedback">Customer Feedback</button>
                <button class="tab-button ${this.activeTab === "Accidental Reports" ? "active" : ""}" data-tab="Accidental Reports">Accidental Reports</button>
            </div>
        `;
    }
    addEventListeners() {
        const buttons = this.container.querySelectorAll(".tab-button");
        buttons.forEach((button)=>{
            button.addEventListener("click", ()=>this.handleTabClick(button));
        });
    }
    handleTabClick(button) {
        const tabName = button.getAttribute("data-tab");
        this.activeTab = tabName;
        this.render(); // Re-render the tabs with the updated active state
        this.addEventListeners(); // Re-attach event listeners after rendering
        // Clear the containers if the tab is not "Live Tracking"
        if (this.activeTab !== "Live Tracking") {
            this.liveTrackingContainer.innerHTML = ""; // Clear existing LiveTracking content
            this.rideDetailsContainer.innerHTML = ""; // Clear existing Ride details content
            this.liveTrackingInstance = null; // Clear the LiveTracking instance
            this.rideInstance = null; // Clear the Ride instance
        } else {
            // Initialize LiveTracking and Ride when "Live Tracking" tab is active
            this.initLiveTracking();
            this.initRide();
        }
        // Update map visibility based on the active tab
        this.updateMapVisibility();
    }
    initLiveTracking() {
        if (!this.liveTrackingInstance) this.liveTrackingInstance = new (0, _liveJsDefault.default)(this.liveTrackingContainer);
    }
    initRide() {
        if (!this.rideInstance) this.rideInstance = new (0, _rideJsDefault.default)("ride-details-container");
    }
    updateMapVisibility() {
        if (this.activeTab === "Live Tracking") this.mapContainer.style.display = "block";
        else this.mapContainer.style.display = "none";
    }
}
exports.default = TabMenu;

},{"./live.js":"gNwXV","./ride.js":"itZcr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gNwXV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LiveTracking", ()=>LiveTracking);
var _mapJs = require("../maps/map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _vehiclePng = require("../../assets/vehicle.png");
var _vehiclePngDefault = parcelHelpers.interopDefault(_vehiclePng);
var _locationPng = require("../../assets/location.png");
var _locationPngDefault = parcelHelpers.interopDefault(_locationPng);
var _googlePng = require("../../assets/google.png");
var _googlePngDefault = parcelHelpers.interopDefault(_googlePng);
var _speedPng = require("../../assets/speed.png");
var _speedPngDefault = parcelHelpers.interopDefault(_speedPng);
var _mapsPng = require("../../assets/maps.png");
var _mapsPngDefault = parcelHelpers.interopDefault(_mapsPng);
var _pathPng = require("../../assets/path.png");
var _pathPngDefault = parcelHelpers.interopDefault(_pathPng);
var _arrowPng = require("../../assets/arrow.png");
var _arrowPngDefault = parcelHelpers.interopDefault(_arrowPng);
class LiveTracking {
    constructor(container){
        if (!container) {
            console.error("LiveTracking container is not provided.");
            return;
        }
        this.container = container;
        this.fetchLiveTrackingData(); // Fetch and render data when the instance is created
    }
    // Fetch live tracking data from the server
    async fetchLiveTrackingData() {
        try {
            const response = await fetch(`http://127.0.0.1:3000/live_tracking`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            console.log("Fetched live tracking data:", data);
            // Check if data is an array and has at least one item
            if (Array.isArray(data) && data.length > 0) this.render(data[0]); // Render the component with the first object in the array
            else {
                console.warn("Live tracking data is empty or not in the expected format.");
                this.render(); // Render with default values
            }
        } catch (error) {
            console.error("Failed to fetch live tracking data:", error);
            this.render(); // Render with default values in case of error
        }
    }
    // Render the live tracking component
    render(data = {}) {
        if (!this.container) {
            console.error("LiveTracking container is not available.");
            return;
        }
        // Destructure the data object and provide default values
        const { vehicle_registration = "Unknown", vehicle_id = "NOTVEH0123", ride_type = "Office", trip_id = "Loading..", total_fare = "\u20B9 --", assigned_client = "Loading..", assigned_location = "NPT - HCL", live_speed = "0 km/h", run_time = "0h 0m", idle_time = "0m", distance_travelled = "0 km", seats = "0/0", waypoints = "0", max_speed = "0 km/h", start_date_time = "-- --, --:-- --", end_date_time = "-- --, --:-- --", trip_type = "Km" } = data;
        // Render the HTML content inside the container
        this.container.innerHTML = `
                    <div class="live-tracking" id="liveTracking">Live Tracking</div>
                    <div class="vehicle-info">
                        <img src="${0, _vehiclePngDefault.default}" alt="Vehicle Image">
                        <div class="vehicle-details">
                            <h2 id="vehicle_registration">${vehicle_registration}</h2>
                            <p id="vehicle_id">${vehicle_id}</p>
                        </div>
                        <a href="#" class="view-details">View Vehicle Detail ></a>
                    </div>
                    <div class="Today">
                        <span style="font-size: 22px; margin-bottom: 20px;" class="To" id="trip_date">${new Date(start_date_time).toLocaleDateString()}</span>
                        <button class="cancel-button" id="cancelButton">Cancel Trip</button>
                    </div>
                    <div class="trip-info">
                        <div style="background-color: #ffecec;">
                            <span id="trip_id">${trip_id}</span><span>ID</span>
                        </div>
                        <div style="background-color: #f9fbe7;">
                            <span id="ride_type">${ride_type}</span><span>Ride Type</span>
                        </div>
                        <div style="background-color: #e5f7f2;">
                            <span id="total_fare">${total_fare}</span><span>Total Fare</span>
                        </div>
                        <div style="background-color: #fceef8;">
                            <span id="assigned_client">${assigned_client}</span><span>Assigned Client</span>
                        </div>
                        <div style="background-color: #fff6e8;">
                            <span id="assigned_location">${assigned_location}</span><span>Assigned Location</span>
                        </div>
                    </div>
                    <div class="details">
                        <div class="tracking">
                            <div class="tracking-data" id="live_speed">${live_speed}</div><div>Live Speed</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="run_time">${run_time}</div><div>Run Time</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="idle_time">${idle_time}</div><div>Idle Time</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="distance_travelled">${distance_travelled}</div><div>Distance Travelled</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="seats">${seats}</div><div>Seats</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="waypoints">${waypoints}</div><div>Waypoints</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="max_speed">${max_speed}</div><div>Max Speed</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="start_date_time">${new Date(start_date_time).toLocaleString()}</div><div>Start Time</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="end_date_time">${end_date_time ? new Date(end_date_time).toLocaleString() : "--"}</div><div>End Time</div>
                        </div>
                        <div class="tracking">
                            <div class="tracking-data" id="trip_type">${trip_type}</div><div>Trip Type</div>
                        </div>
                    </div>
                     <div style="margin-top: 10px; margin-bottom: 20px;" class="toggle-container">
            <div style="background-color: #a0f4ed6d;" class="toggle-s">
              <span><img src=${0, _locationPngDefault.default} width="15px">GPS Location</span>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </div>
            <div style="background-color: #108bff34;" class="toggle-s">
              <span><img src=${0, _googlePngDefault.default} width="15px">Google Location</span>
              <label style="margin-bottom: 0px;" class="switch">
                <img class="img-ey" style="margin: 0px;width: 20px;padding-left: 9px;" src=${0, _pathPngDefault.default} >
                <!-- <input type="checkbox"> -->
                
              </label>
            </div>
            <div style="background-color: #ff32cc20;" class="toggle-s">
              <span><img src=${0, _speedPngDefault.default} width="12px">Overspeed Path</span>
              <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
              </label>
            </div>
            <div style="background-color: #84bbff2b;" class="toggle-s">
              <span><img src=${0, _mapsPngDefault.default} width="15px">Regular Path</span>
              <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
              </label>
            </div>
            <button style="margin-top: 10px;margin-bottom: 10px;" class="ride-logs-button">
            Ride Logs
            <span class="arrow"><img src=${0, _arrowPngDefault.default} width="8px"></span>
          </button>
          </div>
                    
        `;
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    const container4 = document.getElementById("map");
    new (0, _mapJsDefault.default)(container4);
});
exports.default = LiveTracking;

},{"../maps/map.js":"4G6qu","../../assets/vehicle.png":"4q7vf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../assets/location.png":"6Y6k6","../../assets/google.png":"eJFcS","../../assets/speed.png":"6yQgU","../../assets/maps.png":"giUQR","../../assets/path.png":"7VKgJ","../../assets/arrow.png":"6ZHtx"}],"4G6qu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MapHandler", ()=>MapHandler);
var _carPng = require("../../assets/car.png");
var _carPngDefault = parcelHelpers.interopDefault(_carPng);
class MapHandler {
    constructor(mapContainerId){
        this.mapContainerId = mapContainerId;
        this.waypoints = [
            {
                lat: 13.0827,
                lng: 80.2707,
                label: "chetpet"
            },
            {
                lat: 13.0850,
                lng: 80.2780,
                label: "2km, 7:30 a.m."
            },
            {
                lat: 13.0900,
                lng: 80.2850,
                label: "3km, 8:00 a.m."
            },
            {
                lat: 13.1000,
                lng: 80.2900,
                label: "4km, 8:30 a.m."
            }
        ];
        this.map = null;
        this.carMarker = null;
        this.index = 0;
        this.initMap();
    }
    // Initialize the map
    initMap() {
        // Set up the map
        this.map = L.map(this.mapContainerId).setView([
            13.0827,
            80.2707
        ], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(this.map);
        this.initCarMarker();
        this.addWaypoints();
        this.drawPath();
        this.moveCar();
    }
    // Initialize the car marker
    initCarMarker() {
        const carIcon = L.icon({
            iconUrl: (0, _carPngDefault.default),
            iconSize: [
                40,
                40
            ],
            iconAnchor: [
                20,
                20
            ]
        });
        // Place the car marker on the first waypoint
        this.carMarker = L.marker([
            this.waypoints[0].lat,
            this.waypoints[0].lng
        ], {
            icon: carIcon
        }).addTo(this.map);
    }
    moveCar() {
        if (this.index >= this.waypoints.length) return;
        const waypoint = this.waypoints[this.index];
        this.carMarker.setLatLng([
            waypoint.lat,
            waypoint.lng
        ]).bindPopup(waypoint.label).openPopup();
        this.index++;
        // Move to the next waypoint after 3 seconds
        setTimeout(()=>this.moveCar(), 3000);
    }
    // Add markers for the waypoints
    addWaypoints() {
        this.waypoints.forEach((point)=>{
            L.marker([
                point.lat,
                point.lng
            ]).addTo(this.map).bindPopup(point.label).openPopup();
        });
    }
    drawPath() {
        const latlngs = this.waypoints.map((point)=>[
                point.lat,
                point.lng
            ]);
        L.polyline(latlngs, {
            color: "black"
        }).addTo(this.map);
    }
}
exports.default = MapHandler;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../assets/car.png":"fKCaF"}],"fKCaF":[function(require,module,exports) {
module.exports = require("426cea7108beae4e").getBundleURL("7dcJj") + "car.df4b0055.png" + "?" + Date.now();

},{"426cea7108beae4e":"lgJ39"}],"4q7vf":[function(require,module,exports) {
module.exports = require("2efb390ceaf71ead").getBundleURL("7dcJj") + "vehicle.bc774c9d.png" + "?" + Date.now();

},{"2efb390ceaf71ead":"lgJ39"}],"6Y6k6":[function(require,module,exports) {
module.exports = require("261825297a29b94").getBundleURL("7dcJj") + "location.635549af.png" + "?" + Date.now();

},{"261825297a29b94":"lgJ39"}],"eJFcS":[function(require,module,exports) {
module.exports = require("6b70cb9be05f9131").getBundleURL("7dcJj") + "google.8f7adc19.png" + "?" + Date.now();

},{"6b70cb9be05f9131":"lgJ39"}],"6yQgU":[function(require,module,exports) {
module.exports = require("5b153fdb896f5696").getBundleURL("7dcJj") + "speed.1f72a0ff.png" + "?" + Date.now();

},{"5b153fdb896f5696":"lgJ39"}],"giUQR":[function(require,module,exports) {
module.exports = require("70e7117f04d8feff").getBundleURL("7dcJj") + "maps.7448aec9.png" + "?" + Date.now();

},{"70e7117f04d8feff":"lgJ39"}],"7VKgJ":[function(require,module,exports) {
module.exports = require("58b42f49aec7a58b").getBundleURL("7dcJj") + "path.b7fba7a7.png" + "?" + Date.now();

},{"58b42f49aec7a58b":"lgJ39"}],"6ZHtx":[function(require,module,exports) {
module.exports = require("f5c342d7d045ffba").getBundleURL("7dcJj") + "arrow.4fc98b72.png" + "?" + Date.now();

},{"f5c342d7d045ffba":"lgJ39"}],"itZcr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _imagePng = require("../../assets/image.png");
var _imagePngDefault = parcelHelpers.interopDefault(_imagePng);
var _carPng = require("../../assets/car.png");
var _carPngDefault = parcelHelpers.interopDefault(_carPng);
var _flagPng = require("../../assets/flag.png");
var _flagPngDefault = parcelHelpers.interopDefault(_flagPng);
var _startlocationPng = require("../../assets/startlocation.png");
var _startlocationPngDefault = parcelHelpers.interopDefault(_startlocationPng);
class Ride {
    constructor(containerId){
        this.containerId = containerId; // ID of the container to display ride details
        this.init(); // Initialize fetching ride details
    }
    async init() {
        this.createRideDetailsContainer(); // Create the container if it doesn't exist
        await this.fetchRideDetails(); // Fetch and populate ride details
    }
    // Create the ride details container if it doesn't exist
    createRideDetailsContainer() {
        const existingContainer = document.getElementById(this.containerId);
        if (!existingContainer) {
            const detailsContainer = document.createElement("div");
            detailsContainer.id = this.containerId;
            document.body.appendChild(detailsContainer); // Append to the body or a specific parent element
        }
    }
    // Fetch ride details from the API
    async fetchRideDetails() {
        try {
            const response = await fetch("http://127.0.0.1:3000/ride_details");
            if (!response.ok) throw new Error("Failed to fetch ride details");
            const rideDataArray = await response.json();
            console.log("Fetched ride details:", rideDataArray);
            const detailsContainer = document.getElementById(this.containerId);
            detailsContainer.innerHTML = ""; // Clear existing content
            rideDataArray.forEach((rideData)=>{
                // Validate and parse run_time string (HH:MM:SS)
                const runTimeParts = rideData.run_time ? rideData.run_time.split(":") : [
                    0,
                    0
                ];
                const hours = parseInt(runTimeParts[0] || "0", 10);
                const minutes = parseInt(runTimeParts[1] || "0", 10);
                // Append ride details
                detailsContainer.innerHTML += `
                     <div class="map-route">
                     <div style="background-color: rgba(211, 211, 211, 0.35); padding: 5px 10px; border-radius: 8px 8px 0px 0px ;" class="hed">
                        <h3 >Ride Logs</h3>
                    </div>
                    <div class="details">
                    <div style="background-color: #e5eae936;" class="tracking">
                        <div class="tracking-data">${rideData.trip_distance}<span> km</span></div>
                        <div>Trip Distance</div>
                    </div>
                    <div style="background-color: #e5eae936;" class="tracking">
                        <div class="tracking-data">${rideData.number_of_pickups}</div>
                        <div>No of Pickup</div>
                    </div>
                    <div style="background-color: #e5eae936;" class="tracking">
                        <div class="tracking-data">${rideData.number_of_drops}</div>
                        <div>No. of Drop</div>
                    </div>
                    <div style="background-color: #e5eae936;" class="tracking">
                        <div class="tracking-data">${hours}h ${minutes}m</div>
                        <div>Run Time</div>
                    </div>
                    <div style="background-color: #e5eae936;" class="tracking">
                        <div class="tracking-data">${rideData.waypoints}</div>
                        <div>Waypoints</div>
                    </div>
                    </div>
                     <div class="det">
                    <div class="content"> 
                         <p style="font-size: 12px; justify-self: center; padding-right: 15px; padding: 1%;" class="location">
                             <img style="width: 20px; margin-left: -33px; margin-bottom: -8px;" src=${0, _startlocationPngDefault.default} width="15px"> Start Location
                         </p>
                         <p class="address">#8/25, 2nd Floor, Kambar Street, Alandur, Chennai - 600 016</p>
                         <p class="distance">10000 Km <img src=${0, _imagePngDefault.default} width="15px"> <a href="#" class="view-image">View Image</a></p>
                         <p class="date-time">1 Jan 2022, 6:30 a.m.</p>
                         <div class="car">
                         <img src=${0, _carPngDefault.default} width="50px" style="margin-left: -45px;">
                         </div>
                     </div>
                     <div id="passengerDetailsContainer" class="content"></div>
                     <div class="content">
                         <img style="width: 20px; margin-left: -21px;" src=${0, _flagPngDefault.default} width="15px">
                         <p class="location">End Location</p>
                         <p class="address">#8/25, 2nd Floor, Kambar Street, Alandur, Chennai - 600 016</p>
                         <p class="date-time">1 Jan 2022, 10:00 a.m.</p>
                     </div>
                 </div>
                 </div>
                `;
            });
        } catch (error) {
            console.error("Error fetching ride details:", error);
        }
    }
}
exports.default = Ride;

},{"../../assets/image.png":"ilnPt","../../assets/car.png":"fKCaF","../../assets/flag.png":"amWl6","../../assets/startlocation.png":"cNxWi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ilnPt":[function(require,module,exports) {
module.exports = require("4aa0d7b758d1f975").getBundleURL("7dcJj") + "image.665c63dd.png" + "?" + Date.now();

},{"4aa0d7b758d1f975":"lgJ39"}],"amWl6":[function(require,module,exports) {
module.exports = require("1a157d5d1691b5fe").getBundleURL("7dcJj") + "flag.160a4543.png" + "?" + Date.now();

},{"1a157d5d1691b5fe":"lgJ39"}],"cNxWi":[function(require,module,exports) {
module.exports = require("6dec9fc89cf46786").getBundleURL("7dcJj") + "startlocation.12cfa16d.png" + "?" + Date.now();

},{"6dec9fc89cf46786":"lgJ39"}],"bnM1s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _personPng = require("../../assets/person.png");
var _personPngDefault = parcelHelpers.interopDefault(_personPng);
var _phonePng = require("../../assets/phone.png");
var _phonePngDefault = parcelHelpers.interopDefault(_phonePng);
var _msg1Png = require("../../assets/msg1.png");
var _msg1PngDefault = parcelHelpers.interopDefault(_msg1Png);
var _contactPng = require("../../assets/contact.png");
var _contactPngDefault = parcelHelpers.interopDefault(_contactPng);
var _tickPng = require("../../assets/tick.png");
var _tickPngDefault = parcelHelpers.interopDefault(_tickPng);
var _timePng = require("../../assets/time.png");
var _timePngDefault = parcelHelpers.interopDefault(_timePng);
class RideDetail {
    constructor(containerId){
        this.apiUrl = "http://127.0.0.1:3000/ride_details_log"; // Example API URL
        this.containerId = containerId; // Store the container ID for later use
        this.init(); // Initialize the fetching process
    }
    init() {
        this.fetchRides(); // Start fetching ride details when the instance is created
    }
    async fetchRides() {
        console.log("Fetching ride details..."); // Log when the fetching starts
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                console.error("Network response was not ok", response);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched Data:", data); // Log the received data
            if (Array.isArray(data) && data.length > 0) this.populateRideDetails(data);
            else {
                console.warn("No rides available or received data is not an array");
                this.displayNoDataMessage();
            }
        } catch (error) {
            console.error("Error fetching ride details:", error);
            alert("Failed to load ride details. Please try again later.");
        }
    }
    populateRideDetails(rides) {
        console.log("Populating ride details..."); // Log when populating starts
        const firstRide = rides[0];
        const startLocationElem = document.getElementById("startLocation");
        const distanceElem = document.getElementById("distance");
        const startDateTimeElem = document.getElementById("startDateTime");
        const endLocationElem = document.getElementById("endLocation");
        const endDateTimeElem = document.getElementById("endDateTime");
        if (startLocationElem) startLocationElem.innerText = firstRide.start_location || "N/A";
        if (distanceElem) distanceElem.innerText = `${firstRide.distance || 0} Km`;
        if (startDateTimeElem) startDateTimeElem.innerText = this.formatDateTime(firstRide.start_datetime);
        if (endLocationElem) endLocationElem.innerText = firstRide.end_location || "N/A";
        if (endDateTimeElem) endDateTimeElem.innerText = this.formatDateTime(firstRide.end_datetime);
        const container = document.getElementById("passengerDetailsContainer");
        if (!container) {
            console.warn("Passenger details container not found");
            return;
        }
        container.innerHTML = ""; // Clear any previous content
        rides.forEach((ride)=>{
            const passengerDiv = document.createElement("div");
            passengerDiv.className = "contentdet";
            passengerDiv.innerHTML = `
                <div class="content1">
                    <div class="profile-name">
                        <img src=${0, _personPngDefault.default} width="30px" height="30px">
                        <p class="profilename">${ride.passenger_name || "Unknown"}</p>
                    </div>
                    <div class="icon1">
                        <img src=${0, _phonePngDefault.default} width="30px">
                        <img src=${0, _msg1PngDefault.default} width="30px">
                        <img src=${0, _contactPngDefault.default} width="30px">
                    </div>
                </div>
                <div class="profile-address1">
                    <p class="address">${ride.start_location || "Unknown Location"}</p>
                    <div class="profile-date">
                        <p class="date-time">${this.formatDateTime(ride.start_datetime)}</p>
                    </div>
                    <div class="profile-status">
                        <span style="color: ${ride.status === "Picked Up" ? "#2e7d32" : "#ff7043"}; font-size: medium;">
                            <img src="Frontend/assets/${ride.status === "Picked Up" ? (0, _tickPngDefault.default) : (0, _timePngDefault.default)}" width="15px"> 
                            ${ride.status || "Unknown"}
                        </span>
                    </div>
                </div>
            `;
            container.appendChild(passengerDiv);
        });
    }
    displayNoDataMessage() {
        const container = document.getElementById("passengerDetailsContainer");
        if (container) container.innerHTML = "<p>No ride details available.</p>";
    }
    formatDateTime(dateTimeString) {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true
        };
        return new Date(dateTimeString).toLocaleDateString(undefined, options);
    }
}
exports.default = RideDetail;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../assets/person.png":"9i5rz","../../assets/phone.png":"befJd","../../assets/msg1.png":"hE1yT","../../assets/contact.png":"9kpLl","../../assets/tick.png":"gPRqO","../../assets/time.png":"jjkRI"}],"9i5rz":[function(require,module,exports) {
module.exports = require("3abbeaaa39f6c3ca").getBundleURL("7dcJj") + "person.a3d6b4c9.png" + "?" + Date.now();

},{"3abbeaaa39f6c3ca":"lgJ39"}],"befJd":[function(require,module,exports) {
module.exports = require("4736e425c3b53af0").getBundleURL("7dcJj") + "phone.2603d97e.png" + "?" + Date.now();

},{"4736e425c3b53af0":"lgJ39"}],"hE1yT":[function(require,module,exports) {
module.exports = require("d115969e90045adf").getBundleURL("7dcJj") + "msg1.dba3e86b.png" + "?" + Date.now();

},{"d115969e90045adf":"lgJ39"}],"9kpLl":[function(require,module,exports) {
module.exports = require("60fd59435224ec9d").getBundleURL("7dcJj") + "contact.526dc913.png" + "?" + Date.now();

},{"60fd59435224ec9d":"lgJ39"}],"gPRqO":[function(require,module,exports) {
module.exports = require("1af8dc421d836e33").getBundleURL("7dcJj") + "tick.f1fa5e91.png" + "?" + Date.now();

},{"1af8dc421d836e33":"lgJ39"}],"jjkRI":[function(require,module,exports) {
module.exports = require("a972ecfc363d9784").getBundleURL("7dcJj") + "time.bf6b36ca.png" + "?" + Date.now();

},{"a972ecfc363d9784":"lgJ39"}]},["kdNth","76eRa"], "76eRa", "parcelRequire10c2")

//# sourceMappingURL=index1.d4499576.js.map
