import Image from 'next/image';
import { FC } from 'react';

import { ModalButton } from '@/components/Organisms/ModalButton/ModalButton';
import { imageProps } from '@/Types/Card';

interface CardProps {
  img: imageProps;
  name: string;
  id: string;
  description: string;
}

export const Card: FC<CardProps> = ({ img, name, id, description }) => {
  return (
    <article className="flex flex-col">
      <div className="mt-3 flex gap-1">
        <ModalButton img={img} description={description ?? ''}>
          <Image src={img.src} alt={img.alt} height={200} width={200} />
        </ModalButton>
        <div className="flex h-full flex-col gap-2">
          <button className="rounded-2xl bg-red-400 px-3">+</button>
          <button className="rounded-2xl bg-red-400 px-2">+</button>
          <button className="rounded-2xl bg-red-400 px-2">+</button>
          <button className="rounded-2xl bg-red-400 px-2">+</button>
        </div>
      </div>
      <p className="mt-2 w-full">
        {`Name: ${name}`}
        <br />
        {`Card-ID: ${id}`}
      </p>
    </article>
  );
};
