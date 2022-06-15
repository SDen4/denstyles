export declare type ButtonType = {
    /** button type */
    type?: 'button' | 'reset' | 'submit';
    /** button title */
    title?: string;
    /** disable button */
    disabled?: boolean;
    /** button on click handler  */
    onclick?: () => void;
    /** add your class to style button */
    addClass?: unknown;
};
