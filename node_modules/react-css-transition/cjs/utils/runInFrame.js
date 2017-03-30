"use strict";
var raf = typeof requestAnimationFrame === "undefined"
    ? function (callback) { return setTimeout(callback, 17); }
    : requestAnimationFrame;
exports.runInFrame = function (no, callback) {
    var cur = 0;
    var canceled = false;
    var loop = function () {
        if (canceled) {
            return;
        }
        if (cur <= no) {
            cur++;
            raf(loop);
            return;
        }
        callback();
    };
    loop();
    return function () { canceled = true; };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.runInFrame;

//# sourceMappingURL=runInFrame.js.map
