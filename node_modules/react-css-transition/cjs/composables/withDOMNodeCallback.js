"use strict";
var reassemble_1 = require("reassemble");
exports.withDOMNodeCallback = reassemble_1.withHandlers(function () {
    var ref;
    return {
        onDOMNodeRef: function () { return function (e) {
            ref = e;
        }; },
        getDOMNode: function () { return function () { return ref; }; },
    };
});

//# sourceMappingURL=withDOMNodeCallback.js.map
