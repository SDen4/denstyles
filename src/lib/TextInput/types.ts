export type InputType = {
  placeholder?: string;
  label?: string | undefined;
  vertical?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: React.SyntheticEvent) => void;
  addClass?: unknown;
};
