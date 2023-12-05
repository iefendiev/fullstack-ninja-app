'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login } from '@/api/login.api';
import { FormInput } from '@/components/Input/FormInput';

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const methods = useForm<FormData>();
  const { handleSubmit } = methods;
  const { push } = useRouter();

  const onSubmit = async (data: FormData) => {
    await login(data);
    push('/');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center gap-12">
          <h1 className="text-4xl text-white font-bold">Login</h1>
          <div className="flex flex-col justify-center items-center gap-4">
            <FormInput
              fieldName="email"
              placeholder="Email"
              registerOptions={{
                required: 'Email is required',
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
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2"
              type="submit"
            >
              Login
            </button>
          </div>
          <div>
            <p className="text-white font-bold">Don&apos;t have an account?</p>
            <Link href="/auth/register">
              <p className="text-white font-bold text-center underline">
                Register
              </p>
            </Link>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
