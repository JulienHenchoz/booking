/// <reference types="react" />
import { CSSProperties } from "react";
import { StateID, Reducer } from "../reducer";
export declare type TransitionState = {
    id?: StateID;
    style?: CSSProperties;
    className?: string;
    inTransition?: boolean;
};
export declare type WithTransitionStateProps = {
    transitionState?: TransitionState;
    timeout?: () => void;
};
export declare const withTransitionState: (reduce: Reducer) => {
    staticCallback?: (componentClass: React.ComponentClass<any>, target: string | React.ComponentClass<any> | React.StatelessComponent<any>) => void;
    instanceCallbacks?: {
        kind: any;
        callback: any;
    }[] | (() => {
        kind: any;
        callback: any;
    }[]);
} | {
    staticCallback?: (componentClass: React.ComponentClass<any>, target: string | React.ComponentClass<any> | React.StatelessComponent<any>) => void;
    instanceCallbacks?: {
        kind: any;
        callback: any;
    }[] | (() => {
        kind: any;
        callback: any;
    }[]);
}[];
