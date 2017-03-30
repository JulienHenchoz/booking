(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactCSSTransition"] = factory(require("react"));
	else
		root["ReactCSSTransition"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combine__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_resolveValue__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lazyLoadCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return propsCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return stateCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return childContextCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return skipCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderCallback; });
/* unused harmony export componentWillMountCallback */
/* unused harmony export componentDidMountCallback */
/* unused harmony export componentWillUnmountCallback */
/* unused harmony export componentWillReceivePropsCallback */
/* unused harmony export shouldComponentUpdateCallback */
/* unused harmony export componentWillUpdateCallback */
/* unused harmony export componentDidUpdateCallback */
/* harmony export (immutable) */ __webpack_exports__["g"] = createBlueprint;


var lazyLoadCallback = function (callback) { return ({ kind: "lazyLoadCallback", callback: callback }); };
var propsCallback = function (callback) { return ({ kind: "propsCallback", callback: callback }); };
var stateCallback = function (callback) { return ({ kind: "stateCallback", callback: callback }); };
var childContextCallback = function (callback) { return ({ kind: "childContextCallback", callback: callback }); };
var skipCallback = function (callback) { return ({ kind: "skipCallback", callback: callback }); };
var renderCallback = function (callback) { return ({ kind: "renderCallback", callback: callback }); };
var componentWillMountCallback = function (callback) { return ({ kind: "componentWillMountCallback", callback: callback }); };
var componentDidMountCallback = function (callback) { return ({ kind: "componentDidMountCallback", callback: callback }); };
var componentWillUnmountCallback = function (callback) { return ({ kind: "componentWillUnmountCallback", callback: callback }); };
var componentWillReceivePropsCallback = function (callback) { return ({ kind: "componentWillReceivePropsCallback", callback: callback }); };
var shouldComponentUpdateCallback = function (callback) { return ({ kind: "shouldComponentUpdateCallback", callback: callback }); };
var componentWillUpdateCallback = function (callback) { return ({ kind: "componentWillUpdateCallback", callback: callback }); };
var componentDidUpdateCallback = function (callback) { return ({ kind: "componentDidUpdateCallback", callback: callback }); };
function createBlueprint() {
    var composables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        composables[_i] = arguments[_i];
    }
    var componentCallbacks = __WEBPACK_IMPORTED_MODULE_0__combine__["a" /* default */].apply(void 0, composables);
    return {
        staticCallbacks: componentCallbacks.filter(function (c) { return c.staticCallback; }).map(function (c) { return c.staticCallback; }),
        instanceCallbacks: function () {
            var result = [];
            componentCallbacks.forEach(function (c) {
                if (!c.instanceCallbacks) {
                    return;
                }
                var instanceCallbacks = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_resolveValue__["a" /* default */])(c.instanceCallbacks);
                if (!instanceCallbacks) {
                    return;
                }
                result.push.apply(result, instanceCallbacks);
            });
            return result;
        },
    };
}

//# sourceMappingURL=blueprint.js.map


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assemble__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__assemble__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blueprint__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combine__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__combine__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose__ = __webpack_require__(43);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__debug__ = __webpack_require__(44);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaultProps__ = __webpack_require__(45);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__defaultProps__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flattenProp__ = __webpack_require__(46);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__setStatic__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__setDisplayName__ = __webpack_require__(62);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__setDisplayName__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__setPropTypes__ = __webpack_require__(63);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wrapDisplayName__ = __webpack_require__(76);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mapProps__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__omitProps__ = __webpack_require__(50);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_12__omitProps__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__getContext__ = __webpack_require__(47);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__branch__ = __webpack_require__(42);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__isolate__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_15__isolate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__integrate__ = __webpack_require__(48);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_16__integrate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__noOp__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__renameProp__ = __webpack_require__(59);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__renameProps__ = __webpack_require__(60);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__withContext__ = __webpack_require__(70);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__withHandlers__ = __webpack_require__(71);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_21__withHandlers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__withProps__ = __webpack_require__(72);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_22__withProps__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__withPropsOnChange__ = __webpack_require__(73);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__withState__ = __webpack_require__(75);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_24__withState__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__withReducer__ = __webpack_require__(74);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__onWillMount__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__onDidMount__ = __webpack_require__(51);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_27__onDidMount__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__onWillUnmount__ = __webpack_require__(55);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_28__onWillUnmount__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__onWillReceiveProps__ = __webpack_require__(54);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_29__onWillReceiveProps__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__onWillUpdate__ = __webpack_require__(56);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__onDidUpdate__ = __webpack_require__(52);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_31__onDidUpdate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shouldUpdate__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__toClass__ = __webpack_require__(64);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pure__ = __webpack_require__(58);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__onlyUpdateForKeys__ = __webpack_require__(57);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__renderComponent__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__renderNothing__ = __webpack_require__(61);
/* unused harmony namespace reexport */







































//# sourceMappingURL=index.js.map


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createSimpleLifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createComparingLifecycle; });

var createSimpleLifecycle = function (kind, callback) {
    return ({ instanceCallbacks: [{ kind: kind, callback: function (props) { return function () { return callback(props); }; } }] });
};
var createComparingLifecycle = function (kind, callback) {
    return ({
        instanceCallbacks: function () {
            var prevProps;
            return [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["b" /* propsCallback */])(function (props) {
                    if (prevProps === undefined) {
                        prevProps = props;
                    }
                    return props;
                }),
                {
                    kind: kind, callback: function (props) { return function () {
                        var prevPropsTmp = prevProps;
                        prevProps = props;
                        var result = callback(prevPropsTmp, props);
                        return result;
                    }; },
                },
            ];
        },
    });
};

//# sourceMappingURL=lifecycle.js.map


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* unused harmony export mapProps */

function mapProps(propsMapper) {
    return {
        instanceCallbacks: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["b" /* propsCallback */])(function (props) { return (propsMapper(props)); }),
        ],
    };
}
/* harmony default export */ __webpack_exports__["a"] = mapProps;

//# sourceMappingURL=mapProps.js.map


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export resolveValue */
function resolveValue(valueOrCallback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return typeof valueOrCallback === "function"
        ? (_a = valueOrCallback).call.apply(_a, [null].concat(args)) : valueOrCallback;
    var _a;
}
/* harmony default export */ __webpack_exports__["a"] = resolveValue;

//# sourceMappingURL=resolveValue.js.map


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pick */
function pick(obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var result = {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
;
/* harmony default export */ __webpack_exports__["a"] = pick;

//# sourceMappingURL=pick.js.map


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = combine;
function combine() {
    var composables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        composables[_i] = arguments[_i];
    }
    var callbacks = [];
    composables.forEach(function (composable) {
        if (Array.isArray(composable)) {
            callbacks.push.apply(callbacks, composable);
        }
        else {
            callbacks.push(composable);
        }
    });
    return callbacks;
}
/* harmony default export */ __webpack_exports__["a"] = combine;

//# sourceMappingURL=combine.js.map


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setStatic */
function setStatic(key, value) {
    return {
        staticCallback: function (componentClass) {
            componentClass[key] = value;
        },
    };
}
/* harmony default export */ __webpack_exports__["a"] = setStatic;

//# sourceMappingURL=setStatic.js.map


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lifecycle__ = __webpack_require__(3);
/* unused harmony export shouldUpdate */

function shouldUpdate(callback) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lifecycle__["a" /* createComparingLifecycle */])("shouldComponentUpdateCallback", callback);
}
/* harmony default export */ __webpack_exports__["a"] = shouldUpdate;

//# sourceMappingURL=shouldUpdate.js.map


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getKeysAndSymbols */
var keys = Object.keys, getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getKeysAndSymbols = function (obj) {
    var result = keys(obj);
    if (getOwnPropertySymbols !== undefined) {
        result = result.concat(getOwnPropertySymbols(obj));
    }
    return result;
};
/* harmony default export */ __webpack_exports__["a"] = getKeysAndSymbols;

//# sourceMappingURL=getKeysAndSymbols.js.map


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export omit */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function omit(obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var result = __assign({}, obj);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (obj.hasOwnProperty(key)) {
            delete result[key];
        }
    }
    return result;
}
;
/* harmony default export */ __webpack_exports__["a"] = omit;

//# sourceMappingURL=omit.js.map


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_shallowEqual__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_shallowEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_shallowEqual__);
/* unused harmony reexport shallowEqual */


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_shallowEqual__;

//# sourceMappingURL=shallowEqual.js.map


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_convertToCSSPrefix__ = __webpack_require__(30);
/* harmony export (immutable) */ __webpack_exports__["a"] = transit;
/* harmony export (immutable) */ __webpack_exports__["b"] = resolveTransit;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

