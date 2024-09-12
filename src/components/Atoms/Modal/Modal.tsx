'use client';
import { FC, ReactElement, useState } from 'react';

import { ModalWindow } from './ModalWindow';

interface ModalProps {
  children?: ReactElement;
  label?: string;
}

export const Modal: FC<ModalProps> = ({ children, label }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="rounded-md border border-red-600 p-2 text-red-600"
      >
        {label ? label : 'Delete your Account'}
      </button>
      {open ? (
        <ModalWindow
          onClick={() => {
            setOpen(!open);
          }}
        >
          {children}
        </ModalWindow>
      ) : null}
    </>
  );
};
