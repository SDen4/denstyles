import React from 'react';
import { ButtonType } from './types';

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
    className={addClass}
  >
    {title}
  </button>
);

export default Button;
