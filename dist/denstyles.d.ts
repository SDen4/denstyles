/// <reference types="react" />
import Button from './lib/Button/Button';
import TextInput from './lib/TextInput/TextInput';
import Flex from './lib/Flex/Flex';
export { Button, TextInput, Flex };
declare const _default: {
    Button: import("react").FC<import("./lib/Button/types").ButtonType>;
    TextInput: import("react").FC<import("./lib/TextInput/types").InputType>;
    Flex: import("react").FC<{
        children: JSX.Element;
        className?: string | undefined;
        props?: unknown;
        onClick?: (() => void) | undefined;
        style?: import("react").CSSProperties | undefined;
    }>;
};
export default _default;
