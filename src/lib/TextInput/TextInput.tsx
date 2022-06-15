import React from 'react';
import { InputType } from './types';
import styles from './styles.module.css';

const TextInput: React.FC<InputType> = ({
  placeholder = 'Enter the value',
  label,
  vertical = false,
  onChange = () => null,
  onSubmit = () => null,
  addClass = {},
}): JSX.Element => (
  <div
    className={`${styles.textInputWrapper} ${
      vertical && styles.vertical
    } ${addClass}`}
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
      onSubmit={onSubmit}
    />
  </div>
);

export default TextInput;
