'use client';

import { FormProvider, useForm } from 'react-hook-form';
import Link from 'next/link';
import AuthLayout from '../layout';
import { ReactNode } from 'react';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const methods = useForm<FormData>();
  const { handleSubmit, register } = methods;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center h-screen w-fullgap-4">
          <div className="flex flex-col justify-center items-center gap-12">
            <h1 className="text-4xl text-white font-bold">Register</h1>
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
              <div className="flex flex-col">
                <label className="text-white font-bold">Confirm Password</label>
                <input
                  className="border-2 border-gray-700 rounded-md px-2 py-1 w-[300px]"
                  type="password"
                  placeholder="Confirm Password"
                  {...register('confirmPassword')}
                />
              </div>
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
