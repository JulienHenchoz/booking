"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var react_1 = require("react");
var TransitionGroup = require("react-transition-group/TransitionGroup");
var CSSTransitionGroup = (function (_super) {
    __extends(CSSTransitionGroup, _super);
    function CSSTransitionGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mounted = false;
        _this.componentDidMount = function () { return _this.mounted = true; };
        return _this;
    }
    CSSTransitionGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, transitionAppear = _a.transitionAppear, children = _a.children, rest = __rest(_a, ["transitionAppear", "children"]);
        return (React.createElement(TransitionGroup, __assign({}, rest), react_1.Children.map(children, function (child, index) {
            return React.createElement(CSSTransitionGroupChild, { transitionAppear: transitionAppear, mounted: _this.mounted, key: child.key }, child);
        })));
    };
    return CSSTransitionGroup;
}(react_1.Component));
CSSTransitionGroup.defaultProps = {
    component: "div",
};
exports.CSSTransitionGroup = CSSTransitionGroup;
var CSSTransitionGroupChild = (function (_super) {
    __extends(CSSTransitionGroupChild, _super);
    function CSSTransitionGroupChild(props) {
        var _this = _super.call(this, props) || this;
        _this.onTransitionComplete = function () {
            var child = react_1.Children.only(_this.props.children);
            if (child.props.onTransitionComplete) {
                child.props.onTransitionComplete();
            }
            if (_this.leaveDone) {
                _this.leaveDone();
            }
        };
        _this.state = {
            active: true,
            transitionAppear: props.mounted || props.transitionAppear,
        };
        return _this;
    }
    CSSTransitionGroupChild.prototype.componentWillAppear = function (done) {
        done();
    };
    CSSTransitionGroupChild.prototype.componentWillEnter = function (done) {
        // component was leaving but was interrupted.
        if (!this.state.active) {
            this.setState({ active: true });
            this.leaveDone = null;
        }
        done();
    };
    CSSTransitionGroupChild.prototype.componentWillLeave = function (done) {
        this.setState({ active: false });
        this.leaveDone = done;
    };
    CSSTransitionGroupChild.prototype.render = function () {
        var _a = this, children = _a.props.children, _b = _a.state, active = _b.active, transitionAppear = _b.transitionAppear, onTransitionComplete = _a.onTransitionComplete;
        return react_1.cloneElement(react_1.Children.only(children), { active: active, transitionAppear: transitionAppear, onTransitionComplete: onTransitionComplete });
    };
    return CSSTransitionGroupChild;
}(react_1.Component));
CSSTransitionGroupChild.defaultProps = {
    transitionAppear: false,
};
exports.CSSTransitionGroupChild = CSSTransitionGroupChild;

//# sourceMappingURL=csstransitiongroup.js.map
