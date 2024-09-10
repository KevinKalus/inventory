import Image from 'next/image';
import { FC } from 'react';

import { Button } from '@/components/Atoms/Button/Button';
import { ModalButton } from '@/components/Organisms/ModalButton/ModalButton';
import { imageProps } from '@/Types/Card';

interface CardProps {
  img: imageProps;
  name: string;
  id: string;
}

export const Card: FC<CardProps> = ({ img, name, id }) => {
  return (
    <article className="flex flex-col">
      <div className="mt-3 flex gap-1">
        <ModalButton img={img}>
          <Image src={img.src} alt={img.alt} height={200} width={200} />
        </ModalButton>
        <div className="flex h-full flex-col gap-2">
          <Button label={'+'} href={''} />
          <Button label={'+'} href={''} />
          <Button label={'+'} href={''} />
          <Button label={'+'} href={''} />
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
