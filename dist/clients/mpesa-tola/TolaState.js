"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = match;
exports.mkTolaError = exports.Success = void 0;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function match(_ref) {
  var success = _ref.success;
  return function (model) {
    switch (model.type) {
      case "Success":
        return success();
    }
  };
} // export const Waiting = <E>(): TolaResult<E> => ({ type: "Waiting" });


var Success = function Success() {
  return {
    type: "Success"
  };
};

exports.Success = Success;

var mkTolaError = function mkTolaError(type, error) {
  return {
    type: type,
    error: error
  };
};

exports.mkTolaError = mkTolaError;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(match, "match", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/mpesa-tola/TolaState.ts");
  reactHotLoader.register(Success, "Success", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/mpesa-tola/TolaState.ts");
  reactHotLoader.register(mkTolaError, "mkTolaError", "/Users/homam/dev/sam/os/ouisys-clients/src/clients/mpesa-tola/TolaState.ts");
  leaveModule(module);
})();

;