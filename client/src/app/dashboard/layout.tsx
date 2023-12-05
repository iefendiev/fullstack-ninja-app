import { PropsWithChildren } from 'react';
import { Navbar } from '@/components/layout/Navbar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="h-full w-full p-8">{children}</div>
    </>
  );
}
