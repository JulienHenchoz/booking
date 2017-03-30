/* tslint:disable: variable-name no-switch-case-fall-through */
"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var transit_1 = require("./transit");
var StateID;
(function (StateID) {
    StateID[StateID["EntryPoint"] = 0] = "EntryPoint";
    StateID[StateID["DefaultNew"] = 1] = "DefaultNew";
    StateID[StateID["ActiveNew"] = 2] = "ActiveNew";
    StateID[StateID["AppearNew"] = 3] = "AppearNew";
    StateID[StateID["Default"] = 4] = "Default";
    StateID[StateID["Active"] = 5] = "Active";
    StateID[StateID["AppearInit"] = 6] = "AppearInit";
    StateID[StateID["AppearPrepare"] = 7] = "AppearPrepare";
    StateID[StateID["AppearTriggered"] = 8] = "AppearTriggered";
    StateID[StateID["AppearStarted"] = 9] = "AppearStarted";
    StateID[StateID["EnterInit"] = 10] = "EnterInit";
    StateID[StateID["EnterPrepare"] = 11] = "EnterPrepare";
    StateID[StateID["EnterTriggered"] = 12] = "EnterTriggered";
    StateID[StateID["EnterStarted"] = 13] = "EnterStarted";
    StateID[StateID["LeaveInit"] = 14] = "LeaveInit";
    StateID[StateID["LeavePrepare"] = 15] = "LeavePrepare";
    StateID[StateID["LeaveTriggered"] = 16] = "LeaveTriggered";
    StateID[StateID["LeaveStarted"] = 17] = "LeaveStarted";
})(StateID = exports.StateID || (exports.StateID = {}));
exports.StateIDList = [
    StateID.ActiveNew, StateID.DefaultNew, StateID.AppearNew,
    StateID.Active, StateID.Default,
    StateID.AppearInit, StateID.AppearTriggered, StateID.AppearStarted,
    StateID.EnterInit, StateID.EnterTriggered, StateID.EnterStarted,
    StateID.LeaveInit, StateID.LeaveTriggered, StateID.LeaveStarted,
    StateID.AppearPrepare, StateID.EnterPrepare, StateID.LeavePrepare,
];
var ActionID;
(function (ActionID) {
    ActionID[ActionID["New"] = 0] = "New";
    ActionID[ActionID["Mount"] = 1] = "Mount";
    ActionID[ActionID["TransitionInit"] = 2] = "TransitionInit";
    ActionID[ActionID["TransitionPrepare"] = 3] = "TransitionPrepare";
    ActionID[ActionID["TransitionTrigger"] = 4] = "TransitionTrigger";
    ActionID[ActionID["TransitionStart"] = 5] = "TransitionStart";
    ActionID[ActionID["TransitionComplete"] = 6] = "TransitionComplete";
    ActionID[ActionID["Timeout"] = 7] = "Timeout";
})(ActionID = exports.ActionID || (exports.ActionID = {}));
exports.actionPropKeys = [
    "active",
    "transitionAppear",
    "transitionDelay",
    "defaultStyle",
    "activeStyle",
    "appearStyle",
    "enterStyle",
    "leaveStyle",
    "appearInitStyle",
    "enterInitStyle",
    "leaveInitStyle",
    "defaultClassName",
    "activeClassName",
    "appearClassName",
    "enterClassName",
    "leaveClassName",
    "appearInitClassName",
    "enterInitClassName",
    "leaveInitClassName",
];
exports.transitionNames = ["enter", "leave", "appear"];
function hasTransition(name, props) {
    var result = props[name + "Style"] !== undefined || props[name + "ClassName"] !== undefined;
    return !result && name === "appear"
        ? hasTransition("enter", props)
        : result;
}
exports.hasTransition = hasTransition;
function getDelay(name, delay) {
    if (!delay) {
        return 0;
    }
    if (typeof delay === "number") {
        return delay;
    }
    return delay[name] ? delay[name] : 0;
}
exports.getDelay = getDelay;
function getState(id, name, props, params) {
    if (params === void 0) { params = {}; }
    if (name === "appear" && !props.appearStyle && !props.appearClassName) {
        return getState(id, "enter", props, params);
    }
    var style;
    var className;
    var inTransition = false;
    if (params.mode === "init" || params.mode === "prepare") {
        style = props[name + "InitStyle"];
        className = props[name + "InitClassName"];
        if (style === undefined && className === undefined) {
            if (name === "enter" || name === "appear") {
                style = props.defaultStyle;
                className = props.defaultClassName;
            }
            else if (name === "leave") {
                style = props.activeStyle;
                className = props.activeClassName;
            }
        }
        // Setting transition before starting one fixes issues on IE & Edge...
        if (params.mode === "prepare" && style !== undefined) {
            var tmp = transit_1.resolveTransit(props[name + "Style"], getDelay(name, props.transitionDelay));
            if (tmp.transition) {
                style = __assign({}, style, { transition: tmp.transition });
            }
        }
    }
    else {
        style = props[name + "Style"];
        className = props[name + "ClassName"];
        if (["enter", "appear", "leave"].indexOf(name) >= 0) {
            inTransition = true;
            style = transit_1.resolveTransit(style, getDelay(name, props.transitionDelay));
        }
    }
    style = style || {};
    className = className || "";
    return {
        id: id,
        style: style,
        className: className,
        inTransition: inTransition,
    };
}
exports.getState = getState;
function stateFunc(id, name, params) {
    if (params === void 0) { params = {}; }
    return function (props) { return getState(id, name, props, params); };
}
exports.stateFunc = stateFunc;
exports.activeNewState = stateFunc(StateID.ActiveNew, "active");
exports.defaultNewState = stateFunc(StateID.DefaultNew, "default");
exports.appearNewState = stateFunc(StateID.AppearNew, "appear", { mode: "init" });
exports.activeState = stateFunc(StateID.Active, "active");
exports.defaultState = stateFunc(StateID.Default, "default");
exports.appearInitState = stateFunc(StateID.AppearInit, "appear", { mode: "init" });
exports.enterInitState = stateFunc(StateID.EnterInit, "enter", { mode: "init" });
exports.leaveInitState = stateFunc(StateID.LeaveInit, "leave", { mode: "init" });
exports.appearPrepareState = stateFunc(StateID.AppearPrepare, "appear", { mode: "prepare" });
exports.enterPrepareState = stateFunc(StateID.EnterPrepare, "enter", { mode: "prepare" });
exports.leavePrepareState = stateFunc(StateID.LeavePrepare, "leave", { mode: "prepare" });
exports.appearTriggeredState = stateFunc(StateID.AppearTriggered, "appear");
exports.enterTriggeredState = stateFunc(StateID.EnterTriggered, "enter");
exports.leaveTriggeredState = stateFunc(StateID.LeaveTriggered, "leave");
exports.appearStartedState = stateFunc(StateID.AppearStarted, "appear");
exports.enterStartedState = stateFunc(StateID.EnterStarted, "enter");
exports.leaveStartedState = stateFunc(StateID.LeaveStarted, "leave");
var invalidTransitionError = function (stateID, actionID) {
    return new Error("invalid state transition from " + StateID[stateID] + " with " + ActionID[actionID]);
};
exports.reducer = function (stateID, action) {
    var props = action.props;
    var nextState;
    switch (action.kind) {
        case ActionID.New:
            if (stateID !== StateID.EntryPoint) {
                throw new Error("invalid entrypoint");
            }
            if (props.active) {
                if (props.transitionAppear) {
                    return { state: exports.appearNewState(props) };
                }
                return { state: exports.activeNewState(props) };
            }
            if (!props.transitionAppear && props.active) {
                return { state: exports.activeNewState(props) };
            }
            return { state: exports.defaultNewState(props) };
        case ActionID.Mount:
            switch (stateID) {
                case StateID.AppearNew:
                    return exports.reducer(stateID, { kind: ActionID.TransitionTrigger, props: props });
                default:
                    return null;
            }
        case ActionID.TransitionInit:
            switch (stateID) {
                case StateID.DefaultNew:
                case StateID.Default:
                    if (!hasTransition("enter", props)) {
                        return { state: exports.activeState(props), completed: true };
                    }
                    nextState = exports.enterInitState(props);
                    break;
                case StateID.ActiveNew:
                case StateID.Active:
                    if (!hasTransition("leave", props)) {
                        return { state: exports.defaultState(props), completed: true };
                    }
                    nextState = exports.leaveInitState(props);
                    break;
                case StateID.AppearNew:
                    if (!hasTransition("appear", props)) {
                        return { state: exports.activeState(props), completed: true };
                    }
                    nextState = exports.appearInitState(props);
                    break;
                default:
                    throw invalidTransitionError(stateID, action.kind);
            }
            ;
            return { state: nextState, pending: ActionID.TransitionPrepare };
        case ActionID.TransitionPrepare:
            switch (stateID) {
                case StateID.EnterInit:
                    if (!props.active) {
                        return { state: exports.defaultState(props), completed: true };
                    }
                    nextState = exports.enterPrepareState(props);
                    break;
                case StateID.LeaveInit:
                    if (props.active) {
                        return { state: exports.activeState(props), completed: true };
                    }
                    nextState = exports.leavePrepareState(props);
                    break;
                case StateID.AppearInit:
                    if (!props.active) {
                        return { state: exports.defaultState(props), completed: true };
                    }
                    nextState = exports.appearPrepareState(props);
                    break;
                default:
                    throw invalidTransitionError(stateID, action.kind);
            }
            ;
            return { state: nextState, pending: ActionID.TransitionTrigger };
        case ActionID.TransitionStart:
            switch (stateID) {
                case StateID.EnterTriggered:
                    return { state: exports.enterStartedState(props) };
                case StateID.LeaveTriggered:
                    return { state: exports.leaveStartedState(props) };
                case StateID.AppearTriggered:
                    return { state: exports.appearStartedState(props) };
                default:
                    // We don't error out, because the workaround for transitionstart
                    // could happen after transitionend.
                    return null;
            }
        case ActionID.TransitionComplete:
            switch (stateID) {
                case StateID.AppearTriggered:
                case StateID.AppearStarted:
                case StateID.EnterTriggered:
                case StateID.EnterStarted:
                    return { state: exports.activeState(props), completed: true };
                case StateID.LeaveTriggered:
                case StateID.LeaveStarted:
                    return { state: exports.defaultState(props), completed: true };
                default:
                    throw invalidTransitionError(stateID, action.kind);
            }
        case ActionID.TransitionTrigger:
            switch (stateID) {
                case StateID.ActiveNew:
                case StateID.Active:
                case StateID.DefaultNew:
                case StateID.Default:
                case StateID.AppearNew:
                    return exports.reducer(stateID, { kind: ActionID.TransitionInit, props: props });
                case StateID.EnterInit:
                    return { state: exports.defaultState(props), completed: true };
                case StateID.LeaveInit:
                    return { state: exports.activeState(props), completed: true };
                case StateID.AppearInit:
                    return { state: exports.defaultState(props), completed: true };
                case StateID.EnterPrepare:
                    if (props.active) {
                        return { state: exports.enterTriggeredState(props) };
                    }
                    return { state: exports.defaultState(props), completed: true };
                case StateID.LeavePrepare:
                    if (!props.active) {
                        return { state: exports.leaveTriggeredState(props) };
                    }
                    return { state: exports.activeState(props), completed: true };
                case StateID.AppearPrepare:
                    if (props.active) {
                        return { state: exports.appearTriggeredState(props) };
                    }
                    return { state: exports.defaultState(props), completed: true };
                case StateID.EnterTriggered:
                    return { state: exports.defaultState(props), completed: true };
                case StateID.LeaveTriggered:
                    return { state: exports.activeState(props), completed: true };
                case StateID.AppearTriggered:
                    return { state: exports.defaultState(props), completed: true };
                case StateID.AppearStarted:
                case StateID.EnterStarted:
                    return { state: exports.leaveStartedState(props) };
                case StateID.LeaveStarted:
                    return { state: exports.enterStartedState(props) };
                default:
                    throw invalidTransitionError(stateID, action.kind);
            }
        case ActionID.Timeout:
            switch (stateID) {
                case StateID.AppearTriggered:
                case StateID.AppearStarted:
                case StateID.EnterTriggered:
                case StateID.EnterStarted:
                    return { state: exports.activeState(props), completed: true };
                case StateID.LeaveTriggered:
                case StateID.LeaveStarted:
                    return { state: exports.defaultState(props), completed: true };
                default:
                    throw invalidTransitionError(stateID, action.kind);
            }
        default:
    }
    throw new Error("unexpected error");
};

//# sourceMappingURL=reducer.js.map
