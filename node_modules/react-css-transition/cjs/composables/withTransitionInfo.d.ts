/// <reference types="react" />
export declare type WithTransitionInfoProps = {
    transitionInfo?: {
        firstPropertyDelay: number;
        firstProperty: string;
        lastProperty: string;
        totalDuration: number;
    };
};
export declare const withTransitionInfo: {
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
