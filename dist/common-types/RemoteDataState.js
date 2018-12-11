"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = match;
exports.MatchSuccess = exports.MatchFailure = exports.WhenSuccess = exports.WhenLoading = exports.WhenFailure = exports.IsSuccess = exports.IsFailure = exports.IsLoading = exports.IsNothingYet = exports.Success = exports.Failure = exports.Loading = exports.NothingYet = void 0;

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function match(_ref) {
  var nothingYet = _ref.nothingYet,
      loading = _ref.loading,
      failure = _ref.failure,
      success = _ref.success;
  return function (model) {
    switch (model.type) {
      case "NothingYet":
        return nothingYet();

      case "Loading":
        return loading();

      case "Failure":
        return failure(model.error);

      case "Success":
        return success(model.data);
    }
  };
}

var NothingYet = function NothingYet() {
  return {
    type: "NothingYet"
  };
};

exports.NothingYet = NothingYet;

var Loading = function Loading() {
  return {
    type: "Loading"
  };
};

exports.Loading = Loading;

var Failure = function Failure(error) {
  return {
    type: "Failure",
    error: error
  };
};

exports.Failure = Failure;

var Success = function Success(data) {
  return {
    type: "Success",
    data: data
  };
};

exports.Success = Success;

var IsNothingYet = function IsNothingYet(s) {
  return s.type == "NothingYet";
};

exports.IsNothingYet = IsNothingYet;

var IsLoading = function IsLoading(s) {
  return s.type == "Loading";
};

exports.IsLoading = IsLoading;

var IsFailure = function IsFailure(s) {
  return s.type == "Failure";
};

exports.IsFailure = IsFailure;

var IsSuccess = function IsSuccess(s) {
  return s.type == "Success";
};

exports.IsSuccess = IsSuccess;

var WhenFailure = function WhenFailure(d, r) {
  return function (s) {
    return s.type == "Failure" ? r(s.error) : d;
  };
};

exports.WhenFailure = WhenFailure;

var WhenLoading = function WhenLoading(d, r) {
  return function (s) {
    return s.type == "Loading" ? r() : d;
  };
};

exports.WhenLoading = WhenLoading;

var WhenSuccess = function WhenSuccess(d, r) {
  return function (s) {
    return s.type == "Success" ? r(s.data) : d;
  };
};

exports.WhenSuccess = WhenSuccess;

var MatchFailure = function MatchFailure(_ref2) {
  var failure = _ref2.failure,
      otherwise = _ref2.otherwise;
  return function (s) {
    return s.type == "Failure" ? failure(s.error) : otherwise();
  };
};

exports.MatchFailure = MatchFailure;

var MatchSuccess = function MatchSuccess(_ref3) {
  var success = _ref3.success,
      otherwise = _ref3.otherwise;
  return function (s) {
    return s.type == "Success" ? success(s.data) : otherwise(s);
  };
};

exports.MatchSuccess = MatchSuccess;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(match, "match", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(NothingYet, "NothingYet", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(Loading, "Loading", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(Failure, "Failure", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(Success, "Success", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(IsNothingYet, "IsNothingYet", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(IsLoading, "IsLoading", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(IsFailure, "IsFailure", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(IsSuccess, "IsSuccess", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(WhenFailure, "WhenFailure", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(WhenLoading, "WhenLoading", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(WhenSuccess, "WhenSuccess", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(MatchFailure, "MatchFailure", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  reactHotLoader.register(MatchSuccess, "MatchSuccess", "/Users/homam/dev/sam/os/ouisys-clients/src/common-types/RemoteDataState.ts");
  leaveModule(module);
})();

;