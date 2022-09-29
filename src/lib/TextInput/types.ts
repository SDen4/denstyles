export type InputType = {
  /** Placeholder, by default: 'Enter the value' */
  placeholder?: string;
  /** Label, by default: none */
  label?: string | undefined;
  /** Vertical label (above the input) */
  vertical?: boolean;
  /** Change input handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Submit form handler */
  onSubmit?: (event: React.SyntheticEvent) => void;
  /** Add class to form,
   * Use your class + label to style label,
   * Use your class + input to style input */
  addClass?: unknown;
};
