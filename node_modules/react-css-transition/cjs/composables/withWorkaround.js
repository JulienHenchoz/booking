"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var react_1 = require("react");
var reassemble_1 = require("reassemble");
exports.withWorkaround = reassemble_1.combine(reassemble_1.withHandlers({
    workaroundHandler: function (_a) {
        var firstProperty = _a.transitionInfo.firstProperty, onTransitionStart = _a.onTransitionStart;
        return function () {
            onTransitionStart({ propertyName: firstProperty });
        };
    },
}), reassemble_1.withProps(function (_a) {
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
        children: [React.createElement("span", __assign({}, workaroundProps))].concat(react_1.Children.toArray(children)),
    };
}), reassemble_1.omitProps("workaroundHandler", "onTransitionStart"));

//# sourceMappingURL=withWorkaround.js.map
