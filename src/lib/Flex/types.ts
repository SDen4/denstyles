import { HTMLAttributes } from 'react';

export interface PropsType extends HTMLAttributes<HTMLDivElement> {
  /** Add className */
  className?: string;
  /** Additional props */
  props?: unknown;
  /** Add handler */
  onClick?: () => void;
  /** Add inline styles */
  style?: React.CSSProperties | undefined;
}
