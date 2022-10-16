import React from 'react';

import { IButton } from './types';

import styles from './styles.module.css';
import { defaultBGColor, defaultColor } from '../constants';

/**
 *Button component
 *
 * @param {*} {
 *   type = 'button',
 *   title = 'Push',
 *   disabled = false,
 *   onclick = () => null,
 *   className = '',
 *   backgroundColor = '',
 *   color = ''
 * }
 * @return {*}  {JSX.Element}
 */

const Button: React.FC<IButton> = ({
  type = 'button',
  title = 'Push',
  disabled = false,
  onclick = () => null,
  className,
  backgroundColor = defaultBGColor,
  color = defaultColor,
}): JSX.Element => (
  <button
    type={type}
    onClick={onclick}
    disabled={disabled}
    className={`${styles.button} ${className} ${
      disabled ? styles.disabled : ''
    }`}
    style={{ backgroundColor, color }}
  >
    {title}
  </button>
);

export default Button;
