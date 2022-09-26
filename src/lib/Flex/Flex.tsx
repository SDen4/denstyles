import React, { PropsWithChildren } from 'react';

import { PropsType } from './types';

import classes from './styles.module.css';

/**
 *Component for Flex markup elevent
 */

const Flex: React.FC<PropsWithChildren<PropsType>> = ({
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
