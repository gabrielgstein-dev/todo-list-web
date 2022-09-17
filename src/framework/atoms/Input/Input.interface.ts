import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  name: string;
  type?: 'text' | 'password';
  hasError?: boolean;
}
