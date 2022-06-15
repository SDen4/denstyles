/// <reference types="react" />
export declare type InputType = {
    /** placeholder, by default: 'Enter the value' */
    placeholder?: string;
    /** label, by default: none */
    label?: string | undefined;
    /** vertical label (above the input) */
    vertical?: boolean;
    /** change input handler */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** submit form handler */
    onSubmit?: (event: React.SyntheticEvent) => void;
    /** add class to form,
     * use your class + label to style label,
     * use your class + input to style input */
    addClass?: unknown;
};