;
function transit(value, duration, timing, delay) {
    var ret = [value];
    ret.transitParams = {
        duration: duration,
        timing: timing || "ease",
        delay: delay !== undefined ? delay : 0,
    };
    return ret;
}
var nonWebkitPrefixRegexp = /^-(moz|ms|o)-/;
function resolveTransit(style, extraDelay) {
    if (extraDelay === void 0) { extraDelay = 0; }
    var transitionList = [];
    var propertyList = [];
    var processedStyle = __assign({}, style);
    for (var property in style) {
        var val = style[property];
        if (Array.isArray(val) && val.transitParams) {
            var _a = val.transitParams, duration = _a.duration, timing = _a.timing, delay = _a.delay;
            var name_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_convertToCSSPrefix__["a" /* default */])(property);
            var transition = name_1 + " " + duration + "ms " + timing + " " + (delay + extraDelay) + "ms";
            transitionList.push(transition);
            propertyList.push(name_1);
            processedStyle[property] = val[0];
        }
    }
    if (transitionList.length > 0) {
        processedStyle.transition = transitionList.join(", ");
        processedStyle.WebkitTransition = transitionList.
            filter(function (item, i) {
            return !propertyList[i].match(nonWebkitPrefixRegexp) &&
                propertyList.indexOf("-webkit-" + propertyList[i]) < 0;
        }).
            join(", ");
    }
    return processedStyle;
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transit__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StateID; });
/* unused harmony export StateIDList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ActionID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionPropKeys; });
/* unused harmony export transitionNames */
/* unused harmony export hasTransition */
/* unused harmony export getDelay */
/* unused harmony export getState */
/* unused harmony export stateFunc */
/* unused harmony export activeNewState */
/* unused harmony export defaultNewState */
/* unused harmony export appearNewState */
/* unused harmony export activeState */
/* unused harmony export defaultState */
/* unused harmony export appearInitState */
/* unused harmony export enterInitState */
/* unused harmony export leaveInitState */
/* unused harmony export appearPrepareState */
/* unused harmony export enterPrepareState */
/* unused harmony export leavePrepareState */
/* unused harmony export appearTriggeredState */
/* unused harmony export enterTriggeredState */
/* unused harmony export leaveTriggeredState */
/* unused harmony export appearStartedState */
/* unused harmony export enterStartedState */
/* unused harmony export leaveStartedState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* tslint:disable: variable-name no-switch-case-fall-through */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var StateID;
(function (StateID) {
    StateID[StateID["EntryPoint"] = 0] = "EntryPoint";
    StateID[StateID["DefaultNew"] = 1] = "DefaultNew";
    StateID[StateID["ActiveNew"] = 2] = "ActiveNew";
    StateID[StateID["AppearNew"] = 3] = "AppearNew";
    StateID[StateID["Default"] = 4] = "Default";
    StateID[StateID["Active"] = 5] = "Active";
    StateID[StateID["AppearInit"] = 6] = "AppearInit";
    StateID[StateID["AppearPrepare"] = 7] = "AppearPrepare";
    StateID[StateID["AppearTriggered"] = 8] = "AppearTriggered";
    StateID[StateID["AppearStarted"] = 9] = "AppearStarted";
    StateID[StateID["EnterInit"] = 10] = "EnterInit";
    StateID[StateID["EnterPrepare"] = 11] = "EnterPrepare";
    StateID[StateID["EnterTriggered"] = 12] = "EnterTriggered";
    StateID[StateID["EnterStarted"] = 13] = "EnterStarted";
    StateID[StateID["LeaveInit"] = 14] = "LeaveInit";
    StateID[StateID["LeavePrepare"] = 15] = "LeavePrepare";
    StateID[StateID["LeaveTriggered"] = 16] = "LeaveTriggered";
    StateID[StateID["LeaveStarted"] = 17] = "LeaveStarted";
})(StateID || (StateID = {}));
var StateIDList = [
    StateID.ActiveNew, StateID.DefaultNew, StateID.AppearNew,
    StateID.Active, StateID.Default,
    StateID.AppearInit, StateID.AppearTriggered, StateID.AppearStarted,
    StateID.EnterInit, StateID.EnterTriggered, StateID.EnterStarted,
    StateID.LeaveInit, StateID.LeaveTriggered, StateID.LeaveStarted,
    StateID.AppearPrepare, StateID.EnterPrepare, StateID.LeavePrepare,
];
var ActionID;
(function (ActionID) {
    ActionID[ActionID["New"] = 0] = "New";
    ActionID[ActionID["Mount"] = 1] = "Mount";
    ActionID[ActionID["TransitionInit"] = 2] = "TransitionInit";
    ActionID[ActionID["TransitionPrepare"] = 3] = "TransitionPrepare";
    ActionID[ActionID["TransitionTrigger"] = 4] = "TransitionTrigger";
    ActionID[ActionID["TransitionStart"] = 5] = "TransitionStart";
    ActionID[ActionID["TransitionComplete"] = 6] = "TransitionComplete";
    ActionID[ActionID["Timeout"] = 7] = "Timeout";
})(ActionID || (ActionID = {}));
var actionPropKeys = [
    "active",
    "transitionAppear",
    "transitionDelay",
    "defaultStyle",
    "activeStyle",
    "appearStyle",
    "enterStyle",
    "leaveStyle",
    "appearInitStyle",
    "enterInitStyle",
    "leaveInitStyle",
    "defaultClassName",
    "activeClassName",
    "appearClassName",
    "enterClassName",
    "leaveClassName",
    "appearInitClassName",
    "enterInitClassName",
    "leaveInitClassName",
];
var transitionNames = ["enter", "leave", "appear"];
function hasTransition(name, props) {
    var result = props[name + "Style"] !== undefined || props[name + "ClassName"] !== undefined;
    return !result && name === "appear"
        ? hasTransition("enter", props)
        : result;
}
function getDelay(name, delay) {
    if (!delay) {
        return 0;
    }
    if (typeof delay === "number") {
        return delay;
    }
    return delay[name] ? delay[name] : 0;
}
function getState(id, name, props, params) {
    if (params === void 0) { params = {}; }
    if (name === "appear" && !props.appearStyle && !props.appearClassName) {
        return getState(id, "enter", props, params);
    }
    var style;
    var className;
    var inTransition = false;
    if (params.mode === "init" || params.mode === "prepare") {
        style = props[name + "InitStyle"];
        className = props[name + "InitClassName"];
        if (style === undefined && className === undefined) {
            if (name === "enter" || name === "appear") {
                style = props.defaultStyle;
                className = props.defaultClassName;
            }
            else if (name === "leave") {
                style = props.activeStyle;
                className = props.activeClassName;
            }
        }
        // Setting transition before starting one fixes issues on IE & Edge...
        if (params.mode === "prepare" && style !== undefined) {
            var tmp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__transit__["b" /* resolveTransit */])(props[name + "Style"], getDelay(name, props.transitionDelay));
            if (tmp.transition) {
                style = __assign({}, style, { transition: tmp.transition });
            }
        }
    }
    else {
        style = props[name + "Style"];
        className = props[name + "ClassName"];
        if (["enter", "appear", "leave"].indexOf(name) >= 0) {
            inTransition = true;
            style = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__transit__["b" /* resolveTransit */])(style, getDelay(name, props.transitionDelay));
        }
    }
    style = style || {};
    className = className || "";
    return {
        id: id,
        style: style,
        className: className,
        inTransition: inTransition,
    };
}
function stateFunc(id, name, params) {
    if (params === void 0) { params = {}; }
    return function (props) { return getState(id, name, props, params); };
}
var activeNewState = stateFunc(StateID.ActiveNew, "active");
var defaultNewState = stateFunc(StateID.DefaultNew, "default");
var appearNewState = stateFunc(StateID.AppearNew, "appear", { mode: "init" });
var activeState = stateFunc(StateID.Active, "active");
var defaultState = stateFunc(StateID.Default, "default");
var appearInitState = stateFunc(StateID.AppearInit, "appear", { mode: "init" });
var enterInitState = stateFunc(StateID.EnterInit, "enter", { mode: "init" });
var leaveInitState = stateFunc(StateID.LeaveInit, "leave", { mode: "init" });
var appearPrepareState = stateFunc(StateID.AppearPrepare, "appear", { mode: "prepare" });
var enterPrepareState = stateFunc(StateID.EnterPrepare, "enter", { mode: "prepare" });
var leavePrepareState = stateFunc(StateID.LeavePrepare, "leave", { mode: "prepare" });
var appearTriggeredState = stateFunc(StateID.AppearTriggered, "appear");
var enterTriggeredState = stateFunc(StateID.EnterTriggered, "enter");
var leaveTriggeredState = stateFunc(StateID.LeaveTriggered, "leave");
var appearStartedState = stateFunc(StateID.AppearStarted, "appear");
var enterStartedState = stateFunc(StateID.EnterStarted, "enter");
var leaveStartedState = stateFunc(StateID.LeaveStarted, "leave");
var invalidTransitionError = function (stateID, actionID) {
    return new Error("invalid state transition from " + StateID[stateID] + " with " + ActionID[actionID]);
};
var reducer = function (stateID, action) {
    var props = action.props;
    var nextState;
    switch (action.kind) {
        case ActionID.New:
            if (stateID !== StateID.EntryPoint) {
                throw new Error("invalid entrypoint");
            }
            if (props.active) {
                if (props.transitionAppear) {
                    return { state: appearNewState(props) };
                }
                return { state: activeNewState(props) };
            }
            if (!props.transitionAppear && props.active) {
                return { state: activeNewState(props) };
            }
            return { state: defaultNewState(props) };
        case ActionID.Mount:
            switch (stateID) {
                case StateID.AppearNew:
                    return reducer(stateID, { kind: ActionID.TransitionTrigger, props: props });
                default:
                    return null;
            }
        case ActionID.TransitionInit:
            switch (stateID) {
                case StateID.DefaultNew:
                case StateID.Default:
                    if (!hasTransition("enter", props)) {
                        return { state: activeState(props), completed: true };
                    }
                    nextState = enterInitState(props);
                    break;
                case StateID.ActiveNew:
                case StateID.Active:
                    if (!hasTransition("leave", props)) {
                        return { state: defaultState(props), completed: true };
                    }
                    nextState = leaveInitState(props);
                    break;
                case StateID.AppearNew:
                    if (!hasTransition("appear", props)) {
                        return { state: activeState(props), completed: true };
                    }
                    nextState = appearInitState(props);
                    break;
                default:
                    throw invalidTransitionError(stateID, action.kind);
            }
            ;
            return { state: nextState, pending: ActionID.TransitionPrepare };
        case ActionID.TransitionPrepare:
            switch (stateID) {
                case StateID.EnterInit:
                    if (!props.active) {
                        return { state: defaultState(props), completed: true };
                    }
                    nextState = enterPrepareState(props);
                    break;
                case StateID.LeaveInit:
                    if (props.active) {
                        return { state: activeState(props), completed: true };
                    }
                    nextState = leavePrepareState(props);
                    break;
                case StateID.AppearInit:
                    if (!props.active) {
                        return { state: defaultState(props), completed: true };
                    }
                    nextState = appearPrepareState(props);
                    break;
                default:
                    throw invalidTransitionError(stateID, action.kind);
            }
            ;
            return { state: nextState, pending: ActionID.TransitionTrigger };
        case ActionID.TransitionStart:
            switch (stateID) {
                case StateID.EnterTriggered:
                    return { state: enterStartedState(props) };
                case StateID.LeaveTriggered:
                    return { state: leaveStartedState(props) };
                case StateID.AppearTriggered:
                    return { state: appearStartedState(props) };
                default:
                    // We don't error out, because the workaround for transitionstart
                    // could happen after transitionend.
                    return null;
            }
        case ActionID.TransitionComplete:
            switch (stateID) {
                case StateID.AppearTriggered:
                case StateID.AppearStarted:
                case StateID.EnterTriggered:
                case StateID.EnterStarted:
                    return { state: activeState(props), completed: true };
                case StateID.LeaveTriggered:
                case StateID.LeaveStarted:
                    return { state: defaultState(props), completed: true };
                default:
                    throw invalidTransitionError(stateID, action.kind);
            }
        case ActionID.TransitionTrigger:
            switch (stateID) {
                case StateID.ActiveNew:
                case StateID.Active:
                case StateID.DefaultNew:
                case StateID.Default:
                case StateID.AppearNew:
                    return reducer(stateID, { kind: ActionID.TransitionInit, props: props });
                case StateID.EnterInit:
                    return { state: defaultState(props), completed: true };
                case StateID.LeaveInit:
                    return { state: activeState(props), completed: true };
                case StateID.AppearInit:
                    return { state: defaultState(props), completed: true };
                case StateID.EnterPrepare:
                    if (props.active) {
                        return { state: enterTriggeredState(props) };
                    }
                    return { state: defaultState(props), completed: true };
                case StateID.LeavePrepare:
                    if (!props.active) {
                        return { state: leaveTriggeredState(props) };
                    }
                    return { state: activeState(props), completed: true };
                case StateID.AppearPrepare:
                    if (props.active) {
                        return { state: appearTriggeredState(props) };
                    }
                    return { state: defaultState(props), completed: true };
                case StateID.EnterTriggered:
                    return { state: defaultState(props), completed: true };
                case StateID.LeaveTriggered:
                    return { state: activeState(props), completed: true };
                case StateID.AppearTriggered:
                    return { state: defaultState(props), completed: true };
                case StateID.AppearStarted:
                case StateID.EnterStarted:
                    return { state: leaveStartedState(props) };
                case StateID.LeaveStarted:
                    return { state: enterStartedState(props) };
                default:
                    throw invalidTransitionError(stateID, action.kind);
            }
        case ActionID.Timeout:
            switch (stateID) {
                case StateID.AppearTriggered:
                case StateID.AppearStarted:
                case StateID.EnterTriggered:
                case StateID.EnterStarted:
                    return { state: activeState(props), completed: true };
                case StateID.LeaveTriggered:
                case StateID.LeaveStarted:
                    return { state: defaultState(props), completed: true };
                default:
                    throw invalidTransitionError(stateID, action.kind);
            }
        default:
    }
    throw new Error("unexpected error");
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseDuration */
function parseDuration(duration) {
    var parsed = parseFloat(duration);
    if (duration.match(/ms$/)) {
        return parsed;
    }
    return parsed * 1000;
}
/* harmony default export */ __webpack_exports__["a"] = parseDuration;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blueprint__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_getDisplayName__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_getUniqueKey__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_isReferentiallyTransparentFunctionComponent__ = __webpack_require__(67);
/* harmony export (immutable) */ __webpack_exports__["a"] = assemble;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






var hasWillReceivePropsCallback = function (e) { return e.kind === "componentWillReceivePropsCallback"; };
var AssemblyBase = (function (_super) {
    __extends(AssemblyBase, _super);
    function AssemblyBase(blueprint, target, isReferentiallyTransparent, props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.pendingDataUpdate = false;
        _this.newestState = {};
        _this.unmounted = false;
        _this.newestProps = props;
        _this.newestContext = context;
        _this.isReferentiallyTransparent = isReferentiallyTransparent;
        _this.target = target;
        _this.callbackList = blueprint.instanceCallbacks();
        _this.hasWillReceivePropsCallback = _this.callbackList.some(hasWillReceivePropsCallback);
        _this.computed = _this.runInstanceCallbacks({ props: props, context: context, component: _this.target });
        _this.state = _this.newestState;
        return _this;
    }
    AssemblyBase.prototype.getChildContext = function () { return this.computed.childContext; };
    AssemblyBase.prototype.componentWillMount = function () { return this.runLifeCycleCallbacks("componentWillMountCallback"); };
    AssemblyBase.prototype.componentDidMount = function () { return this.runLifeCycleCallbacks("componentDidMountCallback"); };
    AssemblyBase.prototype.componentWillUnmount = function () {
        this.unmounted = true;
        return this.runLifeCycleCallbacks("componentWillUnmountCallback");
    };
    AssemblyBase.prototype.componentWillUpdate = function () { return this.runLifeCycleCallbacks("componentWillUpdateCallback"); };
    AssemblyBase.prototype.componentDidUpdate = function () { return this.runLifeCycleCallbacks("componentDidUpdateCallback"); };
    AssemblyBase.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        this.newestProps = nextProps;
        this.newestContext = nextContext;
        this.handleDataUpdate({
            props: nextProps,
            context: nextContext,
            component: this.target,
        });
    };
    AssemblyBase.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        if (this.state !== nextState && !this.hasWillReceivePropsCallback) {
            // State based props was not computed before, do it now.
            this.handleDataUpdate({
                props: nextProps,
                context: nextContext,
                component: this.target,
            });
        }
        var callbacks = this.computed.lifeCycleCallbacks.shouldComponentUpdateCallback;
        if (callbacks) {
            for (var i = 0; i < callbacks.length; i++) {
                if (!callbacks[i]()) {
                    return false;
                }
            }
        }
        return true;
    };
    AssemblyBase.prototype.render = function () {
        var _a = this.computed, Component = _a.component, props = _a.props;
        if (!Component) {
            return null;
        }
        if (Component === this.target && this.isReferentiallyTransparent ||
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_isReferentiallyTransparentFunctionComponent__["a" /* default */])(Component)) {
            return Component(props);
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, __assign({}, props));
    };
    AssemblyBase.prototype.runLifeCycleCallbacks = function (name) {
        var callbacks = this.computed.lifeCycleCallbacks[name];
        if (callbacks) {
            callbacks.forEach(function (cb) { return cb(); });
        }
    };
    AssemblyBase.prototype.applyStateDiff = function (stateDiff) {
        this.newestState = __assign({}, this.newestState, stateDiff);
    };
    AssemblyBase.prototype.setStateWithLifeCycle = function (stateDiff, callback, init, startAt) {
        if (init === void 0) { init = this.defaultInit; }
        if (startAt === void 0) { startAt = 0; }
        if (this.pendingDataUpdate) {
            // we are in the middle of a data update.
            if (!this.pendingDataUpdate.dirty || startAt < this.pendingDataUpdate.startAt) {
                this.pendingDataUpdate.dirty = true;
                this.pendingDataUpdate.init = init;
                this.pendingDataUpdate.startAt = startAt;
            }
            if (callback) {
                this.pendingDataUpdate.callbacks.push(callback);
            }
            this.applyStateDiff(stateDiff);
        }
        else if (this.hasWillReceivePropsCallback) {
            // runs callbacks with the new state which will run the `componentWillReceiveProps` lifecycle
            this.handleDataUpdate(init, startAt, stateDiff, callback);
        }
        else {
            // state changes are batched and props will be recalculated in `shouldComponentUpdate`.
            this.applyStateDiff(stateDiff);
            this.setState(this.newestState, callback);
        }
    };
    Object.defineProperty(AssemblyBase.prototype, "defaultInit", {
        get: function () {
            return {
                props: this.newestProps,
                context: this.newestContext,
                component: this.target,
            };
        },
        enumerable: true,
        configurable: true
    });
    AssemblyBase.prototype.handleDataUpdate = function (init, startAt, stateDiff, callback) {
        if (init === void 0) { init = this.defaultInit; }
        if (startAt === void 0) { startAt = 0; }
        if (stateDiff === void 0) { stateDiff = {}; }
        if (callback === void 0) { callback = null; }
        var oldState = this.newestState;
        if (stateDiff) {
            this.applyStateDiff(stateDiff);
        }
        this.pendingDataUpdate = { callbacks: callback ? [callback] : [] };
        this.computed = this.runInstanceCallbacks(init, startAt);
        var callbacks = this.pendingDataUpdate.callbacks;
        this.pendingDataUpdate = null;
        if (this.newestState !== oldState) {
            // Component could be unmounted because something during the lifecycle call can
            // cause a parent component to unmount this before it completed its data update.
            if (!this.unmounted) {
                this.setState(this.newestState, function () { return callbacks.forEach(function (cb) { return cb(); }); });
            }
        }
    };
    AssemblyBase.prototype.runInstanceCallbacks = function (init, startAt) {
        var _this = this;
        if (startAt === void 0) { startAt = 0; }
        var interim = __assign({}, init);
        if (!interim.lifeCycleCallbacks) {
            interim.lifeCycleCallbacks = {};
        }
        var _loop_1 = function (idx) {
            var entry = this_1.callbackList[idx];
            switch (entry.kind) {
                case "propsCallback":
                    interim.props = entry.callback(interim.props, this_1.newestState, interim.context);
                    break;
                case "stateCallback":
                    {
                        var sc_1 = entry;
                        if (this_1.hasWillReceivePropsCallback) {
                            sc_1.init = __assign({}, interim);
                            sc_1.startAt = idx;
                        }
                        if (!sc_1.called) {
                            sc_1.called = true;
                            var initState = function (name, value) {
                                var unique = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_getUniqueKey__["a" /* default */])(name, _this.newestState);
                                _this.applyStateDiff((_a = {}, _a[unique] = value, _a));
                                var updater = function (val, callback) {
                                    _this.setStateWithLifeCycle((_a = {}, _a[unique] = val, _a), callback, sc_1.init, sc_1.startAt);
                                    var _a;
                                };
                                return { name: unique, updater: updater };
                                var _a;
                            };
                            entry.callback(initState, interim.props, this_1.newestState, interim.context);
                        }
                    }
                    break;
                case "childContextCallback":
                    interim.childContext = entry.callback(interim.childContext, interim.props, this_1.newestState, interim.context);
                    break;
                case "skipCallback":
                    idx += entry.callback(interim.props, this_1.newestState, interim.context);
                    break;
                case "renderCallback":
                    interim.component = entry.callback(interim.component, interim.props, this_1.newestState, interim.context);
                    break;
                case "lazyLoadCallback":
                    var list = entry.callback(interim.props, this_1.newestState, interim.context);
                    if (list && list.length > 0) {
                        this_1.callbackList = this_1.callbackList.slice(0, idx + 1).concat(list, this_1.callbackList.slice(idx + 1));
                        if (!this_1.hasWillReceivePropsCallback) {
                            this_1.hasWillReceivePropsCallback = list.some(hasWillReceivePropsCallback);
                        }
                    }
                    break;
                case "componentWillReceivePropsCallback":
                    {
                        var cc = entry;
                        var callback = entry.callback(interim.props, this_1.newestState, interim.context);
                        if (cc.called && this_1.pendingDataUpdate) {
                            // Props changed so we need to run this lifecycle.
                            callback();
                            if (this_1.pendingDataUpdate.dirty) {
                                // State changed during lifecycle, so we need to recalculated from an earlier position.
                                this_1.pendingDataUpdate.dirty = false;
                                return { value: this_1.runInstanceCallbacks(this_1.pendingDataUpdate.init, this_1.pendingDataUpdate.startAt) };
                            }
                        }
                        else {
                            cc.called = true;
                        }
                    }
                    break;
                case "componentWillMountCallback":
                case "componentDidMountCallback":
                case "componentWillUnmountCallback":
                case "shouldComponentUpdateCallback":
                case "componentWillUpdateCallback":
                case "componentDidUpdateCallback":
                    {
                        var hasCallbacks = interim.lifeCycleCallbacks[entry.kind] !== undefined;
                        var callback = entry.callback(interim.props, this_1.newestState, interim.context);
                        interim.lifeCycleCallbacks = __assign({}, interim.lifeCycleCallbacks, (_a = {}, _a[entry.kind] = hasCallbacks
                            ? interim.lifeCycleCallbacks[entry.kind].concat([callback]) : [callback], _a));
                    }
                    break;
                default:
                    throw new Error("Unknown callback entry '" + entry.kind + "'");
            }
            out_idx_1 = idx;
            var _a;
        };
        var this_1 = this, out_idx_1;
        for (var idx = startAt; idx < this.callbackList.length; idx++) {
            var state_1 = _loop_1(idx);
            idx = out_idx_1;
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return interim;
    };
    return AssemblyBase;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
