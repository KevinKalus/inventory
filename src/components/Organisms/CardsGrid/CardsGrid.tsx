import { FC } from 'react';


import { Card } from '@/components/Molecules/Card/Card';
import { ImageFields } from '@/Types/Types';

interface CardsGridProps {
  cards: ImageFields[]
}

export const CardsGrid: FC<CardsGridProps> =  ({ cards }) => {

  return (
    <div  className='grid grid-cols-2 gap-2'>
      {cards.map((card, index) =>( <Card imgSrc={"https:"+card.fields.file.url} id={card.fields.file.fileName} key={index}/> ))}
       
    </div>
  
  );
};
