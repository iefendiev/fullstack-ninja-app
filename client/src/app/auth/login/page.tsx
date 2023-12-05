'use client';

import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login } from '@/api/login.api';
import AuthLayout from '../layout';

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const methods = useForm<FormData>();
  const { handleSubmit, register } = methods;
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
            <div className="flex flex-col">
              <label className="text-white font-bold">Email</label>
              <input
                className="border-2 border-gray-700 rounded-md px-2 py-1 w-[300px]"
                type="email"
                placeholder="Email"
                {...register('email')}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-bold">Password</label>
              <input
                className="border-2 border-gray-700 rounded-md px-2 py-1 w-[300px]"
                type="password"
                placeholder="Password"
                {...register('password')}
              />
            </div>
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

Login.getLayout = function getLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};
