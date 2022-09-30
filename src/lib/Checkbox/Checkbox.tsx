import React from 'react';

import { PropsType } from './types';

import classes from './styles.module.css';

/**
 *Component for Flex markup element
 *
 * @param {*} {
 *   title,
 *   color,
 *   className,
 *   classNameLabel,
 *   style,
 *   disabled
 *   ...props
 * }
 */

const Checkbox: React.FC<PropsType> = ({
  title,
  color,
  className,
  classNameLabel,
  style,
  disabled,
  ...props
}) => (
  <div className={classes.wrapper} style={style}>
    <label className={classNameLabel}>
      <div
        className={`${classes.checkbox} ${className}`}
        style={{ backgroundColor: color }}
        {...props}
      />

      <span>{title}</span>
    </label>
  </div>
);

export default Checkbox;
