"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = match;
exports.MatchSuccess = MatchSuccess;
exports.initialState = exports.mockFailureState = exports.mockSuccessState = exports.mockLoadingState = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var TAPI = _interopRequireWildcard(require("./TolaAPI"));

var RDS = _interopRequireWildcard(require("../../common-types/RemoteDataState"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function match(matcher) {
  return function (rds) {
    return RDS.match(matcher)(rds);
  };
}

function MatchSuccess(matcher) {
  return function (rds) {
    return RDS.MatchSuccess(matcher)(rds);
  };
}

var _default = function _default(tracker, visitor) {
  return function (Comp) {
    return function (initState) {
      return (
        /*#__PURE__*/
        function (_React$Component) {
          _inherits(HOC, _React$Component);

          function HOC(props) {
            var _this;

            _classCallCheck(this, HOC);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(HOC).call(this, props));

            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", void 0);

            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "actions", void 0);

            _this.state = {
              current: initState
            };

            var self = _assertThisInitialized(_assertThisInitialized(_this));

            _this.actions = {
              chargeAndWait: function chargeAndWait(msisdn, message, price) {
                if (!msisdn || msisdn.length == 0) {
                  self.setState({
                    current: RDS.Failure({
                      type: "InvalidMSISDN"
                    })
                  });
                  return;
                }

                return TAPI.chargeAndWait(visitor, msisdn, message, price, function (st) {
                  self.setState({
                    current: st
                  });
                  RDS.match({
                    loading: function loading() {
                      return tracker.advancedInFlow('tola', 'chargeAndWait', {
                        msisdn: msisdn,
                        message: message,
                        price: price
                      });
                    },
                    success: function success() {
                      return tracker.advancedInFlow('tola', 'success', {
                        msisdn: msisdn,
                        message: message,
                        price: price
                      });
                    },
                    failure: function failure(error) {
                      return tracker.recedeInFlow('tola', 'failure', {
                        error: error.type
                      });
                    },
                    nothingYet: function nothingYet() {
                      return void 8;
                    }
                  })(st);
                });
              },
              backToNothingYet: function backToNothingYet() {
                return self.setState({
                  current: RDS.NothingYet()
                });
              }
            };
            return _this;
          }

          _createClass(HOC, [{
            key: "render",
            value: function render() {
              var self = this;
              return React.createElement(Comp, _extends({
                actions: self.actions,
                currentState: self.state.current
              }, this.props));
            }
          }, {
            key: "__reactstandin__regenerateByEval",
            // @ts-ignore
            value: function __reactstandin__regenerateByEval(key, code) {
              // @ts-ignore
              this[key] = eval(code);
            }
          }]);

          return HOC;
        }(React.Component)
      );
    };
  };
};

var _default2 = _default;
exports.default = _default2;
var mockLoadingState = RDS.Loading();
exports.mockLoadingState = mockLoadingState;
var mockSuccessState = RDS.Success({});
exports.mockSuccessState = mockSuccessState;

var mockFailureState = function mockFailureState(err) {
  return RDS.Failure(err);
};

exports.mockFailureState = mockFailureState;
var initialState = RDS.NothingYet();
exports.initialState = initialState;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(match, "match", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/mpesa-tola/HOC.tsx");
  reactHotLoader.register(MatchSuccess, "MatchSuccess", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/mpesa-tola/HOC.tsx");
  reactHotLoader.register(mockLoadingState, "mockLoadingState", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/mpesa-tola/HOC.tsx");
  reactHotLoader.register(mockSuccessState, "mockSuccessState", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/mpesa-tola/HOC.tsx");
  reactHotLoader.register(mockFailureState, "mockFailureState", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/mpesa-tola/HOC.tsx");
  reactHotLoader.register(initialState, "initialState", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/mpesa-tola/HOC.tsx");
  reactHotLoader.register(_default, "default", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/mpesa-tola/HOC.tsx");
  leaveModule(module);
})();

;