function assemble() {
    var callbacks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        callbacks[_i] = arguments[_i];
    }
    var blueprint = __WEBPACK_IMPORTED_MODULE_1__blueprint__["g" /* createBlueprint */].apply(void 0, callbacks);
    return function (target) {
        var isReferentiallyTransparent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_isReferentiallyTransparentFunctionComponent__["a" /* default */])(target);
        var targetName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_getDisplayName__["a" /* default */])(target);
        var assembled = (_a = (function (_super) {
                __extends(class_1, _super);
                function class_1(props, context) {
                    return _super.call(this, blueprint, target, isReferentiallyTransparent, props, context) || this;
                }
                return class_1;
            }(AssemblyBase)),
            _a.displayName = isReferentiallyTransparent
                ? targetName
                : "Assembled(" + targetName + ")",
            _a);
        blueprint.staticCallbacks.forEach(function (cb) { return cb(assembled, target); });
        return assembled;
        var _a;
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = assemble;

//# sourceMappingURL=assemble.js.map


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export noOp */
var noOp = {};
/* unused harmony default export */ var _unused_webpack_default_export = noOp;

//# sourceMappingURL=noOp.js.map


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = renderComponent;

function renderComponent(component) {
    return {
        instanceCallbacks: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["a" /* renderCallback */])(function () { return component; }),
        ],
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = renderComponent;

