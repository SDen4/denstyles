import React from 'react';

import { InputType } from './types';

import styles from './styles.module.css';

/**
 *Component for test input
 *
 * @param {*} {
 *   placeholder = 'Enter the value',
 *   label,
 *   vertical = false,
 *   onChange = () => null,
 *   onSubmit = () => null,
 *   addClass = {},
 * }
 * @return {*}  {JSX.Element}
 */

const TextInput: React.FC<InputType> = ({
  placeholder = 'Enter the value',
  label,
  vertical = false,
  onChange = () => null,
  onSubmit = () => null,
  addClass = {},
}): JSX.Element => (
  <form
    className={`${styles.textInputWrapper} ${
      vertical && styles.vertical
    } ${addClass}`}
    onSubmit={onSubmit}
  >
    {label?.length && (
      <label
        className={`${styles.label} ${vertical && styles.labelVertical}`}
        htmlFor="testInput"
      >
        {label}
      </label>
    )}

    <input
      id="testInput"
      className={styles.input}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  </form>
);

export default TextInput;
