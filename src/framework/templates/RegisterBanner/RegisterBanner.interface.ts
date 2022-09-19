import { RequestRegisterUser } from '@models/datacore';
export interface RegisterBannerTemplate {
  submitRegisterForm: (value: RequestRegisterUser) => void;
  buttonRegisterText?: string;
}
