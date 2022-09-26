import React from 'react';

import { ButtonType } from './types';

import styles from './styles.module.css';

/**
 *Button component
 *
 * @param {*} {
 *   type = 'button',
 *   title = 'Push',
 *   disabled = false,
 *   onclick = () => null,
 *   addClass = {},
 * }
 * @return {*}  {JSX.Element}
 */

const Button: React.FC<ButtonType> = ({
  type = 'button',
  title = 'Push',
  disabled = false,
  onclick = () => null,
  addClass = {},
}): JSX.Element => (
  <button
    type={type}
    onClick={onclick}
    disabled={disabled}
    className={`${styles.button} ${addClass}`}
  >
    {title}
  </button>
);

export default Button;
