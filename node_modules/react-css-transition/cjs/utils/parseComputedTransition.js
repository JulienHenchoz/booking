"use strict";
var parseDuration_1 = require("./parseDuration");
function parseComputedTransition(computed) {
    var lastProperty = null;
    var firstProperty = null;
    var lastPropertyTotalDuration = -1;
    var firstPropertyDelay = 99999999;
    var properties = computed.transitionProperty.split(/\s*,\s*/);
    var delays = computed.transitionDelay.split(/\s*,\s*/);
    var durations = computed.transitionDuration.split(/\s*,\s*/);
    properties.forEach(function (property, i) {
        var duration = parseDuration_1.default(durations[i]);
        var delay = parseDuration_1.default(delays[i]);
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
exports.parseComputedTransition = parseComputedTransition;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseComputedTransition;

//# sourceMappingURL=parseComputedTransition.js.map
