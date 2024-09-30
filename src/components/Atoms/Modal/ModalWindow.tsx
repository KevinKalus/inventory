import clsx from 'clsx';
import { FC, ReactElement } from 'react';

import { deleteUser } from '@/app/actions';

interface ModalWindowProps {
  onClick?: () => void;
  children?: ReactElement;
  className?: string;
}

export const ModalWindow: FC<ModalWindowProps> = ({ children, className, onClick }) => {
  return (
    <>
      {children ? (
        <article className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
          <div className="relative flex flex-col gap-5 rounded-md bg-blue-300 p-4 px-6 mx-5">
            {children}
            <button onClick={onClick} className="rounded-md border border-black p-2">
              Close
            </button>
          </div>
        </article>
      ) : (
        <form
          className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.5)]"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          action={deleteUser}
        >
          <div className={clsx('m-5 flex flex-col gap-5 rounded-md bg-blue-200 p-4', className)}>
            <h2 className="self-center">Are you sure?</h2>
            <span className="text-xs text-gray-500">
              Please verify your action by typing in your
              <span className="border-b border-red-600 text-red-600">{' password '}</span>
              and your <span className="border-b border-red-600 text-red-600">{' email'}</span>
            </span>
            <input type="email" name="email" placeholder="Email" className="px-2" required />
            <input type="password" name="password" placeholder="Password" className="px-2" required />
            <div className="flex justify-center gap-4">
              <button
                type="submit"
                className="rounded-md border border-red-600 p-2 hover:bg-red-600 hover:text-white"
              >
                Delete
              </button>
              <button onClick={onClick} className="rounded-md border border-black p-2">
                Close
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
