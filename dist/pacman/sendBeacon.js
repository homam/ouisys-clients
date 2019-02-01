"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(root) {
  var isSupported = "navigator" in root && "sendBeacon" in root.navigator;

  var sendBeacon = function sendBeacon(url, data) {
    if (isSupported) {
      if (typeof data != "string") {
        data = JSON.stringify(data);
      }

      navigator.sendBeacon(url, data);
    } else {
      var xhr = "XMLHttpRequest" in window ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      xhr.open("POST", url, false);
      xhr.withCredentials = true;
      xhr.setRequestHeader("Accept", "*/*");

      if (typeof data === "string") {
        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      } else {
        xhr.setRequestHeader("Content-Type", "application/json");
        data = JSON.stringify(data);
      }

      xhr.responseType = "text/plain";
      /*else if (({}).toString.call(data) === '[object Blob]') {
      if (data.type) {
        xhr.setRequestHeader('Content-Type', data.type);
      }
      }*/

      try {
        xhr.send(data);
      } catch (error) {
        console.error(error);
      }

      return true;
    }
  };

  return sendBeacon;
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

  reactHotLoader.register(_default, "default", "/Users/emman/ouisys-clients/src/pacman/sendBeacon.ts");
  leaveModule(module);
})();

;