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
exports.HOC = exports.MOLink = void 0;

var _main = require("./main");

var HOC = _interopRequireWildcard(require("./HOC"));

exports.HOC = HOC;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var MOLink = HOC.MOLink;
exports.MOLink = MOLink;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MOLink, "MOLink", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/assrock-mo/index.ts");
  leaveModule(module);
})();

;