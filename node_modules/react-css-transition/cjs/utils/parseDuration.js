"use strict";
function parseDuration(duration) {
    var parsed = parseFloat(duration);
    if (duration.match(/ms$/)) {
        return parsed;
    }
    return parsed * 1000;
}
exports.parseDuration = parseDuration;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseDuration;

//# sourceMappingURL=parseDuration.js.map
