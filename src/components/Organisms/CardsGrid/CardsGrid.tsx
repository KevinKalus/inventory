import { FC, useState } from 'react';


import { Card } from '@/components/Molecules/Card/Card';
import {  Collection, ImageFields } from '@/Types/Types';

interface CardsGridProps {
  cards: ImageFields[]
}

export const CardsGrid: FC<CardsGridProps> =  ({ cards }) => {


  return (
    <div className='flex flex-col gap-5'>
    <div  className='grid grid-cols-2 gap-2'>
      {cards.map((card, index) =>( 
        <Card key={index} imgSrc={"https:"+card.fields.file.url} id={card.fields.file.fileName.split('.')[0]} />
         ))}
    </div>
    <button className='rounded-md border-4 border-green-500 text-white p-2 col-span-full'>Add to collection</button>
    </div>
  );
};
