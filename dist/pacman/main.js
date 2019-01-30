"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map = require("rxjs/operators/map");

var _bufferWhen = require("rxjs/operators/bufferWhen");

var _filter = require("rxjs/operators/filter");

var _debounceTime = require("rxjs/operators/debounceTime");

var _first = require("rxjs/operators/first");

var _merge = require("rxjs/observable/merge");

var _fromEvent = require("rxjs/observable/fromEvent");

var _from = require("rxjs/observable/from");

var _interval = require("rxjs/observable/interval");

var _empty = require("rxjs/observable/empty");

var _zip = require("rxjs/observable/zip");

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(d, w, loadTime, pacman) {
  var precisionRound = function precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  };

  var documentProp = {
    getRootElement: function getRootElement() {
      var element = d.documentElement;
      return "CSS1Compat" == d.compatMode ? element : d.body || element;
    },
    getViewportSize: function getViewportSize() {
      var rootElement = documentProp.getRootElement();
      return [rootElement.clientWidth || w.innerWidth, rootElement.clientHeight || w.innerHeight];
    },
    getDocumentScroll: function getDocumentScroll() {
      return [w.pageXOffset || d.documentElement && d.documentElement.scrollLeft || d.body && d.body.scrollLeft || 0, w.pageYOffset || d.documentElement && d.documentElement.scrollTop || d.body && d.body.scrollTop || 0];
    }
  };
  var eventsManager = {
    getPos: function getPos(event) {
      var b = documentProp.getRootElement(),
          c = documentProp.getDocumentScroll();
      return [event.pageX || event.clientX + c[0] - (b.clientLeft || 0) || 0, event.pageY || event.clientY + c[1] - (b.clientTop || 0) || 0];
    },
    getTarget: function getTarget(event) {
      var b = null;

      try {
        (b = event.target || event.srcElement) && !b.ownerDocument && b.documentElement && (b = b.documentElement);
      } catch (c) {}

      return b;
    }
  };

  var getRelativeTime = function getRelativeTime() {
    return loadTime ? Date.now() - loadTime : 0;
  };

  var visibilityProperty = "hidden",
      visibilityChangeEvent;
  if (visibilityProperty in d) visibilityChangeEvent = "visibilitychange";else if ((visibilityProperty = "mozHidden") in d) visibilityChangeEvent = "mozvisibilitychange";else if ((visibilityProperty = "webkitHidden") in d) visibilityChangeEvent = "webkitvisibilitychange";else if ((visibilityProperty = "msHidden") in d) visibilityChangeEvent = "msvisibilitychange";
  var visibilities = visibilityChangeEvent ? (0, _fromEvent.fromEvent)(d, visibilityChangeEvent).pipe((0, _map.map)(function (event) {
    return {
      t: d[visibilityProperty] ? "hidden" : "visible",
      s: precisionRound(getRelativeTime() / 1000, 1)
    };
  })) : (0, _empty.empty)();
  var defaultMapping = (0, _map.map)(function (event) {
    return {
      t: event.type,
      s: precisionRound(getRelativeTime() / 1000, 1)
    };
  });
  var unload = (0, _fromEvent.fromEvent)(w, "beforeunload");
  var blur = (0, _fromEvent.fromEvent)(w, "blur").pipe((0, _map.map)(function (event) {
    return {
      t: "blur",
      s: precisionRound(getRelativeTime() / 1000, 1),
      a: {
        e: "window"
      }
    };
  }));
  var focus = (0, _fromEvent.fromEvent)(w, "focus").pipe((0, _map.map)(function (event) {
    return {
      t: "focus",
      s: precisionRound(getRelativeTime() / 1000, 1),
      a: {
        e: "window"
      }
    };
  }));
  var focusin = (0, _fromEvent.fromEvent)(d, "focusin").pipe((0, _map.map)(function (event) {
    return {
      t: "focus",
      s: precisionRound(getRelativeTime() / 1000, 1),
      a: {
        e: eventsManager.getTarget(event).id
      }
    };
  }));
  var focusout = (0, _fromEvent.fromEvent)(d, "focusout").pipe((0, _map.map)(function (event) {
    return {
      t: "blur",
      s: precisionRound(getRelativeTime() / 1000, 1),
      a: {
        e: eventsManager.getTarget(event).id
      }
    };
  }));
  var submit = (0, _fromEvent.fromEvent)(d, "submit").pipe((0, _map.map)(function (event) {
    return {
      t: "submit",
      s: precisionRound(getRelativeTime() / 1000, 1),
      a: {
        e: eventsManager.getTarget(event).id
      }
    };
  }));
  var firstChange = (0, _fromEvent.fromEvent)(d, "change").pipe((0, _map.map)(function (event) {
    return {
      t: "fchange",
      s: precisionRound(getRelativeTime() / 1000, 1),
      a: {
        e: eventsManager.getTarget(event).id
      }
    };
  }), (0, _first.first)());
  var firstTouch = (0, _fromEvent.fromEvent)(d, "touchstart").pipe((0, _map.map)(function (event) {
    return {
      t: "ftouch",
      s: precisionRound(getRelativeTime() / 1000, 1)
    };
  }), (0, _first.first)());
  var firstMotion = (0, _fromEvent.fromEvent)(w, "devicemotion").pipe((0, _map.map)(function (event) {
    return {
      t: "fmotion",
      s: precisionRound(getRelativeTime() / 1000, 1)
    };
  }), (0, _first.first)());
  var full_load = (0, _fromEvent.fromEvent)(w, "load").pipe((0, _map.map)(function (event) {
    return {
      t: "full_load",
      s: precisionRound(getRelativeTime() / 1000, 1),
      a: {
        p: documentProp.getViewportSize()
      }
    };
  }));
  var html_load;

  if (d.readyState === "complete" || d.readyState === "interactive") {
    html_load = (0, _from.from)([{
      t: "html_load",
      s: precisionRound(getRelativeTime() / 1000, 1),
      a: {
        p: documentProp.getViewportSize()
      }
    }]);
  } else {
    html_load = (0, _fromEvent.fromEvent)(d, "DOMContentLoaded").pipe((0, _map.map)(function (event) {
      return {
        t: "html_load",
        s: precisionRound(getRelativeTime() / 1000, 1),
        a: {
          p: documentProp.getViewportSize()
        }
      };
    }));
  }

  var touchstart = (0, _fromEvent.fromEvent)(d, "touchstart");
  var touchend = (0, _fromEvent.fromEvent)(d, "touchend");
  var clicks = (0, _zip.zip)(touchstart, touchend).pipe((0, _filter.filter)(function (x) {
    return x[1].timeStamp - x[0].timeStamp < 350 && x[0].touches.length == 1 && x[1].touches.length == 0;
  }), (0, _map.map)(function (event) {
    return {
      t: "click",
      s: precisionRound(getRelativeTime() / 1000, 1),
      a: {
        e: eventsManager.getTarget(event[0].touches[0]).id,
        p: eventsManager.getPos(event[0].touches[0])
      }
    };
  }));
  var scrolls = (0, _fromEvent.fromEvent)(w, "scroll").pipe((0, _debounceTime.debounceTime)(500), (0, _map.map)(function (event) {
    return {
      t: event.type,
      s: precisionRound(getRelativeTime() / 1000, 1),
      a: {
        p: documentProp.getDocumentScroll()
      }
    };
  }));
  var resize = (0, _fromEvent.fromEvent)(w, "resize").pipe((0, _debounceTime.debounceTime)(500), (0, _map.map)(function (event) {
    return {
      t: event.type,
      s: precisionRound(getRelativeTime() / 1000, 1),
      a: {
        p: documentProp.getViewportSize()
      }
    };
  }));
  var stream = (0, _merge.merge)(clicks, scrolls, blur, focus, focusin, focusout, visibilities, firstTouch, firstChange, firstMotion, submit, resize, full_load, html_load).pipe((0, _bufferWhen.bufferWhen)(function () {
    return (0, _merge.merge)((0, _interval.interval)(7000), unload, blur);
  }), (0, _filter.filter)(function (x) {
    return x.length > 0;
  }));
  var subscribe = stream.subscribe(function (x) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", pacman.server_url, true);
    xhr.send(JSON.stringify({
      r: pacman.r,
      m: pacman.m,
      b: pacman.b++,
      d: x
    }));
  });
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

  reactHotLoader.register(_default, "default", "/Users/emman/ouisys-clients/src/pacman/main.ts");
  leaveModule(module);
})();

;