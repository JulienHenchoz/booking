"use strict";
var reassemble_1 = require("reassemble");
var runInFrame_1 = require("../utils/runInFrame");
var pick_1 = require("../utils/pick");
var reducer_1 = require("../reducer");
var pickTransitionState = function (state) { return pick_1.default(state, "style", "className", "inTransition", "id"); };
exports.withTransitionState = function (reduce) { return reassemble_1.combine(reassemble_1.isolate(reassemble_1.withProps(function (props) { return ({ actionProps: pick_1.default.apply(void 0, [props].concat(reducer_1.actionPropKeys)) }); }), reassemble_1.withState("transitionState", "setTransitionState", function (_a) {
    var actionProps = _a.actionProps;
    return pickTransitionState(reduce(reducer_1.StateID.EntryPoint, { kind: reducer_1.ActionID.New, props: actionProps }).state);
}), reassemble_1.withHandlers(function (initialProps) {
    var stateID = reduce(reducer_1.StateID.EntryPoint, { kind: reducer_1.ActionID.New, props: initialProps }).state.id;
    var cancelPending = null;
    var pendingCallback;
    var cancelPendingIfExistent = function () {
        if (cancelPending) {
            cancelPending();
            cancelPending = null;
        }
    };
    return {
        cancelPendingIfExistent: function () { return cancelPendingIfExistent; },
        runPending: function () { return function () {
            var callback = pendingCallback;
            pendingCallback = null;
            if (callback) {
                callback();
            }
        }; },
        dispatch: function (_a) {
            var actionProps = _a.actionProps, onTransitionComplete = _a.onTransitionComplete, setTransitionState = _a.setTransitionState;
            var run = function (actionID) {
                var result = reduce(stateID, { kind: actionID, props: actionProps });
                if (!result) {
                    return;
                }
                if (result.completed && onTransitionComplete) {
                    onTransitionComplete();
                }
                var state = result.state, pending = result.pending;
                stateID = state.id;
                cancelPendingIfExistent();
                if (pending) {
                    pendingCallback = function () {
                        cancelPending = runInFrame_1.default(1, function () { return run(pending); });
                    };
                }
                setTransitionState(pickTransitionState(state));
            };
            return run;
        },
    };
}), reassemble_1.withHandlers({
    onTransitionBegin: function (_a) {
        var dispatch = _a.dispatch;
        return function () { return dispatch(reducer_1.ActionID.TransitionStart); };
    },
    onTransitionComplete: function (_a) {
        var dispatch = _a.dispatch;
        return function () { return dispatch(reducer_1.ActionID.TransitionComplete); };
    },
    timeout: function (_a) {
        var dispatch = _a.dispatch;
        return function () { return dispatch(reducer_1.ActionID.Timeout); };
    },
}), reassemble_1.onDidMount(function (_a) {
    var dispatch = _a.dispatch;
    dispatch(reducer_1.ActionID.Mount);
}), reassemble_1.onWillReceiveProps(function (_a, _b) {
    var prevActive = _a.active;
    var nextActive = _b.active, dispatch = _b.dispatch;
    if (prevActive === nextActive) {
        return;
    }
    dispatch(reducer_1.ActionID.TransitionTrigger);
}), reassemble_1.onDidUpdate(function (_a) {
    var runPending = _a.runPending;
    runPending();
}), reassemble_1.onWillUnmount(function (_a) {
    var cancelPendingIfExistent = _a.cancelPendingIfExistent;
    cancelPendingIfExistent();
}), reassemble_1.integrate("timeout", "transitionState", "onTransitionBegin", "onTransitionComplete"))); };

//# sourceMappingURL=withTransitionState.js.map
