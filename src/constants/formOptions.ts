type ContactSubject = {
  id: number;
  label: string;
}

export type ContactFormValues = {
  name: string;
  email: string;
  membership: string;
  help: number;
  message: string;
}

export type UserInfo = {
  email: string;
  name: string;
}

export const contactSubjects: ContactSubject[] = [
  { id: 1, label: 'I have question about my membership' },
  { id: 2, label: 'I have technical question' },
  { id: 3, label: 'I would like to change membership' },
  { id: 4, label: 'Other question' },
];

export const initialContactFormValues: ContactFormValues = {
  name: '',
  email: '',
  membership: 'A',
  help: 1,
  message: '',
};
