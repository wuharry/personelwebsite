interface input {
  label: string;
  type: string;
  name: string;
}

export const CONTACT_ME_INPUTS: input[] = [
  {
    label: 'Name',
    type: 'text',
    name: 'Name',
  },
  {
    label: 'Email',
    type: 'email',
    name: 'Email',
  },
  {
    label: 'Subject',
    type: 'text',
    name: 'Subject',
  },
  {
    label: 'Message',
    type: 'textarea',
    name: 'Message',
  },
];
