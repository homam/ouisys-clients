"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "IKeywordShortcode", {
  enumerable: true,
  get: function get() {
    return _main.IKeywordShortcode;
  }
});
exports.default = exports.mockedLoadingState = exports.mockedFailureState = exports.mockedSuccessState = exports.initialState = void 0;

var React = _interopRequireWildcard(require("react"));

var RDS = _interopRequireWildcard(require("../../common-types/RemoteDataState"));

var _main = _interopRequireWildcard(require("./main"));

var _HOC = require("../assrock-mo/HOC");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = RDS.NothingYet();
exports.initialState = initialState;
var mockedSuccessState = RDS.Success({
  keyword: 'TEST OK',
  shortcode: '666'
});
exports.mockedSuccessState = mockedSuccessState;
var mockedFailureState = RDS.Failure("Mocked Network Error");
exports.mockedFailureState = mockedFailureState;
var mockedLoadingState = RDS.Loading();
exports.mockedLoadingState = mockedLoadingState;

var _default = function _default(tracker, Comp, maybeConfig) {
  return function (initialState) {
    return (
      /*#__PURE__*/
      function (_React$PureComponent) {
        _inherits(HOC, _React$PureComponent);

        function HOC() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, HOC);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HOC)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
            currentState: initialState
          });

          return _this;
        }

        _createClass(HOC, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this2 = this;

            this.setState({
              currentState: RDS.Loading()
            });
            (0, _main.default)(window, maybeConfig).then(function (x) {
              return _this2.setState({
                currentState: RDS.Success(x)
              });
            }).catch(function (e) {
              return _this2.setState({
                currentState: RDS.Failure(e.toString())
              });
            });
          }
        }, {
          key: "render",
          value: function render() {
            var moLink = RDS.match({
              nothingYet: function nothingYet() {
                return function (_ref) {
                  var children = _ref.children,
                      props = _objectWithoutProperties(_ref, ["children"]);

                  return React.createElement("a", _extends({
                    "data-state": "nothingYet",
                    onClick: function onClick() {
                      return console.info("nothingYet");
                    },
                    href: "javascript: void(0)"
                  }, props), children);
                };
              },
              loading: function loading() {
                return function (_ref2) {
                  var children = _ref2.children,
                      props = _objectWithoutProperties(_ref2, ["children"]);

                  return React.createElement("a", _extends({
                    "data-state": "loading",
                    onClick: function onClick() {
                      return console.info("loading");
                    },
                    href: "javascript: void(0)"
                  }, props), children);
                };
              },
              failure: function failure(error) {
                return function (_ref3) {
                  var children = _ref3.children,
                      props = _objectWithoutProperties(_ref3, ["children"]);

                  return React.createElement("a", _extends({
                    "data-state": "failure",
                    onClick: function onClick() {
                      return console.error(error);
                    },
                    href: "javascript: void(0)"
                  }, props), children);
                };
              },
              success: function success(keywordAndShortcode) {
                return function (_ref4) {
                  var children = _ref4.children,
                      keyword = _ref4.keyword,
                      shortcode = _ref4.shortcode,
                      props = _objectWithoutProperties(_ref4, ["children", "keyword", "shortcode"]);

                  var keywordAndShortcode1 = {
                    keyword: keyword || keywordAndShortcode.keyword,
                    shortcode: shortcode || keywordAndShortcode.shortcode
                  };
                  return React.createElement(_HOC.MOLink, _extends({
                    onClick: function onClick() {
                      return tracker.advancedInFlow("click2sms", "click", keywordAndShortcode1);
                    },
                    keywordAndShortcode: keywordAndShortcode1
                  }, props), children);
                };
              }
            })(this.state.currentState);
            return React.createElement(Comp, _extends({}, this.props, {
              currentState: this.state.currentState,
              MOLink: moLink
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

  reactHotLoader.register(initialState, "initialState", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/bupper-click2sms/HOC.tsx");
  reactHotLoader.register(mockedSuccessState, "mockedSuccessState", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/bupper-click2sms/HOC.tsx");
  reactHotLoader.register(mockedFailureState, "mockedFailureState", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/bupper-click2sms/HOC.tsx");
  reactHotLoader.register(mockedLoadingState, "mockedLoadingState", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/bupper-click2sms/HOC.tsx");
  reactHotLoader.register(_default, "default", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/bupper-click2sms/HOC.tsx");
  leaveModule(module);
})();

;