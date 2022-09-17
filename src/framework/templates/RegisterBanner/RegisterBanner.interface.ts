import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';

export interface RegisterBannerTemplate {
  submitRegisterForm: (value: RequestAuthUser) => void;
  buttonRegisterText?: string;
}
