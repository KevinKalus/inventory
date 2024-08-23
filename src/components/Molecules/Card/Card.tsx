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
    <article className="relative flex max-w-52 flex-col">
      <Image src={img.src} alt={img.alt} width={210} height={300} />
      <div className="absolute z-10 m-2 flex flex-col gap-3 self-end">
        <button className="rounded-full bg-cyan-300 px-2 hover:bg-green-300">+</button>
        <button className="rounded-full bg-cyan-300 px-2 hover:bg-green-300">+</button>
        <button className="rounded-full bg-cyan-300 px-2 hover:bg-green-300">+</button>
        <button className="rounded-full bg-cyan-300 px-2 hover:bg-green-300">+</button>
      </div>
      <p className="mt-2 w-full">
        {`Name: ${name}`}
        <br />
        {`Card-ID: ${id}`}
      </p>
      <ModalButton label={'show card'} img={img} className="mt-3" description={description ?? ''} />
    </article>
  );
};
