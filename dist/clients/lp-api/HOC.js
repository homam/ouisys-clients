"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = match;
exports.default = exports.mockedCompletedState = exports.mockedPINState = exports.initialState = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var React = _interopRequireWildcard(require("react"));

var _main = _interopRequireDefault(require("./main"));

var RDS = _interopRequireWildcard(require("../../common-types/RemoteDataState"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  type: "MSISDNEntry",
  result: RDS.NothingYet()
};
exports.initialState = initialState;
var mockedPINState = {
  type: "PINEntry",
  result: RDS.NothingYet()
};
exports.mockedPINState = mockedPINState;
var mockedCompletedState = {
  type: "Completed",
  result: {
    finalUrl: 'https://www.yahoo.com/'
  } // export const initialState : State = { type: "PINEntry", result: RDS.NothingYet<PINEntryFailure, PINEntrySuccess>()}

};
exports.mockedCompletedState = mockedCompletedState;

function match(_ref) {
  var msisdnEntry = _ref.msisdnEntry,
      pinEntry = _ref.pinEntry,
      completed = _ref.completed;
  return function (state) {
    switch (state.type) {
      case 'MSISDNEntry':
        return msisdnEntry(state.result);

      case 'PINEntry':
        return pinEntry(state.result);

      case 'Completed':
        return completed(state.result);
    }
  };
}

var _default = function _default(tracker, Comp) {
  return function (initialState) {
    return (
      /*#__PURE__*/
      function (_React$PureComponent) {
        _inherits(HOC, _React$PureComponent);

        function HOC(props) {
          var _this;

          _classCallCheck(this, HOC);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(HOC).call(this, props));

          _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", void 0);

          var self = _assertThisInitialized(_assertThisInitialized(_this));

          _this.state = {
            currentState: initialState,
            actions: {
              backToStart: function backToStart() {
                _this.setState({
                  currentState: initialState
                });
              },
              submitMSISDN: function () {
                var _submitMSISDN2 = _asyncToGenerator(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee2() {
                  var _len,
                      args,
                      _key,
                      msisdn,
                      _submitPIN,
                      _errorType2,
                      _args2 = arguments;

                  return _regenerator.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _this.setState({
                            currentState: {
                              type: "MSISDNEntry",
                              result: RDS.Loading()
                            }
                          });

                          for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = _args2[_key];
                          }

                          msisdn = args[2];
                          tracker.advancedInFlow('assrock/v1', 'msisdn-submitted', {
                            msisdn: msisdn
                          });
                          _context2.prev = 4;
                          _context2.next = 7;
                          return _main.default.apply(void 0, args);

                        case 7:
                          _submitPIN = _context2.sent;
                          tracker.advancedInFlow('assrock/v1', 'msisdn-submission-success', {
                            msisdn: msisdn
                          });
                          self.setState({
                            currentState: {
                              type: "PINEntry",
                              result: RDS.NothingYet()
                            },
                            actions: _objectSpread({}, self.state.actions, {
                              submitPIN: function () {
                                var _submitPIN2 = _asyncToGenerator(
                                /*#__PURE__*/
                                _regenerator.default.mark(function _callee(pin) {
                                  var _result, _errorType;

                                  return _regenerator.default.wrap(function _callee$(_context) {
                                    while (1) {
                                      switch (_context.prev = _context.next) {
                                        case 0:
                                          _this.setState({
                                            currentState: {
                                              type: "PINEntry",
                                              result: RDS.Loading()
                                            }
                                          });

                                          tracker.advancedInFlow('assrock/v1', 'pin-submitted', {
                                            msisdn: msisdn,
                                            pin: pin
                                          });
                                          _context.prev = 2;
                                          _context.next = 5;
                                          return _submitPIN(pin);

                                        case 5:
                                          _result = _context.sent;
                                          tracker.advancedInFlow('assrock/v1', 'pin-submission-success', {
                                            msisdn: msisdn,
                                            pin: pin
                                          });

                                          _this.setState({
                                            currentState: {
                                              type: "PINEntry",
                                              result: RDS.Success({
                                                finalUrl: _result
                                              })
                                            }
                                          });

                                          _context.next = 15;
                                          break;

                                        case 10:
                                          _context.prev = 10;
                                          _context.t0 = _context["catch"](2);
                                          _errorType = "SEInvalidPIN" === _context.t0.type ? "InvalidPIN" : "UnknownError";
                                          self.setState({
                                            currentState: {
                                              type: "PINEntry",
                                              result: RDS.Failure({
                                                errorType: _errorType
                                              })
                                            }
                                          });
                                          tracker.recedeInFlow('assrock/v1', 'pin-submission-failure', {
                                            msisdn: msisdn,
                                            pin: pin
                                          });

                                        case 15:
                                        case "end":
                                          return _context.stop();
                                      }
                                    }
                                  }, _callee, this, [[2, 10]]);
                                }));

                                function submitPIN(_x) {
                                  return _submitPIN2.apply(this, arguments);
                                }

                                return submitPIN;
                              }()
                            })
                          });
                          _context2.next = 17;
                          break;

                        case 12:
                          _context2.prev = 12;
                          _context2.t0 = _context2["catch"](4);
                          _errorType2 = "SEAlreadySubscribed" === _context2.t0.type ? "AlreadySubscribed" : "SEInvalidMSISDN" == _context2.t0.type ? "InvalidMSISDN" : "UnknownError";
                          self.setState({
                            currentState: {
                              type: "MSISDNEntry",
                              result: RDS.Failure({
                                errorType: _errorType2,
                                error: _context2.t0
                              })
                            }
                          });
                          tracker.recedeInFlow('assrock/v1', 'msisdn-submission-failure', {
                            msisdn: msisdn,
                            errorType: _errorType2 || 'UnknownError'
                          });

                        case 17:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this, [[4, 12]]);
                }));

                function submitMSISDN() {
                  return _submitMSISDN2.apply(this, arguments);
                }

                return submitMSISDN;
              }(),
              submitPIN: function submitPIN(_pin) {
                return self.setState({
                  currentState: {
                    type: "PINEntry",
                    result: RDS.Failure({
                      errorType: "TooEarly"
                    })
                  }
                });
              }
            }
          };
          return _this;
        }

        _createClass(HOC, [{
          key: "render",
          value: function render() {
            return React.createElement(Comp, _extends({}, this.props, {
              currentState: this.state.currentState,
              actions: this.state.actions
            }));
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
      }(React.PureComponent)
    );
  };
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

  reactHotLoader.register(initialState, "initialState", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/lp-api/HOC.tsx");
  reactHotLoader.register(mockedPINState, "mockedPINState", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/lp-api/HOC.tsx");
  reactHotLoader.register(mockedCompletedState, "mockedCompletedState", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/lp-api/HOC.tsx");
  reactHotLoader.register(match, "match", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/lp-api/HOC.tsx");
  reactHotLoader.register(_default, "default", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/lp-api/HOC.tsx");
  leaveModule(module);
})();

;