//# sourceMappingURL=renderComponent.js.map


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getDisplayName */
/**
 * @license
 * Taken from https://github.com/acdlite/recompose
 * The MIT License (MIT)
 * Copyright (c) 2015-2016 Andrew Clark
 */
/**
 * @license
 * Taken from https://github.com/acdlite/recompose
 * The MIT License (MIT)
 * Copyright (c) 2015-2016 Andrew Clark
 */ var getDisplayName = function (Component) {
    if (typeof Component === "string") {
        return Component;
    }
    if (!Component) {
        return undefined;
    }
    return Component.displayName || Component.name || "Component";
};
/* harmony default export */ __webpack_exports__["a"] = getDisplayName;

//# sourceMappingURL=getDisplayName.js.map


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reassemble__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composables_withTransitionState__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__composables_mergeWithBaseStyle__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__composables_withTransitionInfo__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__composables_withTimeout__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__composables_withTransitionObserver__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__composables_withWorkaround__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__composables_withDOMNodeCallback__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__composables_preventPhantomEvents__ = __webpack_require__(23);
/* unused harmony export CSSTransitionInner */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSSTransition; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};











var withDefaultProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reassemble__["a" /* defaultProps */])({
    component: "div",
});
var mapPropsToInner = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reassemble__["b" /* omitProps */])("active", "transitionAppear", "defaultStyle", "activeStyle", "appearStyle", "enterStyle", "leaveStyle", "appearInitStyle", "enterInitStyle", "leaveInitStyle", "defaultClassName", "activeClassName", "appearClassName", "enterClassName", "leaveClassName", "appearInitClassName", "enterInitClassName", "leaveInitClassName", "transitionDelay", "onTransitionComplete", "onTransitionBegin", "transitionInfo", "transitionState", "timeout", "getDOMNode");
var enhance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reassemble__["c" /* assemble */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reassemble__["d" /* setDisplayName */])("CSSTransition"), withDefaultProps, __WEBPACK_IMPORTED_MODULE_9__composables_withDOMNodeCallback__["a" /* withDOMNodeCallback */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__composables_withTransitionState__["a" /* withTransitionState */])(__WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* reducer */]), __WEBPACK_IMPORTED_MODULE_4__composables_mergeWithBaseStyle__["a" /* mergeWithBaseStyle */], __WEBPACK_IMPORTED_MODULE_5__composables_withTransitionInfo__["a" /* withTransitionInfo */], __WEBPACK_IMPORTED_MODULE_6__composables_withTimeout__["a" /* withTimeout */], __WEBPACK_IMPORTED_MODULE_7__composables_withTransitionObserver__["a" /* withTransitionObserver */], __WEBPACK_IMPORTED_MODULE_8__composables_withWorkaround__["a" /* withWorkaround */], __WEBPACK_IMPORTED_MODULE_10__composables_preventPhantomEvents__["a" /* preventPhantomEvents */], mapPropsToInner);
var CSSTransitionInner = function (_a) {
    var Wrapper = _a.component, onDOMNodeRef = _a.onDOMNodeRef, children = _a.children, rest = __rest(_a, ["component", "onDOMNodeRef", "children"]);
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Wrapper, __assign({ ref: onDOMNodeRef }, rest, { children: children }));
};
var CSSTransition = enhance(CSSTransitionInner);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group_TransitionGroup__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group_TransitionGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transition_group_TransitionGroup__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSSTransitionGroup; });
/* unused harmony export CSSTransitionGroupChild */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



var CSSTransitionGroup = (function (_super) {
    __extends(CSSTransitionGroup, _super);
    function CSSTransitionGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mounted = false;
        _this.componentDidMount = function () { return _this.mounted = true; };
        return _this;
    }
    CSSTransitionGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, transitionAppear = _a.transitionAppear, children = _a.children, rest = __rest(_a, ["transitionAppear", "children"]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_transition_group_TransitionGroup__, __assign({}, rest), __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(children, function (child, index) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](CSSTransitionGroupChild, { transitionAppear: transitionAppear, mounted: _this.mounted, key: child.key }, child);
        })));
    };
    return CSSTransitionGroup;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

CSSTransitionGroup.defaultProps = {
    component: "div",
};
var CSSTransitionGroupChild = (function (_super) {
    __extends(CSSTransitionGroupChild, _super);
    function CSSTransitionGroupChild(props) {
        var _this = _super.call(this, props) || this;
        _this.onTransitionComplete = function () {
            var child = __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(_this.props.children);
            if (child.props.onTransitionComplete) {
                child.props.onTransitionComplete();
            }
            if (_this.leaveDone) {
                _this.leaveDone();
            }
        };
        _this.state = {
            active: true,
            transitionAppear: props.mounted || props.transitionAppear,
        };
        return _this;
    }
    CSSTransitionGroupChild.prototype.componentWillAppear = function (done) {
        done();
    };
    CSSTransitionGroupChild.prototype.componentWillEnter = function (done) {
        // component was leaving but was interrupted.
        if (!this.state.active) {
            this.setState({ active: true });
            this.leaveDone = null;
        }
        done();
    };
    CSSTransitionGroupChild.prototype.componentWillLeave = function (done) {
        this.setState({ active: false });
        this.leaveDone = done;
    };
    CSSTransitionGroupChild.prototype.render = function () {
        var _a = this, children = _a.props.children, _b = _a.state, active = _b.active, transitionAppear = _b.transitionAppear, onTransitionComplete = _a.onTransitionComplete;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(__WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(children), { active: active, transitionAppear: transitionAppear, onTransitionComplete: onTransitionComplete });
    };
    return CSSTransitionGroupChild;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));

