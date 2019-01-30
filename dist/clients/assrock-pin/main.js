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
    case "gr":
      return {
        offer: offer,
        host: 'm.mobiworld.biz',
        country: 'gr',
        handle: 'mobilearts'
      };

    case "iq":
      {
        return {
          offer: offer,
          host: 'n.mobfun.co',
          country: 'iq',
          handle: 'mobile-arts'
        };
      }

    case "qa":
      {
        return {
          offer: offer,
          host: 'w1.mozzi.com',
          country: 'qa',
          handle: 'finger-print-lock'
        };
      }

    case "bh":
      {
        return {
          offer: offer,
          host: 'n.game-lords.com',
          country: 'bh',
          handle: 'win-cash'
        };
      }

    case "ae":
      {
        return {
          offer: offer,
          host: 'n.mobfun.co',
          country: 'ae',
          handle: 'general-download-1'
        };
      }

    default:
      var errorMsg = "'country' environment variable is either missing or has an unsupported value (".concat(process.env.country, "). This is necessary for defaultConfig(offer).");
      console.error(errorMsg);
      throw errorMsg;
  }
};

function submitMSISDN(_x, _x2, _x3) {
  return _submitMSISDN.apply(this, arguments);
}

function _submitMSISDN() {
  _submitMSISDN = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(window, maybeConfig, msisdn) {
    var config, _ref, host, country, handle, offer, search, result, error;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            config = !maybeConfig ? {
              offer: window.pac_analytics.visitor.offer
            } : maybeConfig;
            _ref = !config.host || !config.handle || !config.country ? defaultConfig(config.offer) : config, host = _ref.host, country = _ref.country, handle = _ref.handle, offer = _ref.offer;
            search = window.location.search.substr(1) || '';
            _context2.next = 5;
            return fetch("https://lp-api.sam-media.com/v1/submit_msisdn/".concat(host, "/").concat(country, "/").concat(handle, "/").concat(offer, "/?msisdn=").concat(msisdn, "&rockman_id=").concat(window.pac_analytics.visitor.rockmanId, "&").concat(search)).then(function (x) {
              return x.json();
            });

          case 5:
            result = _context2.sent;

            if (result.isValid) {
              _context2.next = 13;
              break;
            }

            error = new Error("".concat(result.errorType, ":\n").concat(result.errorText));
            error['type'] = result.errorType;
            console.error(error);
            throw error;

          case 13:
            return _context2.abrupt("return",
            /*#__PURE__*/
            function () {
              var _submitPIN = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee(pin) {
                var pinResult, pinError;
                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fetch("https://lp-api.sam-media.com/v1/submit_pin?pin=".concat(pin, "&sid=").concat(result.submissionId)).then(function (x) {
                          return x.json();
                        });

                      case 2:
                        pinResult = _context.sent;

                        if (pinResult.isValid) {
                          _context.next = 9;
                          break;
                        }

                        pinError = new Error("".concat(pinResult.errorType, ":\n").concat(pinResult.errorText));
                        pinError['type'] = pinResult.errorType;
                        throw pinError;

                      case 9:
                        return _context.abrupt("return", pinResult.finalUrl);

                      case 10:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              function submitPIN(_x4) {
                return _submitPIN.apply(this, arguments);
              }

              return submitPIN;
            }());

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
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

  reactHotLoader.register(defaultConfig, "defaultConfig", "/Users/emman/ouisys-clients/src/clients/assrock-pin/main.ts");
  reactHotLoader.register(submitMSISDN, "submitMSISDN", "/Users/emman/ouisys-clients/src/clients/assrock-pin/main.ts");
  leaveModule(module);
})();

;