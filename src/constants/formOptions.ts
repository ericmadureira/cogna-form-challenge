type ContactSubject = {
  id: number;
  label: string;
}

const contactSubjects: ContactSubject[] = [
  { id: 1, label: 'I have question about my membership' },
  { id: 2, label: 'I have technical question' },
  { id: 3, label: 'I would like to change membership' },
  { id: 4, label: 'Other question' },
];

const formOptions = {
  contactSubjects,
};

export default formOptions;
