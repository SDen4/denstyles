export type ButtonType = {
  /** Button type */
  type?: 'button' | 'reset' | 'submit';
  /** Button title */
  title?: string;
  /** Disable button */
  disabled?: boolean;
  /** Button on click handler  */
  onclick?: () => void;
  /** Add your class to style button */
  addClass?: unknown;
};
