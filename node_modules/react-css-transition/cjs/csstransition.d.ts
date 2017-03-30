/// <reference types="react" />
import * as React from "react";
import { CSSProperties, ComponentClass, ReactNode, StatelessComponent, HTMLAttributes } from "react";
export declare type CSSTransitionDelay = number | {
    appear?: number;
    enter?: number;
    leave?: number;
};
export declare type CSSTransitionEventHandler = () => void;
export interface CSSTransitionProps extends HTMLAttributes<any> {
    component?: CSSTransitionInnerProps["component"];
    active?: boolean;
    transitionAppear?: boolean;
    transitionDelay?: CSSTransitionDelay;
    onTransitionComplete?: CSSTransitionEventHandler;
    children?: ReactNode;
    defaultStyle?: CSSProperties;
    activeStyle?: CSSProperties;
    appearStyle?: CSSProperties;
    enterStyle?: CSSProperties;
    leaveStyle?: CSSProperties;
    appearInitStyle?: CSSProperties;
    enterInitStyle?: CSSProperties;
    leaveInitStyle?: CSSProperties;
    style?: CSSProperties;
    defaultClassName?: string;
    activeClassName?: string;
    appearClassName?: string;
    enterClassName?: string;
    leaveClassName?: string;
    appearInitClassName?: string;
    enterInitClassName?: string;
    leaveInitClassName?: string;
    className?: string;
}
export interface CSSTransitionInnerProps extends HTMLAttributes<any> {
    style?: CSSProperties;
    component?: string | ComponentClass<any> | StatelessComponent<any>;
    onTransitionBegin: any;
    onTransitionComplete: any;
    onDOMNodeRef?: (ref: Element) => void;
}
export declare const CSSTransitionInner: StatelessComponent<CSSTransitionInnerProps>;
export declare const CSSTransition: React.ComponentClass<CSSTransitionProps>;
