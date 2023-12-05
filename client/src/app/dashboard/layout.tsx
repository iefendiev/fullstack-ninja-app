import { Navbar } from '@/components/Navbar';
import { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="h-full w-full p-8">{children}</div>
    </>
  );
}
