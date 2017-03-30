"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var reassemble_1 = require("reassemble");
var mergeClasses = function () {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(function (s) { return s; }).join(" ");
};
exports.mergeWithBaseStyle = reassemble_1.combine(reassemble_1.withProps(function (_a) {
    var transitionState = _a.transitionState, style = _a.style, className = _a.className;
    return ({
        style: __assign({}, style, transitionState.style),
        className: mergeClasses(className, transitionState.className),
    });
}));

//# sourceMappingURL=mergeWithBaseStyle.js.map
