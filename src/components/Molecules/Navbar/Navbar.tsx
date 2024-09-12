import Link from 'next/link';

import { isLoggedIn } from '@/app/actions';
import { LogOutButton } from '@/components/Atoms/LogOutButton/LogoutButton';

export const Navbar = async () => {
  const user = await isLoggedIn();

  return (
    <span className="w-screen">
      {user ? (
        <div className="m-4 flex justify-between">
          <Link href={'/'} className="rounded-md border border-black p-2">
            Home
          </Link>
          <LogOutButton />
        </div>
      ) : null}
    </span>
  );
};
