import { UserAuthentication } from '~/models/dataview';

export interface RegiserFormProps {
  onSubmit: (value: { username: string; password: string }) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  action?: string;
  buttonText?: string;
}

export interface RegisterInterface extends UserAuthentication {
  passwordConfirmation: string;
}
