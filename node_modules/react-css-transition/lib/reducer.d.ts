/// <reference types="react" />
import { CSSProperties } from "react";
import { CSSTransitionProps, CSSTransitionDelay } from "./csstransition";
export interface TransitionState {
    id?: StateID;
    style?: CSSProperties;
    className?: string;
    inTransition?: boolean;
}
export declare enum StateID {
    EntryPoint = 0,
    DefaultNew = 1,
    ActiveNew = 2,
    AppearNew = 3,
    Default = 4,
    Active = 5,
    AppearInit = 6,
    AppearPrepare = 7,
    AppearTriggered = 8,
    AppearStarted = 9,
    EnterInit = 10,
    EnterPrepare = 11,
    EnterTriggered = 12,
    EnterStarted = 13,
    LeaveInit = 14,
    LeavePrepare = 15,
    LeaveTriggered = 16,
    LeaveStarted = 17,
}
export declare const StateIDList: StateID[];
export declare enum ActionID {
    New = 0,
    Mount = 1,
    TransitionInit = 2,
    TransitionPrepare = 3,
    TransitionTrigger = 4,
    TransitionStart = 5,
    TransitionComplete = 6,
    Timeout = 7,
}
export declare type ActionPropKeys = "active" | "transitionAppear" | "transitionDelay" | "defaultStyle" | "activeStyle" | "appearStyle" | "enterStyle" | "leaveStyle" | "appearInitStyle" | "enterInitStyle" | "leaveInitStyle" | "defaultClassName" | "activeClassName" | "appearClassName" | "enterClassName" | "leaveClassName" | "appearInitClassName" | "enterInitClassName" | "leaveInitClassName";
export declare const actionPropKeys: ActionPropKeys[];
export declare type ActionProps = {
    [P in ActionPropKeys]?: CSSTransitionProps[P];
};
export declare type Action = {
    kind: ActionID;
    props: ActionProps;
};
export declare const transitionNames: string[];
export declare function hasTransition(name: string, props: any): boolean;
export declare function getDelay(name: string, delay: CSSTransitionDelay): number;
export declare type GetStateParams = {
    mode?: "init" | "prepare";
};
export declare function getState(id: StateID, name: string, props: any, params?: GetStateParams): TransitionState;
export declare function stateFunc(id: StateID, name: string, params?: GetStateParams): (props: ActionProps) => TransitionState;
export declare const activeNewState: (props: ActionProps) => TransitionState;
export declare const defaultNewState: (props: ActionProps) => TransitionState;
export declare const appearNewState: (props: ActionProps) => TransitionState;
export declare const activeState: (props: ActionProps) => TransitionState;
export declare const defaultState: (props: ActionProps) => TransitionState;
export declare const appearInitState: (props: ActionProps) => TransitionState;
export declare const enterInitState: (props: ActionProps) => TransitionState;
export declare const leaveInitState: (props: ActionProps) => TransitionState;
export declare const appearPrepareState: (props: ActionProps) => TransitionState;
export declare const enterPrepareState: (props: ActionProps) => TransitionState;
export declare const leavePrepareState: (props: ActionProps) => TransitionState;
export declare const appearTriggeredState: (props: ActionProps) => TransitionState;
export declare const enterTriggeredState: (props: ActionProps) => TransitionState;
export declare const leaveTriggeredState: (props: ActionProps) => TransitionState;
export declare const appearStartedState: (props: ActionProps) => TransitionState;
export declare const enterStartedState: (props: ActionProps) => TransitionState;
export declare const leaveStartedState: (props: ActionProps) => TransitionState;
export declare type Reducer = (stateID: StateID, action: Action) => {
    state: TransitionState;
    pending?: ActionID;
    completed?: boolean;
};
export declare const reducer: Reducer;
