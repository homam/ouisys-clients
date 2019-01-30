"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = match;
exports.initialState = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

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

// `http://n.mobzonefun.com/uk/yoga-videos?offer=1435&&msisdn=1&operator=UK_VODAFONE&msisdnSubmitted=Y&skipTrigger=1&network_type=mobile_data&identified=1&ms=1&operatorSubmitted=Y&platform=mcb&SubscribeMo=1&shortcode=86707&atmobirun=1`
var getRedirectUrl = function getRedirectUrl(maybeConfig) {
  var offer = maybeConfig.offer || window.pac_analytics.visitor.offer;
  var search = window.location.search.substr(1) || '';

  switch (process.env.country) {
    case "gb":
      var host = maybeConfig.host || 'n.mobzonefun.com';
      var handle = maybeConfig.handle || 'yoga-videos';
      return "http://".concat(host, "/uk/").concat(handle, "?offer=").concat(offer, "&atmobirun=1&rockman_id=").concat(window.pac_analytics.visitor.rockmanId, "&redirPixels=").concat(window.location.host, "&").concat(search);

    case "iq":
      var host = maybeConfig.host || 'n.gamezpark.com';
      var handle = maybeConfig.handle || 'racing-m-dmb';
      return "http://".concat(host, "/iq/").concat(handle, "?device=smart&offer=").concat(offer, "&atmobirun=1&rockman_id=").concat(window.pac_analytics.visitor.rockmanId, "&redirPixels=").concat(window.location.host, "&").concat(search);

    default:
      throw "'country' environment variable is either missing or has an unsupported value (".concat(process.env.country, "). This is necessary for defaultConfig(offer).");
  }
};

function match(matcher) {
  return function (state) {
    return state == "NothingYet" ? matcher.nothingYet() : React.createElement("div", null, "...");
  };
}

var _default = function _default(tracker, maybeConfig, Comp) {
  return function (initState) {
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
            current: initState
          });

          _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "actions", {
            onClick: function onClick() {
              var url = getRedirectUrl(maybeConfig || {});
              tracker.advancedInFlow('one-click/v1', 'click', {
                url: url
              });
              window.location.href = url;
            },
            testUrl: function testUrl() {
              var url = getRedirectUrl(maybeConfig || {});
              tracker.advancedInFlow('one-click/v1', 'click', {
                url: url
              });
              return url;
            }
          });

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
      }(React.PureComponent)
    );
  };
};

var _default2 = _default;
exports.default = _default2;
var initialState = "NothingYet";
exports.initialState = initialState;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getRedirectUrl, "getRedirectUrl", "/Users/emman/ouisys-clients/src/clients/bupper-one-click/HOC.tsx");
  reactHotLoader.register(match, "match", "/Users/emman/ouisys-clients/src/clients/bupper-one-click/HOC.tsx");
  reactHotLoader.register(initialState, "initialState", "/Users/emman/ouisys-clients/src/clients/bupper-one-click/HOC.tsx");
  reactHotLoader.register(_default, "default", "/Users/emman/ouisys-clients/src/clients/bupper-one-click/HOC.tsx");
  leaveModule(module);
})();

;