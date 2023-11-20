import { PropsWithChildren } from 'react';
import '../../src/styles/globals.css';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-primary">
      {children}
    </div>
  );
}
