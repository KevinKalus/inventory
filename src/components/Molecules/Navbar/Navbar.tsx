import Link from 'next/link';
import { FC } from 'react';

import { guestLinks, userLinks } from './NavLinks';

interface NavbarProps {
  loggedIn: boolean;
}

export const Navbar: FC<NavbarProps> = ({ loggedIn }) => {
  return (
    <ul className="mb-14 mt-5 flex justify-around">
      {loggedIn
        ? userLinks.map((e, index) => (
            <li key={index}>
              <Link href={e.ref}>{e.label}</Link>
            </li>
          ))
        : guestLinks.map((e, index) => (
            <li key={index}>
              <Link href={e.ref}>{e.label}</Link>
            </li>
          ))}
      {loggedIn ? (
        <li>
          <button>Log out</button>
        </li>
      ) : null}
    </ul>
  );
};
