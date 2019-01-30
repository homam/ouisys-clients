"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = load;
Object.defineProperty(exports, "IKeywordShortcode", {
  enumerable: true,
  get: function get() {
    return _main.IKeywordShortcode;
  }
});

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _main = require("../assrock-mo/main");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var defaultConfig = function defaultConfig(offer) {
  switch (process.env.country) {
    case "gh":
      {
        return {
          offer: offer || 1,
          host: 'w1.mozzi.com',
          country: 'gh',
          handle: '18plus-oc2sms'
        };
      }

    case "hu":
      {
        // curl "http://w.mozzi.biz/spa-api/?country=hu&device=smart&slug=gameclub&action=oc2sms"
        return {
          offer: offer || 1,
          host: "w.mozzi.biz",
          country: "hu",
          handle: "gameclub"
        };
      }

    default:
      throw "'country' environment variable is either missing or has an unsupported value (".concat(process.env.country, "). This is necessary for defaultConfig(offer).");
  }
};

function load(_x, _x2) {
  return _load.apply(this, arguments);
} // {"success":true,"uid":"*5QADM","shortcode":"1901","keyword":"TIPS"}%  
// curl "http://w1.mozzi.com/spa-api/?country=gh&device=smart&slug=18plus-oc2sms&action=oc2sms"


function _load() {
  _load = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(window, maybeConfig) {
    var keyword, shortcode, config, _ref, _host, _country, _handle, _offer, result;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!!maybeConfig && maybeConfig.tag == "keywordAndShortCode")) {
              _context.next = 5;
              break;
            }

            keyword = maybeConfig.keyword, shortcode = maybeConfig.shortcode;
            return _context.abrupt("return", {
              keyword: keyword,
              shortcode: shortcode
            });

          case 5:
            config = !maybeConfig ? {
              offer: window.pac_analytics.visitor.offer
            } : maybeConfig;
            _ref = !config.host || !config.handle || !config.country ? defaultConfig(config.offer) : config, _host = _ref.host, _country = _ref.country, _handle = _ref.handle, _offer = _ref.offer;
            _context.next = 9;
            return fetch("http://".concat(_host, "/spa-api/?country=").concat(_country, "&device=smart&slug=").concat(_handle, "&action=oc2sms&offer=").concat(_offer)).then(function (x) {
              return x.json();
            });

          case 9:
            result = _context.sent;

            if (result.success) {
              _context.next = 14;
              break;
            }

            throw result.message;

          case 14:
            return _context.abrupt("return", {
              keyword: "".concat(result.keyword, " ").concat(result.uid),
              shortcode: result.shortcode
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _load.apply(this, arguments);
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultConfig, "defaultConfig", "/Users/emman/ouisys-clients/src/clients/bupper-click2sms/main.ts");
  reactHotLoader.register(load, "load", "/Users/emman/ouisys-clients/src/clients/bupper-click2sms/main.ts");
  leaveModule(module);
})();

;