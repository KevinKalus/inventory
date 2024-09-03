'use client';

import { logOut } from '@/app/actions';

export const LogOutButton = () => {
  return (
    <button
      onClick={() => {
        logOut();
      }}
    >
      Logout
    </button>
  );
};