CSSTransitionGroupChild.defaultProps = {
    transitionAppear: false,
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reassemble__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeWithBaseStyle; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var mergeClasses = function () {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(function (s) { return s; }).join(" ");
};
var mergeWithBaseStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["j" /* combine */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["k" /* withProps */])(function (_a) {
    var transitionState = _a.transitionState, style = _a.style, className = _a.className;
    return ({
        style: __assign({}, style, transitionState.style),
        className: mergeClasses(className, transitionState.className),
    });
}));


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reassemble__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return preventPhantomEvents; });

var preventPhantomEvents = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["e" /* isolate */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["f" /* withHandlers */])(function () {
    var lastTriggerTime;
    var lastTriggerTimePerformance;
    var timeUpdateRequested = false;
    return {
        requestTimeUpdate: function () { return function () {
            timeUpdateRequested = true;
        }; },
        handleTimeUpdateRequest: function () { return function () {
            if (timeUpdateRequested) {
                lastTriggerTime = Date.now();
                if (typeof performance !== "undefined" &&
                    typeof performance.now !== "undefined") {
                    lastTriggerTimePerformance = performance.now();
                }
                timeUpdateRequested = false;
            }
        }; },
        onTransitionEnd: function (_a) {
            var onTransitionEnd = _a.onTransitionEnd;
            return function (e) {
                if (!onTransitionEnd) {
                    return;
                }
                if (e.target !== e.currentTarget) {
                    onTransitionEnd(e);
                    return;
                }
                // Skip transitionEnd that comes <= 10ms after (reversing) a transition.
                // In most cases this came from the previous transition.
                var compareWith = lastTriggerTime;
                if (e.timeStamp < 1000000000000 && lastTriggerTimePerformance) {
                    compareWith = lastTriggerTimePerformance;
                }
                if (e.timeStamp - compareWith <= 10) {
                    return;
                }
                onTransitionEnd(e);
            };
        },
    };
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["g" /* onWillReceiveProps */])(function (_a, _b) {
    var active = _a.active;
    var nextActive = _b.active, requestTimeUpdate = _b.requestTimeUpdate;
    if (active !== nextActive) {
        requestTimeUpdate();
    }
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["h" /* onDidUpdate */])(function (_a) {
    var handleTimeUpdateRequest = _a.handleTimeUpdateRequest;
    return handleTimeUpdateRequest();
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["i" /* integrate */])("onTransitionEnd"));


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reassemble__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withDOMNodeCallback; });

var withDOMNodeCallback = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["f" /* withHandlers */])(function () {
    var ref;
    return {
        onDOMNodeRef: function () { return function (e) {
            ref = e;
        }; },
        getDOMNode: function () { return function () { return ref; }; },
    };
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reassemble__ = __webpack_require__(1);
/* unused harmony export timeoutMultiplier */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withTimeout; });

var timeoutMultiplier = 3;
var withTimeout = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["e" /* isolate */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["f" /* withHandlers */])(function () {
    var timeoutID;
    return {
        timeoutIn: function (_a) {
            var timeout = _a.timeout;
            return function (ms) { return timeoutID = setTimeout(timeout, ms); };
        },
        cancel: function () { return function () { return clearTimeout(timeoutID); }; },
    };
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["g" /* onWillReceiveProps */])(function (_a, _b) {
    var inTransition = _a.transitionState.inTransition, active = _a.active;
    var nextInTransition = _b.transitionState.inTransition, cancel = _b.cancel, nextActive = _b.active;
    var inTransitionChanged = inTransition !== nextInTransition;
    var interrupted = nextInTransition && active !== nextActive;
    if (inTransitionChanged || interrupted) {
        cancel();
    }
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["h" /* onDidUpdate */])(function (_a, _b) {
    var inTransition = _a.transitionState.inTransition, active = _a.active;
    var nextInTransition = _b.transitionState.inTransition, totalDuration = _b.transitionInfo.totalDuration, timeoutIn = _b.timeoutIn, nextActive = _b.active;
    var newTransition = !inTransition && nextInTransition;
    var interrupted = nextInTransition && active !== nextActive;
    if (newTransition || interrupted) {
        if (nextInTransition) {
            timeoutIn(totalDuration * timeoutMultiplier);
        }
    }
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["l" /* onWillUnmount */])(function (_a) {
    var cancel = _a.cancel;
    return cancel();
}));


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reassemble__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_parseTransition__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_parseComputedTransition__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_memoize__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withTransitionInfo; });




var withTransitionInfo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["e" /* isolate */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["f" /* withHandlers */])(function () {
    var memoized = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_memoize__["a" /* memoize */])(function (node) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_parseComputedTransition__["a" /* parseComputedTransition */])(getComputedStyle(node)); }, function (node) { return node.className; });
    return {
        parseComputedTransitionMemoized: function () { return memoized; },
    };
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["k" /* withProps */])(function (_a) {
    var style = _a.style, className = _a.className, transitionState = _a.transitionState, getDOMNode = _a.getDOMNode, parseComputedTransitionMemoized = _a.parseComputedTransitionMemoized;
    if (transitionState.inTransition) {
        var parsed = void 0;
        if (style && style.transition) {
            parsed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_parseTransition__["a" /* parseTransition */])(style.transition);
        }
        else {
            var node = getDOMNode();
            node.className = className;
            parsed = parseComputedTransitionMemoized(node);
        }
        var first = parsed[0], last = parsed[1];
        return {
            transitionInfo: {
                firstPropertyDelay: first.delay,
                firstProperty: first.property,
                lastProperty: last.property,
                totalDuration: last.duration + last.delay,
            },
        };
    }
    return { transitionInfo: {} };
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["i" /* integrate */])("transitionInfo"));


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reassemble__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_matchTransitionProperty__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withTransitionObserver; });


var withTransitionObserver = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["f" /* withHandlers */])({
    onTransitionStart: function (_a) {
        var firstProperty = _a.transitionInfo.firstProperty, inTransition = _a.transitionState.inTransition, onTransitionStart = _a.onTransitionStart, onTransitionBegin = _a.onTransitionBegin;
        return function (e) {
            if (onTransitionStart) {
                onTransitionStart(e);
            }
            if (!inTransition || e.target !== e.currentTarget ||
                !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_matchTransitionProperty__["a" /* default */])(e.propertyName, firstProperty)) {
                return;
            }
            onTransitionBegin();
        };
    },
    onTransitionEnd: function (_a) {
        var lastProperty = _a.transitionInfo.lastProperty, inTransition = _a.transitionState.inTransition, onTransitionEnd = _a.onTransitionEnd, onTransitionComplete = _a.onTransitionComplete;
        return function (e) {
            if (onTransitionEnd) {
                onTransitionEnd(e);
            }
            if (!inTransition || e.target !== e.currentTarget ||
                !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_matchTransitionProperty__["a" /* default */])(e.propertyName, lastProperty)) {
                return;
            }
            onTransitionComplete();
        };
    },
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reassemble__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_runInFrame__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_pick__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withTransitionState; });




