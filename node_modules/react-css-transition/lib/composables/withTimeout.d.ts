/// <reference types="react" />
export declare const timeoutMultiplier = 3;
export declare const withTimeout: {
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
