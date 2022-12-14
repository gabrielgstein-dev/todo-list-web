export interface FormLoginProps {
  onSubmit: (value: { username: string; password: string }) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  action?: string;
  size?: number;
  buttonLoginText?: string;
}
