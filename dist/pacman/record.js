"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recordImpression = recordImpression;
exports.recordEvent = recordEvent;
Object.defineProperty(exports, "queryString", {
  enumerable: true,
  get: function get() {
    return _queryString2.default;
  }
});
exports.default = void 0;

var _sendBeacon = _interopRequireDefault(require("./sendBeacon"));

var _v = _interopRequireDefault(require("uuid/v1"));

var _queryString2 = _interopRequireDefault(require("./queryString"));

var _recordPageView = _interopRequireDefault(require("./record-page-view"));

var _main = _interopRequireDefault(require("./main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function recordImpression(window, url, country, page) {
  if (!window.pac_analytics) {
    var sendBeacon = (0, _sendBeacon.default)(window);
    var rockmanId = (0, _v.default)().replace(/-/g, "");
    var userId = rockmanId;
    var encCampaignId = (0, _queryString2.default)(window.location.search, "xcid");
    var campaignId = parseInt((0, _queryString2.default)(window.location.search, "cid")) || 2;
    var originalUrl = document.location.href;
    window.pac_analytics = {
      visitor: {
        rockmanId: rockmanId,
        impressionNumber: 1,
        //TODO: get impressionNumber from localStorage
        country: country,
        page: page,
        xaid: (0, _queryString2.default)(window.location.search, "xaid"),
        cid: campaignId,
        offer: parseInt((0, _queryString2.default)(window.location.search, "offer")) || 1 // default to 1 offer id

      },
      startTime: new Date().valueOf(),
      queryString: function queryString(key) {
        return (0, _queryString2.default)(window.location.search, key);
      },
      url: url
    };
    sendBeacon("".concat(url, "/impression/").concat(encCampaignId), {
      rockmanId: rockmanId,
      userId: userId,
      page: page,
      originalUrl: originalUrl
    });
  } else {
    console.info("No need to record an impression from client");

    window.pac_analytics.queryString = function (key) {
      return (0, _queryString2.default)(window.location.search, key);
    };
  }

  (0, _recordPageView.default)(window.document, window, window.navigator, {
    r: window.pac_analytics.visitor.rockmanId,
    m: window.pac_analytics.visitor.impressionNumber,
    server_url: "https://de-pacman.sam-media.com/api/v2/mstore",
    b: 0
  });
  (0, _main.default)(window.document, window, Date.now(), {
    r: window.pac_analytics.visitor.rockmanId,
    m: window.pac_analytics.visitor.impressionNumber,
    server_url: "https://de-pacman.sam-media.com/api/v2/mstore",
    b: 0
  });

  if (!window.dataLayer) {
    window.dataLayer = window.dataLayer || [];
  }

  window.dataLayer.push({
    affiliate_id: window.pac_analytics.visitor.xaid
  });
  return window.pac_analytics;
}

function recordEvent(window, url, view, args) {
  var sendBeacon = (0, _sendBeacon.default)(window);

  if (!window.pac_analytics) {
    throw Error("Please call recordImpression() first. 'pac_analytics' was not found.");
  }

  sendBeacon("".concat(url, "/event"), _objectSpread({
    rockmanId: window.pac_analytics.visitor.rockmanId,
    relt: new Date().valueOf() - window.pac_analytics.startTime,
    view: view
  }, args));
}

var _default = function _default(window, country, page) {
  if (!window) {
    return {
      viewChanged: function viewChanged() {
        return void 6;
      },
      msisdnSubmitted: function msisdnSubmitted() {
        return void 6;
      },
      advancedInFlow: function advancedInFlow() {
        return void 6;
      },
      advancedInPreFlow: function advancedInPreFlow() {
        return void 6;
      },
      recedeInFlow: function recedeInFlow() {
        return void 6;
      }
    };
  } else {
    var current_view = "Init";
    var url = !!window.pac_analytics ? window.pac_analytics.url : (0, _queryString2.default)(window.location.search, "pacman-server") || "/analytics"; // recordImpression manipulates window object by adding pac_analytics

    var pac_analytics = recordImpression(window, url, country, page);
    window.dataLayer.push({
      xaid: pac_analytics.visitor.xaid,
      country: country,
      page: page,
      offer: pac_analytics.visitor.offer
    });
    return {
      viewChanged: function viewChanged(view) {
        if (view != current_view) {
          recordEvent(window, url, view, {
            category: "UI",
            action: "ViewChanged"
          });
          current_view = view;
        }
      },
      msisdnSubmitted: function msisdnSubmitted(msisdn) {
        recordEvent(window, url, current_view, {
          category: "UX",
          action: "MSISDN-Submitted",
          args: {
            msisdn: msisdn
          }
        });
      },
      advancedInPreFlow: function advancedInPreFlow(label, args) {
        var gaEvent = {
          category: "Pre-Flow",
          action: "advance",
          label: label
        };
        recordEvent(window, url, current_view, _objectSpread({}, gaEvent, {
          args: args
        }));
        window.dataLayer.push(_objectSpread({}, gaEvent, {
          event: "gaEvent"
        })); // how to trigger a custom event on window object:
        // const event = new CustomEvent('gaEvent', { detail: {category: 'Pre-Flow'} });
        // window.dispatchEvent(event)
      },
      recedeInFlow: function recedeInFlow(flow, reason, args) {
        var gaEvent = {
          category: "Flow",
          action: "recede",
          label: "".concat(reason)
        };
        recordEvent(window, url, current_view, _objectSpread({}, gaEvent, {
          args: args
        }));
        window.dataLayer.push(_objectSpread({}, gaEvent, {
          event: "gaEvent"
        }));
      },
      advancedInFlow: function advancedInFlow(flow, action, args) {
        var gaEvent = {
          category: "Flow",
          action: "advance",
          label: "".concat(action)
        };
        recordEvent(window, url, current_view, _objectSpread({}, gaEvent, {
          args: args
        }));
        window.dataLayer.push(_objectSpread({}, gaEvent, {
          event: "gaEvent"
        }));
      }
    };
  }
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(recordImpression, "recordImpression", "/Users/homam/dev/sam/os/ouisys-clients/src/pacman/record.ts");
  reactHotLoader.register(recordEvent, "recordEvent", "/Users/homam/dev/sam/os/ouisys-clients/src/pacman/record.ts");
  reactHotLoader.register(_default, "default", "/Users/homam/dev/sam/os/ouisys-clients/src/pacman/record.ts");
  leaveModule(module);
})();

;