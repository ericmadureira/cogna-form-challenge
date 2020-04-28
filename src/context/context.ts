import { createContext } from 'react';

export const Context = createContext({
  userInfo: { email: '', name: '' },
  setUserInfo: () => {},
  formValues: {
    name: '',
    email: '',
    membership: '',
    help: 0,
    message: '',
  },
  setFormValues: () => {},
});
