export interface PropsType {
  /** Add className */
  className?: string;
  /** Additional props */
  props?: unknown;
  /** Add handler */
  onClick?: () => void;
  /** Add inline styles */
  style?: React.CSSProperties | undefined;
}
