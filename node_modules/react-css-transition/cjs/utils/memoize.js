"use strict";
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
exports.memoize = memoize;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = memoize;

//# sourceMappingURL=memoize.js.map
