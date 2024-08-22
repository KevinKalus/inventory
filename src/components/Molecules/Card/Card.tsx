import Image from 'next/image';
import { FC } from 'react';

interface imageProps {
  src: string;
  alt: string;
}

interface CardProps {
  img: imageProps;
  name: string;
  id: string;
}

export const Card: FC<CardProps> = ({ img, name, id }) => {
  return (
    <article className="flex max-w-xs flex-col">
      <Image src={img.src} alt={img.alt} width={210} height={300} className="relative" />
      <div className="fixed m-2 flex flex-col gap-5">
        <button className="bg-cyan-300 px-2">t</button>
        <button className="bg-cyan-300 px-2">t</button>
        <button className="bg-cyan-300 px-2">t</button>
        <button className="bg-cyan-300 px-2">t</button>
      </div>
      <p className="mt-2 w-full">
        {`Name: ${name}`}
        <br />
        {`Card-ID: ${id}`}
      </p>
    </article>
  );
};
