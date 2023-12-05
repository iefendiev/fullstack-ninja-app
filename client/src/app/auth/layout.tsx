import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-primary">
      {children}
    </div>
  );
}
