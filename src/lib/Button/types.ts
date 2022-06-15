export type ButtonType = {
  type?: 'button' | 'reset' | 'submit';
  title?: string;
  disabled?: boolean;
  onclick?: () => void;
  addClass?: unknown;
};
