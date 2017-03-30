"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var React = require("react");
var reassemble_1 = require("reassemble");
var reducer_1 = require("./reducer");
var withTransitionState_1 = require("./composables/withTransitionState");
var mergeWithBaseStyle_1 = require("./composables/mergeWithBaseStyle");
var withTransitionInfo_1 = require("./composables/withTransitionInfo");
var withTimeout_1 = require("./composables/withTimeout");
var withTransitionObserver_1 = require("./composables/withTransitionObserver");
var withWorkaround_1 = require("./composables/withWorkaround");
var withDOMNodeCallback_1 = require("./composables/withDOMNodeCallback");
var preventPhantomEvents_1 = require("./composables/preventPhantomEvents");
var withDefaultProps = reassemble_1.defaultProps({
    component: "div",
});
var mapPropsToInner = reassemble_1.omitProps("active", "transitionAppear", "defaultStyle", "activeStyle", "appearStyle", "enterStyle", "leaveStyle", "appearInitStyle", "enterInitStyle", "leaveInitStyle", "defaultClassName", "activeClassName", "appearClassName", "enterClassName", "leaveClassName", "appearInitClassName", "enterInitClassName", "leaveInitClassName", "transitionDelay", "onTransitionComplete", "onTransitionBegin", "transitionInfo", "transitionState", "timeout", "getDOMNode");
var enhance = reassemble_1.assemble(reassemble_1.setDisplayName("CSSTransition"), withDefaultProps, withDOMNodeCallback_1.withDOMNodeCallback, withTransitionState_1.withTransitionState(reducer_1.reducer), mergeWithBaseStyle_1.mergeWithBaseStyle, withTransitionInfo_1.withTransitionInfo, withTimeout_1.withTimeout, withTransitionObserver_1.withTransitionObserver, withWorkaround_1.withWorkaround, preventPhantomEvents_1.preventPhantomEvents, mapPropsToInner);
exports.CSSTransitionInner = function (_a) {
    var Wrapper = _a.component, onDOMNodeRef = _a.onDOMNodeRef, children = _a.children, rest = __rest(_a, ["component", "onDOMNodeRef", "children"]);
    return React.createElement(Wrapper, __assign({ ref: onDOMNodeRef }, rest, { children: children }));
};
exports.CSSTransition = enhance(exports.CSSTransitionInner);

//# sourceMappingURL=csstransition.js.map
