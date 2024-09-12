import { FC, ReactElement } from 'react';

import { deleteUser } from '@/app/actions';

interface ModalWindowProps {
  onClick?: () => void;
  children?: ReactElement;
}

export const ModalWindow: FC<ModalWindowProps> = ({ children }) => {
  return (
    <>
      {children ? (
        children
      ) : (
        <form
          className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.5)]"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          action={deleteUser}
        >
          <div className="m-5 flex flex-col gap-5 rounded-md bg-blue-200 p-4">
            <h2 className="self-center">Are you sure?</h2>
            <span className="text-xs text-gray-500">
              Please verify your action by typing in your
              <span className="border-b border-red-600 text-red-600">{' password '}</span>
              and your <span className="border-b border-red-600 text-red-600">{' email'}</span>
            </span>
            <input type="email" name="email" placeholder="Email" className="px-2" required />
            <input type="password" name="password" placeholder="Password" className="px-2" required />
            <button
              type="submit"
              className="w-1/2 self-center border border-red-600 hover:bg-red-600 hover:text-white"
              // onClick={onClick}
            >
              Delete
            </button>
          </div>
        </form>
      )}
    </>
  );
};
