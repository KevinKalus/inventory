'use client';
import { FC, ReactElement, useState } from 'react';

import { ModalWindow } from './ModalWindow';

interface ModalProps {
  children?: ReactElement;
}

export const Modal: FC<ModalProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Modal
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
