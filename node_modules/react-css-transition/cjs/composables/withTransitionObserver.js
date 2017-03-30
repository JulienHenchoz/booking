"use strict";
var reassemble_1 = require("reassemble");
var matchTransitionProperty_1 = require("../utils/matchTransitionProperty");
exports.withTransitionObserver = reassemble_1.withHandlers({
    onTransitionStart: function (_a) {
        var firstProperty = _a.transitionInfo.firstProperty, inTransition = _a.transitionState.inTransition, onTransitionStart = _a.onTransitionStart, onTransitionBegin = _a.onTransitionBegin;
        return function (e) {
            if (onTransitionStart) {
                onTransitionStart(e);
            }
            if (!inTransition || e.target !== e.currentTarget ||
                !matchTransitionProperty_1.default(e.propertyName, firstProperty)) {
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
                !matchTransitionProperty_1.default(e.propertyName, lastProperty)) {
                return;
            }
            onTransitionComplete();
        };
    },
});

//# sourceMappingURL=withTransitionObserver.js.map