var pickTransitionState = function (state) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_pick__["a" /* default */])(state, "style", "className", "inTransition", "id"); };
var withTransitionState = function (reduce) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["j" /* combine */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["e" /* isolate */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["k" /* withProps */])(function (props) { return ({ actionProps: __WEBPACK_IMPORTED_MODULE_2__utils_pick__["a" /* default */].apply(void 0, [props].concat(__WEBPACK_IMPORTED_MODULE_3__reducer__["b" /* actionPropKeys */])) }); }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["m" /* withState */])("transitionState", "setTransitionState", function (_a) {
    var actionProps = _a.actionProps;
    return pickTransitionState(reduce(__WEBPACK_IMPORTED_MODULE_3__reducer__["c" /* StateID */].EntryPoint, { kind: __WEBPACK_IMPORTED_MODULE_3__reducer__["d" /* ActionID */].New, props: actionProps }).state);
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["f" /* withHandlers */])(function (initialProps) {
    var stateID = reduce(__WEBPACK_IMPORTED_MODULE_3__reducer__["c" /* StateID */].EntryPoint, { kind: __WEBPACK_IMPORTED_MODULE_3__reducer__["d" /* ActionID */].New, props: initialProps }).state.id;
    var cancelPending = null;
    var pendingCallback;
    var cancelPendingIfExistent = function () {
        if (cancelPending) {
            cancelPending();
            cancelPending = null;
        }
    };
    return {
        cancelPendingIfExistent: function () { return cancelPendingIfExistent; },
        runPending: function () { return function () {
            var callback = pendingCallback;
            pendingCallback = null;
            if (callback) {
                callback();
            }
        }; },
        dispatch: function (_a) {
            var actionProps = _a.actionProps, onTransitionComplete = _a.onTransitionComplete, setTransitionState = _a.setTransitionState;
            var run = function (actionID) {
                var result = reduce(stateID, { kind: actionID, props: actionProps });
                if (!result) {
                    return;
                }
                if (result.completed && onTransitionComplete) {
                    onTransitionComplete();
                }
                var state = result.state, pending = result.pending;
                stateID = state.id;
                cancelPendingIfExistent();
                if (pending) {
                    pendingCallback = function () {
                        cancelPending = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_runInFrame__["a" /* default */])(1, function () { return run(pending); });
                    };
                }
                setTransitionState(pickTransitionState(state));
            };
            return run;
        },
    };
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["f" /* withHandlers */])({
    onTransitionBegin: function (_a) {
        var dispatch = _a.dispatch;
        return function () { return dispatch(__WEBPACK_IMPORTED_MODULE_3__reducer__["d" /* ActionID */].TransitionStart); };
    },
    onTransitionComplete: function (_a) {
        var dispatch = _a.dispatch;
        return function () { return dispatch(__WEBPACK_IMPORTED_MODULE_3__reducer__["d" /* ActionID */].TransitionComplete); };
    },
    timeout: function (_a) {
        var dispatch = _a.dispatch;
        return function () { return dispatch(__WEBPACK_IMPORTED_MODULE_3__reducer__["d" /* ActionID */].Timeout); };
    },
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["n" /* onDidMount */])(function (_a) {
    var dispatch = _a.dispatch;
    dispatch(__WEBPACK_IMPORTED_MODULE_3__reducer__["d" /* ActionID */].Mount);
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["g" /* onWillReceiveProps */])(function (_a, _b) {
    var prevActive = _a.active;
    var nextActive = _b.active, dispatch = _b.dispatch;
    if (prevActive === nextActive) {
        return;
    }
    dispatch(__WEBPACK_IMPORTED_MODULE_3__reducer__["d" /* ActionID */].TransitionTrigger);
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["h" /* onDidUpdate */])(function (_a) {
    var runPending = _a.runPending;
    runPending();
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["l" /* onWillUnmount */])(function (_a) {
    var cancelPendingIfExistent = _a.cancelPendingIfExistent;
    cancelPendingIfExistent();
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reassemble__["i" /* integrate */])("timeout", "transitionState", "onTransitionBegin", "onTransitionComplete"))); };


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reassemble__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withWorkaround; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var withWorkaround = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reassemble__["j" /* combine */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reassemble__["f" /* withHandlers */])({
    workaroundHandler: function (_a) {
        var firstProperty = _a.transitionInfo.firstProperty, onTransitionStart = _a.onTransitionStart;
        return function () {
            onTransitionStart({ propertyName: firstProperty });
        };
    },
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reassemble__["k" /* withProps */])(function (_a) {
    var firstPropertyDelay = _a.transitionInfo.firstPropertyDelay, inTransition = _a.transitionState.inTransition, workaroundHandler = _a.workaroundHandler, children = _a.children;
    var workaroundProps = {
        key: "workaround",
        style: { opacity: 0.9 },
    };
    var transition = "opacity 1ms linear " + firstPropertyDelay + "ms";
    if (inTransition) {
        workaroundProps.onTransitionEnd = workaroundHandler;
        workaroundProps.style = { opacity: 1.0, transition: transition, WebkitTransition: transition };
    }
    return {
        children: [__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", __assign({}, workaroundProps))].concat(__WEBPACK_IMPORTED_MODULE_0_react__["Children"].toArray(children)),
    };
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reassemble__["b" /* omitProps */])("workaroundHandler", "onTransitionStart"));


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export convertToCSSPrefix */
function convertToCSSPrefix(property) {
    return property
        .replace(/^Moz/, "-moz-")
        .replace(/^ms/, "-ms-")
        .replace(/^O/, "-o-")
        .replace(/^Webkit/, "-webkit-")
        .toLowerCase();
}
/* harmony default export */ __webpack_exports__["a"] = convertToCSSPrefix;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__removeVendorPrefix__ = __webpack_require__(36);
/* unused harmony export matchTransitionProperty */

function matchTransitionProperty(subject, property) {
    if (property === "all") {
        return true;
    }
    var sub = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__removeVendorPrefix__["a" /* default */])(subject);
    var prop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__removeVendorPrefix__["a" /* default */])(property);
    if (sub.length < prop.length) {
        return false;
    }
    else if (sub.length === prop.length) {
        return sub === prop;
    }
    return sub.substr(0, prop.length) === prop;
}
/* harmony default export */ __webpack_exports__["a"] = matchTransitionProperty;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = memoize;
function memoize(cb, hasher) {
    var cache = {};
    var ret = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var hash = hasher.apply(void 0, args);
        if (hash in cache) {
            return cache[hash];
        }
        var result = cb.apply(void 0, args);
        cache[hash] = result;
        return result;
    };
    return ret;
}
/* unused harmony default export */ var _unused_webpack_default_export = memoize;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parseDuration__ = __webpack_require__(15);
/* harmony export (immutable) */ __webpack_exports__["a"] = parseComputedTransition;

function parseComputedTransition(computed) {
    var lastProperty = null;
    var firstProperty = null;
    var lastPropertyTotalDuration = -1;
    var firstPropertyDelay = 99999999;
    var properties = computed.transitionProperty.split(/\s*,\s*/);
    var delays = computed.transitionDelay.split(/\s*,\s*/);
    var durations = computed.transitionDuration.split(/\s*,\s*/);
    properties.forEach(function (property, i) {
        var duration = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parseDuration__["a" /* default */])(durations[i]);
        var delay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parseDuration__["a" /* default */])(delays[i]);
        var totalDuration = duration + delay;
        if (totalDuration > lastPropertyTotalDuration) {
            lastPropertyTotalDuration = totalDuration;
            lastProperty = { property: property, duration: duration, delay: delay };
        }
        if (delay < firstPropertyDelay) {
            firstPropertyDelay = delay;
            firstProperty = { property: property, duration: duration, delay: delay };
        }
    });
    return [firstProperty, lastProperty];
}
/* unused harmony default export */ var _unused_webpack_default_export = parseComputedTransition;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parseDuration__ = __webpack_require__(15);
/* harmony export (immutable) */ __webpack_exports__["a"] = parseTransition;

function parseTransition(transition) {
    var lastProperty = null;
    var firstProperty = null;
    var lastPropertyTotalDuration = -1;
    var firstPropertyDelay = 99999999;
    transition.split(/\s*,\s*(?![^\(]*\))/g).forEach(function (entry) {
        var parts = entry.split(/\s+(?![^\(]*\))/g);
        var property = parts.filter(function (p) { return p.match(/^[a-z\-A-Z]+$/); })[0];
        var _a = parts.filter(function (p) { return p.match(/^[0-9]+m?s$/); }).map(function (p) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parseDuration__["a" /* default */])(p); }), _b = _a[0], duration = _b === void 0 ? 0 : _b, _c = _a[1], delay = _c === void 0 ? 0 : _c;
        var totalDuration = duration + delay;
        if (totalDuration > lastPropertyTotalDuration) {
            lastPropertyTotalDuration = totalDuration;
            lastProperty = { property: property, duration: duration, delay: delay };
        }
        if (delay < firstPropertyDelay) {
            firstPropertyDelay = delay;
            firstProperty = { property: property, duration: duration, delay: delay };
        }
    });
    return [firstProperty, lastProperty];
}
/* unused harmony default export */ var _unused_webpack_default_export = parseTransition;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reassemble_cjs_utils_pick__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reassemble_cjs_utils_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reassemble_cjs_utils_pick__);
/* unused harmony reexport pick */


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_reassemble_cjs_utils_pick___default.a;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export removeVendorPrefix */
function removeVendorPrefix(val) {
    return val.replace(/^-(webkit|moz|ms|o)-/, "");
}
/* harmony default export */ __webpack_exports__["a"] = removeVendorPrefix;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export runInFrame */
var raf = typeof requestAnimationFrame === "undefined"
    ? function (callback) { return setTimeout(callback, 17); }
    : requestAnimationFrame;
