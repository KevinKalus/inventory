import Image from 'next/image';
import { FC } from 'react';

import { Modal } from '@/components/Atoms/Modal/Modal';

interface CardProps {
  imgSrc: string;
  id: string;
}

export const Card: FC<CardProps> = ({ imgSrc,  id }) => {
  return (
    <Modal  cardId={id} img={imgSrc}>
    <article className="flex flex-col">
      <div className="mt-3 flex gap-1">
        <Image src={imgSrc} alt={""} height={200} width={200} />
      </div>
      <p className="mt-2 w-full">
        <br />
        {`Card-ID: ${id}`}
      </p>
    </article>
    </Modal>
  );
};
