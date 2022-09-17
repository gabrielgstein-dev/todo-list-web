import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';

export interface LeftSideLoginProps {
  submitLoginForm: (value: RequestAuthUser) => void;
  buttonRegisterText?: string;
  buttonForgotPasswordText?: string;
  title?: string;
  paragraph?: string;
}
