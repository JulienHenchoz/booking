"use strict";
var reassemble_1 = require("reassemble");
exports.timeoutMultiplier = 3;
exports.withTimeout = reassemble_1.isolate(reassemble_1.withHandlers(function () {
    var timeoutID;
    return {
        timeoutIn: function (_a) {
            var timeout = _a.timeout;
            return function (ms) { return timeoutID = setTimeout(timeout, ms); };
        },
        cancel: function () { return function () { return clearTimeout(timeoutID); }; },
    };
}), reassemble_1.onWillReceiveProps(function (_a, _b) {
    var inTransition = _a.transitionState.inTransition, active = _a.active;
    var nextInTransition = _b.transitionState.inTransition, cancel = _b.cancel, nextActive = _b.active;
    var inTransitionChanged = inTransition !== nextInTransition;
    var interrupted = nextInTransition && active !== nextActive;
    if (inTransitionChanged || interrupted) {
        cancel();
    }
}), reassemble_1.onDidUpdate(function (_a, _b) {
    var inTransition = _a.transitionState.inTransition, active = _a.active;
    var nextInTransition = _b.transitionState.inTransition, totalDuration = _b.transitionInfo.totalDuration, timeoutIn = _b.timeoutIn, nextActive = _b.active;
    var newTransition = !inTransition && nextInTransition;
    var interrupted = nextInTransition && active !== nextActive;
    if (newTransition || interrupted) {
        if (nextInTransition) {
            timeoutIn(totalDuration * exports.timeoutMultiplier);
        }
    }
}), reassemble_1.onWillUnmount(function (_a) {
    var cancel = _a.cancel;
    return cancel();
}));

//# sourceMappingURL=withTimeout.js.map
