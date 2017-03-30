"use strict";
var reassemble_1 = require("reassemble");
exports.preventPhantomEvents = reassemble_1.isolate(reassemble_1.withHandlers(function () {
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
}), reassemble_1.onWillReceiveProps(function (_a, _b) {
    var active = _a.active;
    var nextActive = _b.active, requestTimeUpdate = _b.requestTimeUpdate;
    if (active !== nextActive) {
        requestTimeUpdate();
    }
}), reassemble_1.onDidUpdate(function (_a) {
    var handleTimeUpdateRequest = _a.handleTimeUpdateRequest;
    return handleTimeUpdateRequest();
}), reassemble_1.integrate("onTransitionEnd"));

//# sourceMappingURL=preventPhantomEvents.js.map
