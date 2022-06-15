import React from 'react';
import { InputType } from './types';
import styles from './styles.module.css';

const TextInput: React.FC<InputType> = ({
  placeholder = 'Enter the value',
  onChange = () => null,
  label,
}): JSX.Element => (
  <>
    {label?.length && (
      <label className={styles.label} htmlFor="testInput">
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
  </>
);

export default TextInput;
