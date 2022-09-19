import { RequestAuthUser } from './RequestAuthUser';

export interface RequestRegisterUser extends RequestAuthUser {
  passwordConfirmation: string;
}
