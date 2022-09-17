import { InputProps } from '@atoms/Input/Input.interface';

export interface InputWithLabelProps extends InputProps {
  label?: string;
  disabled?: boolean;
  errorMessage?: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
