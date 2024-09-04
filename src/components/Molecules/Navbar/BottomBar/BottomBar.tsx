import Link from 'next/link';

import { isLoggedIn } from '@/app/actions';

export const BottomBar = async () => {
  const user = await isLoggedIn();
  return (
    <>
      {user ? (
        <div className="mb-5 flex w-full justify-around">
          <Link href={'/cards'}>Cards</Link>
          <Link href={'/collection'}>Collection</Link>
          <Link href={'/profile'}>Profile</Link>
        </div>
      ) : (
        <div className="mb-5 flex w-full justify-around">
          <Link href={'/signup'}>Sign Up</Link>
          <Link href={'/cards'}>Cards</Link>
          <Link href={'/login'}>Login</Link>
        </div>
      )}
    </>
  );
};
