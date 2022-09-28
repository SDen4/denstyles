import React from 'react';

import { ButtonType } from './types';

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

const Button: React.FC<ButtonType> = ({
  type = 'button',
  title = 'Push',
  disabled = false,
  onclick = () => null,
  className = '',
  backgroundColor = defaultBGColor,
  color = defaultColor,
}): JSX.Element => (
  <button
    type={type}
    onClick={onclick}
    disabled={disabled}
    className={`${styles.button} ${
      disabled ? styles.disabled : ''
    } ${className}`}
    style={{ backgroundColor, color }}
  >
    {title}
  </button>
);

export default Button;
