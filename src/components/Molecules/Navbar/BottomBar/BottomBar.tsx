import Link from 'next/link';

import { isLoggedIn } from '@/app/actions';

import { bottomLinksGuest, bottomLinksUser } from './BottomBarLinks';

export const BottomBar = async () => {
  const user = await isLoggedIn();
  return (
    <>
      {user ? (
        <div className="mb-5 flex w-full justify-around">
          {bottomLinksUser.map((link, index) => {
            return (
              <Link key={index} href={link.href} className="rounded-md border border-black p-2">
                {link.label}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="mb-5 flex w-full justify-around">
          {bottomLinksGuest.map((link, index) => {
            return (
              <Link key={index} href={link.href} className="rounded-md border border-black p-2">
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
