import Image from 'next/image';
import { FC, useState } from 'react';

import { Modal } from '@/components/Atoms/Modal/Modal';

interface CardProps {
  imgSrc: string;
  id: string;
  onChange?: (id: string, newAmount: number)=> void
}

export const Card: FC<CardProps> = ({ imgSrc,  id ,onChange }) => {
  const [collection, setCollection] = useState({
    amount: 0,
    name: id
  })
  const increment = () => {
    setCollection({
      amount: collection.amount + 1,
      name: id
    })
  }
  const clearAmount = () => {
    setCollection({
      amount: collection.amount = 0,
      name: id
    })
  }
  const decrease = () => {
    if (collection.amount > 0) {
      setCollection({
        amount: collection.amount -1,
        name:id});
    }
  };
  console.log("CARDS COMPONENT",collection)
  return (
    <div>
    <Modal  cardId={id} img={imgSrc}>
    <article className="flex flex-col">
      <div className="mt-3 flex gap-1">
        <Image src={imgSrc} alt={id} height={400} width={400} />
      </div>
    </article>
    </Modal> 
      <span>
      {`Amount: ${collection.amount}`}  
      </span>  
    <div className='flex gap-4'>
    <button className='border w-1/3 px-2' onClick={increment}>+</button>
    <button className='border w-1/3 px-2' onClick={clearAmount}>clear</button>
    <button className='border w-1/3 px-2' onClick={decrease}>-</button>

    </div>
    </div>
  );
};
