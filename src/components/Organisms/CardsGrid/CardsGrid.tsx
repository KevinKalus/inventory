import { FC, useState } from 'react';


import { Card } from '@/components/Molecules/Card/Card';
import {  Collection, ImageFields } from '@/Types/Types';

interface CardsGridProps {
  cards: ImageFields[]
}

export const CardsGrid: FC<CardsGridProps> =  ({ cards }) => {
  const [amount, setAmount] = useState<Collection>()
  
  
  return (
    <div  className='grid grid-cols-2 gap-2'>
      {cards.map((card, index) =>( <div key={index}>
        <Card imgSrc={"https:"+card.fields.file.url} id={card.fields.file.fileName.split('.')[0]} />
        <span>{`Amount of Cards: ${0}`}</span>
        <div className='flex justify-between mt-2 gap-2'>
        <button className='border w-1/3 px-2' onClick={()=>{}}>+</button>
        <button className='border w-1/3 px-2' onClick={()=>{}}>Clear</button>
        <button className='border w-1/3 px-2' onClick={()=>{}}>-</button>
        </div>
        </div> ))}  
    </div>
  
  );
};
