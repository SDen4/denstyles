import React from 'react';

import classes from './styles.module.css';

type PropsType = {
  children: JSX.Element;
  className?: string;
  props?: unknown;
  onClick?: () => void;
  style?: React.CSSProperties | undefined;
};

const Flex: React.FC<PropsType> = ({
  children,
  className,
  style,
  ...props
}) => (
  <div className={`${classes.flex} ${className}`} style={style} {...props}>
    {children}
  </div>
);
export default Flex;
