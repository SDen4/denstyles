import { ReactElement } from 'react';

export type PropsType = {
  children?: ReactElement;
  className?: string;
  props?: unknown;
  onClick?: () => void;
  style?: React.CSSProperties | undefined;
};
