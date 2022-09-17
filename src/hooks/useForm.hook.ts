/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
export const useForm = <T>(): [T, (evt: any) => void] => {
  const [state, setState] = useState<T>({} as T);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.persist();
    setState((state) => ({ ...state, [evt.target.name]: evt.target.value.toString() }));
  };

  return [state, handleChange];
};
