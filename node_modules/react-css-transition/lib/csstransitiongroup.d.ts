/// <reference types="react" />
import * as React from "react";
import { Component, ReactElement, HTMLAttributes, ComponentClass, StatelessComponent } from "react";
import { CSSTransitionProps } from "./csstransition";
export interface CSSTransitionGroupProps extends HTMLAttributes<any> {
    transitionAppear?: boolean;
    component?: string | ComponentClass<any> | StatelessComponent<any>;
    children?: ReactElement<CSSTransitionProps> | Array<ReactElement<CSSTransitionProps>>;
}
export declare class CSSTransitionGroup extends Component<CSSTransitionGroupProps, {}> {
    static defaultProps: any;
    private mounted;
    componentDidMount: () => boolean;
    render(): JSX.Element;
}
export interface CSSTransitionGroupChildProps {
    transitionAppear?: boolean;
    mounted?: boolean;
    children?: ReactElement<any>;
}
export declare class CSSTransitionGroupChild extends Component<CSSTransitionGroupChildProps, CSSTransitionProps> {
    static defaultProps: any;
    private leaveDone;
    constructor(props: any);
    componentWillAppear(done: () => void): void;
    componentWillEnter(done: () => void): void;
    componentWillLeave(done: () => void): void;
    render(): React.ReactElement<any>;
    private onTransitionComplete;
}
