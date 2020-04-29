import { createContext } from 'react';

import { ContactFormValues, UserInfo } from '../constants/formOptions';

export const Context = createContext({
  userInfo: { email: '', name: '', logged: false },
  setUserInfo: (userInfo: UserInfo) => userInfo,
  formValues: {
    name: '',
    email: '',
    membership: '',
    help: 0,
    message: '',
  },
  setFormValues: (formValues: ContactFormValues) => formValues,
});
