import Image from 'next/image';
import { FC } from 'react';

import { Modal } from '@/components/Atoms/Modal/Modal';
import { useCollection } from '@/utils/ContextProvider';

interface CardProps {
  imgSrc: string;
  cardName: string;
  user?: boolean
}

export const Card: FC<CardProps> = ({ imgSrc,  cardName,   }) => {
  const {collection, increment, decrease, clearAmount} = useCollection()
  const currentItem = collection.find(item => item.name === cardName); 

  return (
    <div>
    <Modal  cardId={cardName} img={imgSrc}>
    <article className="flex flex-col">
      <div className="mt-3 flex gap-1">
        <Image src={imgSrc} alt={cardName} height={400} width={400} />
      </div>
    </article>
    </Modal> 
      <span>
      {`Amount: ${currentItem ? currentItem.amount : 0 }`}  
      </span> 
  
      <div className='flex gap-4'>
    <button className='border w-1/3 px-2' onClick={()=>increment(cardName, imgSrc)}>+</button>
    <button className='border w-1/3 px-2' onClick={()=>clearAmount(cardName, imgSrc)}>clear</button>
    <button className='border w-1/3 px-2' onClick={()=>decrease(cardName, imgSrc)}>-</button>
    </div>  
    
    </div>
  );
};
