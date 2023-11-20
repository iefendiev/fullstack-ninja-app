import { Navbar } from '@/components/layout/Navbar';
import '../../src/styles/globals.css';
import { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="h-full w-full p-8">{children}</div>
    </>
  );
}
