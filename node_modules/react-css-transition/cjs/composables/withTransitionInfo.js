"use strict";
var reassemble_1 = require("reassemble");
var parseTransition_1 = require("../utils/parseTransition");
var parseComputedTransition_1 = require("../utils/parseComputedTransition");
var memoize_1 = require("../utils/memoize");
exports.withTransitionInfo = reassemble_1.isolate(reassemble_1.withHandlers(function () {
    var memoized = memoize_1.memoize(function (node) { return parseComputedTransition_1.parseComputedTransition(getComputedStyle(node)); }, function (node) { return node.className; });
    return {
        parseComputedTransitionMemoized: function () { return memoized; },
    };
}), reassemble_1.withProps(function (_a) {
    var style = _a.style, className = _a.className, transitionState = _a.transitionState, getDOMNode = _a.getDOMNode, parseComputedTransitionMemoized = _a.parseComputedTransitionMemoized;
    if (transitionState.inTransition) {
        var parsed = void 0;
        if (style && style.transition) {
            parsed = parseTransition_1.parseTransition(style.transition);
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
}), reassemble_1.integrate("transitionInfo"));

//# sourceMappingURL=withTransitionInfo.js.map
