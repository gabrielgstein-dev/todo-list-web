import { RequestRegisterUser } from '@models/datacore';

const allParamsFilled = (form: RequestRegisterUser): boolean => {
  return !!form?.password && !!form?.passwordConfirmation && !!form?.email;
};

const comparePasswords = (password: string, confirmationPass: string) => {
  return password === confirmationPass;
};
export const hasButtonDisabled = (form: RequestRegisterUser): boolean => {
  const resolution =
    allParamsFilled(form) && comparePasswords(form.password, form.passwordConfirmation);

  return resolution;
};
