'use client';
import { logout } from '@/api/login.api';
import { ROUTES } from '@/constants';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const { push } = useRouter();

  const handleLogout = () => {
    logout();
    push(ROUTES.LOGIN);
  };

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-purple-950 text-white h-20">
      <p className="text-2xl">Dojo House</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
