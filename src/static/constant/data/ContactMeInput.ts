interface InputField<T> {
  label: string;
  type: 'text' | 'email' | 'textarea';
  name: keyof T;
}
export type Inputs = {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
};
export const CONTACT_ME_INPUTS: InputField<Inputs>[] = [
  {
    label: 'Name',
    type: 'text',
    name: 'Name' as keyof Inputs,
  },
  {
    label: 'Email',
    type: 'email',
    name: 'Email' as keyof Inputs,
  },
  {
    label: 'Subject',
    type: 'text',
    name: 'Subject' as keyof Inputs,
  },
  {
    label: 'Message',
    type: 'textarea',
    name: 'Message' as keyof Inputs,
  },
];
