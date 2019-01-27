"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chargeAndWait1 = chargeAndWait1;
exports.chargeAndWait = void 0;

var TS = _interopRequireWildcard(require("./TolaState"));

var RDS = _interopRequireWildcard(require("../../common-types/RemoteDataState"));

var _queryString = _interopRequireDefault(require("../../pacman/queryString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TolaApiError =
/*#__PURE__*/
function (_Error) {
  _inherits(TolaApiError, _Error);

  function TolaApiError(message, errorType, details) {
    var _this;

    _classCallCheck(this, TolaApiError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TolaApiError).call(this, message));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "errorType", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "details", void 0);

    _this.message = message;
    _this.errorType = errorType;
    _this.details = details;
    Object.setPrototypeOf(_assertThisInitialized(_assertThisInitialized(_this)), TolaApiError.prototype);
    return _this;
  }

  _createClass(TolaApiError, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return TolaApiError;
}(_wrapNativeSuper(Error));

var timeoutInSeconds = 120;

function chargeAndWait1(visitor, msisdn, message, price) {
  var version = (0, _queryString.default)(window.location.search, 'mock') == 'true' ? 'mock' : "v1"; // use 'mock' for testing, use 'v1' for actually sending a charge request to the user

  var root = "https://tola-api.sam-media.com/".concat(version, "/"); // "http://localhost:3001/" // 

  var search = window.location.search || '';
  var query = search + (search.length == 0 ? '?' : search[search.length - 1] == '&' ? '' : search[search.length - 1] == '=' ? '&' : search[search.length - 1] == '?' ? '' : '&') + "target=777200&cid=".concat(visitor.cid, "&rockman_id=").concat(visitor.rockmanId, "&offer_id=").concat(visitor.offer, "&page=").concat(visitor.page);

  var wait = function wait(ms) {
    return new Promise(function (res) {
      return setTimeout(res, ms);
    });
  };

  var reject = function reject(errorType, message, details) {
    return Promise.reject(new TolaApiError(message || "", errorType, details));
  }; // Testing different states

  /*
  var mockState = "";
  if(price == 10) mockState = "MockChargeResponseError";
  else if(price == 200) mockState = "MockDisbursementNotificationError";
  else if(price == 100) timeoutInSeconds = 3;
  	else  {
  mockState = "";
  var timeoutInSeconds = 60;
  }
   
  return fetch(`https://${root}/${version}/api/charge/${msisdn}/${price}/${message}?mock=` + mockState )*/


  return fetch("".concat(root, "api/charge/").concat(msisdn, "/").concat(price, "/").concat(message).concat(query)).then(function (x) {
    return x.json();
  }).then(function (x) {
    return !x.tolaResponse.success ? reject("FailChargeResponseReceived", x.tolaResponse.error.message, x.tolaResponse.error) : x;
  }).then(function (x) {
    console.log(x);
    var chargeRequestId = x.chargeRequestId;

    var check = function check(i) {
      return i > timeoutInSeconds ? reject("Timeout") : fetch("".concat(root, "api/check_charge/").concat(chargeRequestId)).then(function (x) {
        return x.json();
      }).then(function (x) {
        console.log(x);

        var waitMore = function waitMore() {
          return wait(1000
          /* recheck every one second */
          ).then(function () {
            return check(i + 1);
          });
        };

        switch (x.state) {
          case "ChargeRequestCreated":
            return waitMore();

          case "SuccessChargeResponseReceived":
            return waitMore();

          case "FailChargeResponseReceived":
            return reject("FailChargeResponseReceived");

          case "SuccessLodgementNotificationReceived":
            return waitMore();

          case "FailLodgementNotificationReceived":
            return reject("FailLodgementNotificationReceived");

          case "SuccessDisbursementNotificationReceived":
            return x;
          // final state

          case "FailDisbursementNotificationReceived":
            return reject("FailDisbursementNotificationReceived");

          default:
            console.log("Unexpected state: ", x.state);
            return waitMore();
        }
      });
    };

    return check(0);
  });
}

var chargeAndWait = function chargeAndWait(visitor, msisdn, message, price, callback) {
  callback(RDS.Loading());
  chargeAndWait1(visitor, msisdn, message, price).then(function (_) {
    return callback(RDS.Success(TS.Success()));
  }).catch(function (e) {
    return callback(RDS.Failure(TS.mkTolaError(!!e.errorType ? e.errorType : 'UnknownError', e.message)));
  });
};

exports.chargeAndWait = chargeAndWait;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TolaApiError, "TolaApiError", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/tola-mpesa/TolaAPI.ts");
  reactHotLoader.register(timeoutInSeconds, "timeoutInSeconds", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/tola-mpesa/TolaAPI.ts");
  reactHotLoader.register(chargeAndWait1, "chargeAndWait1", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/tola-mpesa/TolaAPI.ts");
  reactHotLoader.register(chargeAndWait, "chargeAndWait", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/tola-mpesa/TolaAPI.ts");
  leaveModule(module);
})();

;