import { RequestRegisterUser } from '@models/datacore';

export interface RegiserFormProps {
  onSubmit: (value: RequestRegisterUser) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  action?: string;
  buttonText?: string;
}
