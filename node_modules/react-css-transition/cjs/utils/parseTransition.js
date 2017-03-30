"use strict";
var parseDuration_1 = require("./parseDuration");
function parseTransition(transition) {
    var lastProperty = null;
    var firstProperty = null;
    var lastPropertyTotalDuration = -1;
    var firstPropertyDelay = 99999999;
    transition.split(/\s*,\s*(?![^\(]*\))/g).forEach(function (entry) {
        var parts = entry.split(/\s+(?![^\(]*\))/g);
        var property = parts.filter(function (p) { return p.match(/^[a-z\-A-Z]+$/); })[0];
        var _a = parts.filter(function (p) { return p.match(/^[0-9]+m?s$/); }).map(function (p) { return parseDuration_1.default(p); }), _b = _a[0], duration = _b === void 0 ? 0 : _b, _c = _a[1], delay = _c === void 0 ? 0 : _c;
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
exports.parseTransition = parseTransition;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseTransition;

//# sourceMappingURL=parseTransition.js.map
