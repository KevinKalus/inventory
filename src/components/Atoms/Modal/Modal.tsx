'use client';
import Image from 'next/image';
import { FC, ReactElement, useState } from 'react';

import { CardProps } from '@/Types/Card';

import { ModalWindow } from './ModalWindow';

interface ModalProps {
  children?: ReactElement;
  label?: string;
  card?: CardProps;
}

export const Modal: FC<ModalProps> = ({ children, label, card }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {children ? (
        <div>
          <Image
            src={card?.img.src ?? 'https://placehold.co/200x200?text=No+Image'}
            alt={card?.img.alt ?? 'Card-Image'}
            height={200}
            width={200}
            className="hover:cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <div className="flex flex-col">
            <span>{`Name: ${card?.name}`}</span>
            <span>{`ID: ${card?.id}`}</span>
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
