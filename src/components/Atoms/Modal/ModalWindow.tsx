import { FC, ReactElement } from 'react';

interface ModalWindowProps {
  onClick?: () => void;
  children?: ReactElement;
}

export const ModalWindow: FC<ModalWindowProps> = ({ onClick, children }) => {
  return (
    <>
      {children ? (
        children
      ) : (
        <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
          <div className="m-5 flex flex-col gap-5 rounded-md bg-blue-200 p-4">
            <h2 className="self-center">Are you sure?</h2>
            <span className="text-xs text-gray-500">
              Please verify your action by typing in your
              <span className="border-b border-red-600 text-red-600">{' password'}</span>
            </span>
            <input type="password" name="name" placeholder="Password" className="px-2" />
            <button
              className="w-1/2 self-center border border-red-600 hover:bg-red-600 hover:text-white"
              onClick={onClick}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};
