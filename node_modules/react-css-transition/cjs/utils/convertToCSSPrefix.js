"use strict";
function convertToCSSPrefix(property) {
    return property
        .replace(/^Moz/, "-moz-")
        .replace(/^ms/, "-ms-")
        .replace(/^O/, "-o-")
        .replace(/^Webkit/, "-webkit-")
        .toLowerCase();
}
exports.convertToCSSPrefix = convertToCSSPrefix;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = convertToCSSPrefix;

//# sourceMappingURL=convertToCSSPrefix.js.map
