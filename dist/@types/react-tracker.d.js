"use strict";

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tracker, "Tracker", "/Users/emman/ouisys-clients/src/@types/react-tracker.d.ts");
  reactHotLoader.register(TrackerProvider, "TrackerProvider", "/Users/emman/ouisys-clients/src/@types/react-tracker.d.ts");
  leaveModule(module);
})();

;