import Link from 'next/link';

import { isLoggedIn } from '@/app/actions';
import { LogOutButton } from '@/components/Atoms/LogOutButton/LogoutButton';

import { guestLinks, userLinks } from './NavLinks';

export const Navbar = async () => {
  const user = await isLoggedIn();

  return (
    <ul className="mb-14 mt-5 flex justify-around">
      {!user
        ? guestLinks.map((e, index) => {
            return (
              <Link className="rounded-md border border-red-500 p-2" key={index} href={e.ref}>
                {e.label}
              </Link>
            );
          })
        : userLinks.map((e, index) => {
            return (
              <Link key={index} className="rounded-md border border-red-500 p-2" href={e.ref}>
                {e.label}
              </Link>
            );
          })}
      {user ? <LogOutButton /> : null}
    </ul>
  );
};
