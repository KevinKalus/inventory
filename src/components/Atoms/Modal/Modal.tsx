'use client';
import Image from 'next/image';
import { FC, ReactElement, useState } from 'react';


import { ModalWindow } from './ModalWindow';

interface ModalProps {
  children?: ReactElement;
  label?: string;
  cardId?: string
  img?: string;
  alt?: string
}

export const Modal: FC<ModalProps> = ({ children, label, cardId, alt,img }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {children ? (
        <div>
          <Image
            src={img ?? 'https://placehold.co/200x200?text=No+Image'}
            alt={alt ?? 'Card-Image'}
            height={500}
            width={500}
            className="hover:cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <div className="flex flex-col">
            <span>{`ID: ${cardId}`}</span>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="rounded-md border border-red-600 p-2 text-red-600"
        >
          {label ? label : 'Delete your Account'}
        </button>
      )}

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
