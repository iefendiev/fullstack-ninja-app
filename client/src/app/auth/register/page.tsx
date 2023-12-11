'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { FormProvider, useForm } from 'react-hook-form';

import AuthLayout from '../layout';
import { useRouter } from 'next/navigation';
import { FormInput } from '@/components/Input/FormInput';
import { ROUTES } from '@/constants';
import { useRegister } from '@/api/auth.api';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const methods = useForm<FormData>();
  const { push } = useRouter();
  const { handleSubmit } = methods;
  const { mutate: registerUser } = useRegister();

  const onSubmit = (data: FormData) => {
    registerUser(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          push(ROUTES.LOGIN);
        },
      }
    );
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center h-screen w-fullgap-4">
          <div className="flex flex-col justify-center items-center gap-12">
            <h1 className="text-4xl text-white font-bold">Register</h1>
            <div className="flex flex-col justify-center items-center gap-4">
              <FormInput
                fieldName="email"
                placeholder="Email"
                registerOptions={{
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format',
                  },
                }}
              />
              <FormInput
                inputType="password"
                fieldName="password"
                placeholder="Password"
                registerOptions={{
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                }}
              />
              <FormInput
                inputType="password"
                fieldName="confirmPassword"
                placeholder="Confirm Password"
                registerOptions={{
                  required: 'Confirm Password is required',
                  validate: (value) =>
                    value === methods.getValues('password') ||
                    'The passwords do not match',
                }}
              />
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
          <Link href="/auth/login">
            <p className="text-white font-bold text-center underline mt-4">
              Go to Login
            </p>
          </Link>
        </div>
      </form>
    </FormProvider>
  );
}

Register.getLayout = function getLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};
