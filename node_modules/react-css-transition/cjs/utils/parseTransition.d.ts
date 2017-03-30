export declare type TransitionEntry = {
    property: string;
    duration: number;
    delay: number;
};
export declare function parseTransition(transition: string): [TransitionEntry, TransitionEntry];
export default parseTransition;
