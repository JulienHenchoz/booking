/// <reference types="react" />
import * as React from "react";
export declare const withWorkaround: {
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