var runInFrame = function (no, callback) {
    var cur = 0;
    var canceled = false;
    var loop = function () {
        if (canceled) {
            return;
        }
        if (cur <= no) {
            cur++;
            raf(loop);
            return;
        }
        callback();
    };
    loop();
    return function () { canceled = true; };
};
/* harmony default export */ __webpack_exports__["a"] = runInFrame;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ChildMapping = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _react2.default.PropTypes.any,
  childFactory: _react2.default.PropTypes.func,
  children: _react2.default.PropTypes.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, (TransitionGroup.__proto__ || Object.getPrototypeOf(TransitionGroup)).call(this, props, context));

    _this.performAppear = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.childRefs[key];

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key));
      } else {
        _this._handleDoneAppearing(key);
      }
    };

    _this._handleDoneAppearing = function (key) {
      var component = _this.childRefs[key];
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key);
      }
    };

    _this.performEnter = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.childRefs[key];

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key));
      } else {
        _this._handleDoneEntering(key);
      }
    };

    _this._handleDoneEntering = function (key) {
      var component = _this.childRefs[key];
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key);
      }
    };

    _this.performLeave = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.childRefs[key];
      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key);
      }
    };

    _this._handleDoneLeaving = function (key) {
      var component = _this.childRefs[key];

      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.performEnter(key);
      } else {
        _this.setState(function (state) {
          var newChildren = Object.assign({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  _createClass(TransitionGroup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.currentlyTransitioningKeys = {};
      this.keysToEnter = [];
      this.keysToLeave = [];
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var initialChildMapping = this.state.children;
      for (var key in initialChildMapping) {
        if (initialChildMapping[key]) {
          this.performAppear(key);
        }
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
      var prevChildMapping = this.state.children;

      this.setState({
        children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
      });

      for (var key in nextChildMapping) {
        var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
        if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
          this.keysToEnter.push(key);
        }
      }

      for (var _key in prevChildMapping) {
        var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
        if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
          this.keysToLeave.push(_key);
        }
      }

      // If we want to someday check for reordering, we could do it here.
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);

      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // TODO: we could get rid of the need for the wrapper node
      // by cloning a single child
      var childrenToRender = [];

      var _loop = function _loop(key) {
        var child = _this2.state.children[key];
        if (child) {
          // You may need to apply reactive updates to a child as it is leaving.
          // The normal React way to do it won't work since the child will have
          // already been removed. In case you need this behavior you can provide
          // a childFactory function to wrap every child, even the ones that are
          // leaving.
          childrenToRender.push(_react2.default.cloneElement(_this2.props.childFactory(child), {
            key: key,
            ref: function ref(r) {
              _this2.childRefs[key] = r;
            }
          }));
        }
      };

      for (var key in this.state.children) {
        _loop(key);
      }

      // Do not forward TransitionGroup props to primitive DOM nodes
      var props = Object.assign({}, this.props);
      delete props.transitionLeave;
      delete props.transitionName;
      delete props.transitionAppear;
      delete props.transitionEnter;
      delete props.childFactory;
      delete props.transitionLeaveTimeout;
      delete props.transitionEnterTimeout;
      delete props.transitionAppearTimeout;
      delete props.component;

      return _react2.default.createElement(this.props.component, props, childrenToRender);
    }
  }]);

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes = propTypes;
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(2);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function pick(obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var result = {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
exports.pick = pick;
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pick;

//# sourceMappingURL=pick.js.map


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_resolveValue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_toArray__ = __webpack_require__(69);
/* unused harmony export branch */
/* tslint:disable: no-bitwise */



var resolveCallbacks = function (list) { return list.reduce(function (result, c) {
    result.push.apply(result, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_resolveValue__["a" /* default */])(c.instanceCallbacks));
    return result;
}, []); };
function branch(test, left, right) {
    if (right === void 0) { right = []; }
    var leftList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_toArray__["a" /* default */])(left);
    var rightList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_toArray__["a" /* default */])(right);
    return {
        instanceCallbacks: function () {
            var loaded = { left: false, right: false };
            var isTrue;
            return [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["e" /* lazyLoadCallback */])(function (props) {
                    isTrue = test(props);
                    if (!loaded.left && isTrue) {
                        loaded.left = true;
                        var newCallbacks = resolveCallbacks(leftList);
                        var skip_1 = newCallbacks.length;
                        newCallbacks.unshift(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["f" /* skipCallback */])(function () { return isTrue ? 0 : skip_1; }));
                        return newCallbacks;
                    }
                    if (!loaded.right && !isTrue) {
                        loaded.right = true;
                        var newCallbacks = resolveCallbacks(rightList);
                        var skip_2 = newCallbacks.length;
                        newCallbacks.unshift(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["f" /* skipCallback */])(function () { return isTrue ? skip_2 : 0; }));
                        return newCallbacks;
                    }
                    return null;
                }),
            ];
        },
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = branch;

//# sourceMappingURL=branch.js.map


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assemble__ = __webpack_require__(16);
/* unused harmony reexport default */
/* unused harmony reexport compose */


//# sourceMappingURL=compose.js.map


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* unused harmony export debug */

function debug(callback) {
    if (callback === void 0) { callback = console.log; }
    return {
        instanceCallbacks: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["b" /* propsCallback */])(function (props) {
                callback(props);
                return props;
            }),
        ],
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = debug;

//# sourceMappingURL=debug.js.map


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mapProps__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_getKeysAndSymbols__ = __webpack_require__(10);
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultProps;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function defaultProps(defaults) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mapProps__["a" /* default */])(function (props) { return (__assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_getKeysAndSymbols__["a" /* default */])(defaults).reduce(function (nextProps, key) {
        if (nextProps[key] === undefined) {
            nextProps[key] = defaults[key];
        }
        return nextProps;
    }, __assign({}, props)))); });
}
/* unused harmony default export */ var _unused_webpack_default_export = defaultProps;

//# sourceMappingURL=defaultProps.js.map


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mapProps__ = __webpack_require__(4);
/* unused harmony export flattenProp */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function flattenProp(propName) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mapProps__["a" /* default */])(function (props) { return (__assign({}, props, props[propName])); });
}
/* unused harmony default export */ var _unused_webpack_default_export = flattenProp;

//# sourceMappingURL=flattenProp.js.map


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pick__ = __webpack_require__(6);
/* unused harmony export getContext */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function getContext(contextTypes) {
    return {
        staticCallback: function (componentClass) {
            componentClass.contextTypes = __assign({}, componentClass.contextTypes, contextTypes);
        },
        instanceCallbacks: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["b" /* propsCallback */])(function (props, _, context) { return (__assign({}, props, __WEBPACK_IMPORTED_MODULE_1__utils_pick__["a" /* default */].apply(void 0, [context].concat(Object.keys(contextTypes))))); }),
        ],
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = getContext;

//# sourceMappingURL=getContext.js.map


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pick__ = __webpack_require__(6);
/* harmony export (immutable) */ __webpack_exports__["a"] = integrate;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function integrate() {
    var propNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        propNames[_i] = arguments[_i];
    }
    return {
        instanceCallbacks: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["b" /* propsCallback */])(function (props) {
                return __assign({}, props, { __isolation: props.__isolation.slice(0, props.__isolation.length - 2).concat([
                        __assign({}, props.__isolation[props.__isolation.length - 1], __WEBPACK_IMPORTED_MODULE_1__utils_pick__["a" /* default */].apply(void 0, [props].concat(propNames))),
                    ]) });
            }),
        ],
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = integrate;

//# sourceMappingURL=integrate.js.map


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combine__ = __webpack_require__(7);
/* harmony export (immutable) */ __webpack_exports__["a"] = isolate;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function isolate() {
    var composables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        composables[_i] = arguments[_i];
    }
    var begin = {
        instanceCallbacks: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["b" /* propsCallback */])(function (props) {
                return __assign({}, props, { __isolation: props.__isolation
                        ? props.__isolation.concat([props]) : [props] });
            }),
        ],
    };
    var end = {
        instanceCallbacks: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["b" /* propsCallback */])(function (props) { return props.__isolation[props.__isolation.length - 1]; }),
        ],
    };
    return __WEBPACK_IMPORTED_MODULE_1__combine__["a" /* default */].apply(void 0, [begin].concat(composables, [end]));
}
/* unused harmony default export */ var _unused_webpack_default_export = isolate;

//# sourceMappingURL=isolate.js.map


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mapProps__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_omit__ = __webpack_require__(11);
/* harmony export (immutable) */ __webpack_exports__["a"] = omitProps;


function omitProps() {
    var propNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        propNames[_i] = arguments[_i];
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mapProps__["a" /* default */])(function (props) { return __WEBPACK_IMPORTED_MODULE_1__utils_omit__["a" /* default */].apply(void 0, [props].concat(propNames)); });
}
/* unused harmony default export */ var _unused_webpack_default_export = omitProps;

//# sourceMappingURL=omitProps.js.map


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lifecycle__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = onDidMount;

function onDidMount(callback) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lifecycle__["b" /* createSimpleLifecycle */])("componentDidMountCallback", callback);
}
/* unused harmony default export */ var _unused_webpack_default_export = onDidMount;

//# sourceMappingURL=onDidMount.js.map


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lifecycle__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = onDidUpdate;

function onDidUpdate(callback) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lifecycle__["a" /* createComparingLifecycle */])("componentDidUpdateCallback", callback);
}
/* unused harmony default export */ var _unused_webpack_default_export = onDidUpdate;

//# sourceMappingURL=onDidUpdate.js.map


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lifecycle__ = __webpack_require__(3);
/* unused harmony export onWillMount */

function onWillMount(callback) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lifecycle__["b" /* createSimpleLifecycle */])("componentWillMountCallback", callback);
}
/* unused harmony default export */ var _unused_webpack_default_export = onWillMount;

//# sourceMappingURL=onWillMount.js.map


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lifecycle__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = onWillReceiveProps;

function onWillReceiveProps(callback) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lifecycle__["a" /* createComparingLifecycle */])("componentWillReceivePropsCallback", callback);
}
/* unused harmony default export */ var _unused_webpack_default_export = onWillReceiveProps;

//# sourceMappingURL=onWillReceiveProps.js.map


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lifecycle__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = onWillUnmount;

function onWillUnmount(callback) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lifecycle__["b" /* createSimpleLifecycle */])("componentWillUnmountCallback", callback);
}
/* unused harmony default export */ var _unused_webpack_default_export = onWillUnmount;

//# sourceMappingURL=onWillUnmount.js.map


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lifecycle__ = __webpack_require__(3);
/* unused harmony export onWillUpdate */

function onWillUpdate(callback) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lifecycle__["a" /* createComparingLifecycle */])("componentWillUpdateCallback", callback);
}
/* unused harmony default export */ var _unused_webpack_default_export = onWillUpdate;

//# sourceMappingURL=onWillUpdate.js.map


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shouldUpdate__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_pick__ = __webpack_require__(6);
/* unused harmony export onlyUpdateForKeys */



function onlyUpdateForKeys(propKeys) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shouldUpdate__["a" /* default */])(function (prev, next) { return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__utils_pick__["a" /* default */].apply(void 0, [prev].concat(propKeys)), __WEBPACK_IMPORTED_MODULE_2__utils_pick__["a" /* default */].apply(void 0, [next].concat(propKeys))); });
}
/* unused harmony default export */ var _unused_webpack_default_export = onlyUpdateForKeys;

//# sourceMappingURL=onlyUpdateForKeys.js.map


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shouldUpdate__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(12);
/* unused harmony export pure */


var pure = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shouldUpdate__["a" /* default */])(function (prev, next) { return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */])(prev, next); });
/* unused harmony default export */ var _unused_webpack_default_export = pure;

