import clsx from 'clsx';
// import Link from 'next/link';
import { FC } from 'react';

import { Login, signUp } from '@/app/actions';

interface LoginProps {
  className?: string;
  login?: boolean;
}

export const LoginForm: FC<LoginProps> = ({ className, login }) => {
  return (
    <div className={clsx('flex flex-col border-2', className)}>
      {/*  eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="m-4" action={login ? Login : signUp}>
        <h1 className="text-center underline underline-offset-4">{login ? 'Login' : 'Sign Up'}</h1>
        <p>Email</p>
        <input type="email" name="email" required className="w-full border-2" />
        <p>Password</p>
        <input type="password" name="password" className="w-full border-2" required />

        {login ? (
          <div className="mt-4 flex flex-col items-start gap-2">
            {/* <label className="mt-2 flex" htmlFor="">
              <input className="mr-2 self-center" type="checkbox" />
              <p>Remember me?</p>
            </label>
            <Link href="#0" className="hover:underline">
              Forgot Password?
            </Link> */}
            <button className="rounded-xl border-2 px-2 hover:bg-white" type="submit">
              Login
            </button>
          </div>
        ) : (
          <div className="mt-4 flex flex-col items-start gap-2">
            <button className="rounded-xl border-2 px-2 hover:bg-white" type="submit">
              Sign Up
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
