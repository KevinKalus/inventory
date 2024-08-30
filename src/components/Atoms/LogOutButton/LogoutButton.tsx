'use client';

import { logOut } from '@/app/actions';

export const LogOutButton = () => {
  return (
    <button
      className="rounded-md border border-red-500 p-2"
      onClick={() => {
        logOut();
      }}
    >
      Logout
    </button>
  );
};
