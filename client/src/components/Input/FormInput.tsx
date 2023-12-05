import { useFormContext } from 'react-hook-form';
import { FormInputProps } from './types';

export const FormInput = ({
  label,
  inputType = 'text',
  placeholder,
  fieldName,
  registerOptions,
}: FormInputProps) => {
  const { register, formState } = useFormContext();

  return (
    <div className="flex flex-col">
      <label className="text-white font-bold">{label}</label>
      <input
        className="border-2 border-gray-700 rounded-md px-2 py-1 w-[300px]"
        type={inputType}
        placeholder={placeholder}
        {...register(fieldName, registerOptions)}
      />
      {formState.errors[fieldName] && (
        <p className="text-red-500">
          {formState.errors[fieldName]?.message as string}
        </p>
      )}
    </div>
  );
};
