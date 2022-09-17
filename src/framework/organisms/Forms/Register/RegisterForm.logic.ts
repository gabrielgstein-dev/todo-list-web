import { RegisterInterface } from './RegisterForm.interface';

const allParamsFilled = (form: RegisterInterface): boolean => {
  console.log('Pass', form?.password);
  console.log('Pass Confirm', !!form?.passwordConfirmation);
  console.log('Username BOOL', !!form?.username);
  console.log('Username', form);
  return !!form?.password && !!form?.passwordConfirmation && !!form?.username;
};

const comparePasswords = (password: string, confirmationPass: string) => {
  return password === confirmationPass;
};
export const hasButtonDisabled = (form: RegisterInterface): boolean => {
  const resolution =
    allParamsFilled(form) && comparePasswords(form.password, form.passwordConfirmation);

  return resolution;
};
