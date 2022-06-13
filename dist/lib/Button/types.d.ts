export declare type ButtonType = {
    type: 'button' | 'reset' | 'submit';
    title: string;
    disabled: boolean;
    onclick: () => void;
    addClass: any;
};
