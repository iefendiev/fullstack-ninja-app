import { HTMLInputTypeAttribute } from 'react';
import { RegisterOptions } from 'react-hook-form';

export interface FormInputProps {
  label?: string;
  inputType?: HTMLInputTypeAttribute;
  placeholder?: string;
  fieldName: string;
  registerOptions?: RegisterOptions;
}
