"use strict";
var removeVendorPrefix_1 = require("./removeVendorPrefix");
function matchTransitionProperty(subject, property) {
    if (property === "all") {
        return true;
    }
    var sub = removeVendorPrefix_1.default(subject);
    var prop = removeVendorPrefix_1.default(property);
    if (sub.length < prop.length) {
        return false;
    }
    else if (sub.length === prop.length) {
        return sub === prop;
    }
    return sub.substr(0, prop.length) === prop;
}
exports.matchTransitionProperty = matchTransitionProperty;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = matchTransitionProperty;

//# sourceMappingURL=matchTransitionProperty.js.map