//# sourceMappingURL=pure.js.map


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mapProps__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_omit__ = __webpack_require__(11);
/* unused harmony export renameProp */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function renameProp(oldName, newName) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mapProps__["a" /* default */])(function (props) {
        return (__assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_omit__["a" /* default */])(props, oldName), (_a = {}, _a[newName] = props[oldName], _a)));
        var _a;
    });
}
/* unused harmony default export */ var _unused_webpack_default_export = renameProp;

//# sourceMappingURL=renameProp.js.map


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mapProps__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_omit__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_pick__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_mapKeys__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_getKeysAndSymbols__ = __webpack_require__(10);
/* unused harmony export renameProps */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





function renameProps(nameMap) {
    var keysAndSymbols = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_getKeysAndSymbols__["a" /* default */])(nameMap);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mapProps__["a" /* default */])(function (props) { return (__assign({}, __WEBPACK_IMPORTED_MODULE_1__utils_omit__["a" /* default */].apply(void 0, [props].concat(keysAndSymbols)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_mapKeys__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__utils_pick__["a" /* default */].apply(void 0, [props].concat(keysAndSymbols)), function (oldName) { return nameMap[oldName]; }))); });
}
/* unused harmony default export */ var _unused_webpack_default_export = renameProps;

//# sourceMappingURL=renameProps.js.map


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderComponent__ = __webpack_require__(18);
/* unused harmony export renderNothing */

var renderNothing = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__renderComponent__["a" /* renderComponent */])(null);
/* unused harmony default export */ var _unused_webpack_default_export = renderNothing;

//# sourceMappingURL=renderNothing.js.map


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setStatic__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setDisplayName; });

var setDisplayName = function (name) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__setStatic__["a" /* default */])("displayName", name); };
/* unused harmony default export */ var _unused_webpack_default_export = setDisplayName;

//# sourceMappingURL=setDisplayName.js.map


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setStatic__ = __webpack_require__(8);
/* unused harmony export setPropTypes */

function setPropTypes(propTypes) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__setStatic__["a" /* default */])("propTypes", propTypes);
}
/* unused harmony default export */ var _unused_webpack_default_export = setPropTypes;

//# sourceMappingURL=setPropTypes.js.map


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noOp__ = __webpack_require__(17);
/* unused harmony reexport default */
/* unused harmony reexport toClass */



//# sourceMappingURL=toClass.js.map


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getUniqueKey */
function getUniqueKey(name, obj) {
    var unique = name;
    var no = 1;
    while (unique in obj) {
        unique = name + "_" + no;
        no++;
    }
    return unique;
}
/* harmony default export */ __webpack_exports__["a"] = getUniqueKey;

//# sourceMappingURL=getUniqueKey.js.map


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isClassComponent */
/**
 * @license
 * Taken from https://github.com/acdlite/recompose
 * The MIT License (MIT)
 * Copyright (c) 2015-2016 Andrew Clark
 */
/**
 * @license
 * Taken from https://github.com/acdlite/recompose
 * The MIT License (MIT)
 * Copyright (c) 2015-2016 Andrew Clark
 */ var isClassComponent = function (Component) { return Boolean(Component &&
    Component.prototype &&
    typeof Component.prototype.isReactComponent === "object"); };
/* harmony default export */ __webpack_exports__["a"] = isClassComponent;

//# sourceMappingURL=isClassComponent.js.map


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isClassComponent__ = __webpack_require__(66);
/* unused harmony export isReferentiallyTransparentFunctionComponent */
/**
 * @license
 * Taken from https://github.com/acdlite/recompose
 * The MIT License (MIT)
 * Copyright (c) 2015-2016 Andrew Clark
 */

var isReferentiallyTransparentFunctionComponent = function (Component) { return Boolean(typeof Component === "function" &&
    !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isClassComponent__["a" /* default */])(Component) &&
    !Component.defaultProps &&
    !Component.contextTypes &&
    ("production" === "production" || !Component.propTypes)); };
/* harmony default export */ __webpack_exports__["a"] = isReferentiallyTransparentFunctionComponent;

//# sourceMappingURL=isReferentiallyTransparentFunctionComponent.js.map


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapKeys */
function mapKeys(obj, func) {
    return Object.keys(obj).reduce(function (result, key) {
        var val = obj[key];
        result[func(key, val)] = val;
        return result;
    }, {});
}
/* harmony default export */ __webpack_exports__["a"] = mapKeys;

//# sourceMappingURL=mapKeys.js.map


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toArray */
function toArray(x) { return Array.isArray(x) ? x : [x]; }
/* harmony default export */ __webpack_exports__["a"] = toArray;

//# sourceMappingURL=toArray.js.map


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* unused harmony export withContext */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function withContext(childContextTypes, getChildContext) {
    return {
        staticCallback: function (componentClass) {
            componentClass.childContextTypes = __assign({}, componentClass.childContextTypes, childContextTypes);
        },
        instanceCallbacks: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["d" /* childContextCallback */])(function (childContext, props) { return (__assign({}, childContext, getChildContext(props))); }),
        ],
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = withContext;

//# sourceMappingURL=withContext.js.map


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_resolveValue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_getKeysAndSymbols__ = __webpack_require__(10);
/* harmony export (immutable) */ __webpack_exports__["a"] = withHandlers;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function withHandlers(handlerCreators) {
    return {
        instanceCallbacks: function () {
            var handlers;
            var handlerProps;
            return [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["b" /* propsCallback */])(function (props) {
                    if (!handlers) {
                        handlers = {};
                        var resolvedHandlers_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_resolveValue__["a" /* default */])(handlerCreators, props);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_getKeysAndSymbols__["a" /* default */])(resolvedHandlers_1).forEach(function (name) { return handlers[name] = function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            return resolvedHandlers_1[name](handlerProps).apply(void 0, args);
                        }; });
                    }
                    handlerProps = props;
                    return __assign({}, props, handlers);
                }),
            ];
        },
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = withHandlers;

//# sourceMappingURL=withHandlers.js.map


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mapProps__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_resolveValue__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = withProps;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function withProps(createProps) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mapProps__["a" /* default */])(function (props) { return (__assign({}, props, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_resolveValue__["a" /* default */])(createProps, props))); });
}
/* unused harmony default export */ var _unused_webpack_default_export = withProps;

//# sourceMappingURL=withProps.js.map


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pick__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_shallowEqual__ = __webpack_require__(12);
/* unused harmony export withPropsOnChange */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function withPropsOnChange(shouldMapOrKeys, propsMapper) {
    var shouldMap = typeof shouldMapOrKeys === "function"
        ? shouldMapOrKeys
        : function (props, nextProps) { return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_shallowEqual__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__utils_pick__["a" /* default */].apply(void 0, [props].concat(shouldMapOrKeys)), __WEBPACK_IMPORTED_MODULE_1__utils_pick__["a" /* default */].apply(void 0, [nextProps].concat(shouldMapOrKeys))); };
    return {
        instanceCallbacks: function () {
            var previousProps;
            var computedProps;
            return [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["b" /* propsCallback */])(function (props) {
                    if (previousProps === undefined || shouldMap(previousProps, props)) {
                        computedProps = propsMapper(props);
                    }
                    previousProps = props;
                    return __assign({}, props, computedProps);
                }),
            ];
        },
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = withPropsOnChange;

//# sourceMappingURL=withPropsOnChange.js.map


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_resolveValue__ = __webpack_require__(5);
/* unused harmony export withReducer */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function withReducer(stateName, dispatcherName, reducer, initialValue) {
    return {
        instanceCallbacks: function () {
            var update;
            var name;
            var dispatcher;
            var curState;
            return [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["c" /* stateCallback */])(function (initState, props) {
                    var newState = initState(String(stateName), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_resolveValue__["a" /* default */])(initialValue, props));
                    update = newState.updater;
                    name = newState.name;
                    dispatcher = function (action, callback) { return update(reducer(curState, action), callback); };
                }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["b" /* propsCallback */])(function (props, state) {
                    curState = state[name];
                    return __assign({}, props, (_a = {}, _a[stateName] = curState, _a[dispatcherName] = dispatcher, _a));
                    var _a;
                }),
            ];
        },
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = withReducer;

//# sourceMappingURL=withReducer.js.map


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blueprint__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_resolveValue__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = withState;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function withState(stateName, updaterName, initialValue) {
    return {
        instanceCallbacks: function () {
            var update;
            var name;
            return [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["c" /* stateCallback */])(function (initState, props) {
                    var newState = initState(String(stateName), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_resolveValue__["a" /* default */])(initialValue, props));
                    update = newState.updater;
                    name = newState.name;
                }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__blueprint__["b" /* propsCallback */])(function (props, state) {
                    return (__assign({}, props, (_a = {}, _a[stateName] = state[name], _a[updaterName] = update, _a)));
                    var _a;
                }),
            ];
        },
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = withState;

//# sourceMappingURL=withState.js.map


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getDisplayName__ = __webpack_require__(19);
/* unused harmony export wrapDisplayName */

function wrapDisplayName(name) {
    return {
        staticCallback: function (componentClass, target) {
            componentClass["displayName"] = name + "(" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_getDisplayName__["a" /* default */])(target) + ")";
        },
    };
}
/* unused harmony default export */ var _unused_webpack_default_export = wrapDisplayName;

//# sourceMappingURL=wrapDisplayName.js.map


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__csstransition__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return __WEBPACK_IMPORTED_MODULE_0__csstransition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__csstransitiongroup__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CSSTransitionGroup", function() { return __WEBPACK_IMPORTED_MODULE_1__csstransitiongroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transit__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transit", function() { return __WEBPACK_IMPORTED_MODULE_2__transit__["a"]; });





/***/ })
/******/ ]);
});
//# sourceMappingURL=react-css-transition.js.map