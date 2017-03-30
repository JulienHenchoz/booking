/// <reference types="react" />
import { CSSTransitionInnerProps } from "../csstransition";
export declare type WithDOMNodeCallbackProps = {
    onDOMNodeRef: CSSTransitionInnerProps["onDOMNodeRef"];
    getDOMNode: () => Element;
};
export declare const withDOMNodeCallback: {
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
