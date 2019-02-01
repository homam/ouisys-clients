"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = submitMSISDN;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var defaultConfig = function defaultConfig(offer) {
  switch (process.env.country) {
    case "my":
      return {
        offer: offer || 1,
        host: 'm.gamezones.biz',
        country: 'my',
        handle: 'api-handle'
      };

    case "gh":
      {
        return {
          offer: offer || 1,
          host: 'w1.mozzi.com',
          country: 'gh',
          handle: 'secure-pro'
        };
      }

    default:
      throw "'country' environment variable is either missing or has an unsupported value (".concat(process.env.country, "). This is necessary for defaultConfig(offer).");
  }
};

function submitMSISDN(_x, _x2, _x3) {
  return _submitMSISDN.apply(this, arguments);
}

function _submitMSISDN() {
  _submitMSISDN = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(window, maybeConfig, msisdn) {
    var config, _ref, host, country, handle, offer, search, result, error;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = !maybeConfig ? {
              offer: window.pac_analytics.visitor.offer
            } : maybeConfig;
            _ref = !config.host || !config.handle || !config.country ? defaultConfig(config.offer) : config, host = _ref.host, country = _ref.country, handle = _ref.handle, offer = _ref.offer;
            search = window.location.search.substr(1) || '';
            _context.next = 5;
            return fetch("https://lp-api.sam-media.com/v1/submit_msisdn_mo/".concat(host, "/").concat(country, "/").concat(handle, "/").concat(offer, "/?msisdn=").concat(msisdn, "&rockman_id=").concat(window.pac_analytics.visitor.rockmanId, "&").concat(search)).then(function (x) {
              return x.json();
            });

          case 5:
            result = _context.sent;

            if (result.isValid) {
              _context.next = 13;
              break;
            }

            error = new Error("".concat(result.errorType, ":\n").concat(result.errorText));
            error['type'] = result.errorType;
            console.error(error);
            throw error;

          case 13:
            return _context.abrupt("return", result.keyword);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _submitMSISDN.apply(this, arguments);
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultConfig, "defaultConfig", "/Users/emman/ouisys-clients/src/clients/assrock-mo/main.ts");
  reactHotLoader.register(submitMSISDN, "submitMSISDN", "/Users/emman/ouisys-clients/src/clients/assrock-mo/main.ts");
  leaveModule(module);
})();

;