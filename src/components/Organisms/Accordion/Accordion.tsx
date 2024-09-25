'use client';
import clsx from 'clsx';
import { FC,  useState } from 'react';


import { AccordionContent } from '../../Molecules/AccordionContent/AccordionContent';
import { Sets } from '@/Types/Types';

interface AccordionProps {
  className?: string;
  sets: Sets[]
}

export const Accordion: FC<AccordionProps> = ({ className,sets }) => {
  const [expand, setExpand] = useState<number | false>(false);
  const handleToggle = (index: number) => {
    setExpand(prevIndex => (prevIndex === index ? false : index));
  };
  return (
    
    <div className={clsx('divide-y divide-slate-200', className)}>
      {sets.map((set, index) => (
        <AccordionContent
          key={index}
          setId={set.setId}
          setName={set.setName}
          isOpen={expand === index}
          onToggle={() => handleToggle(index)}
          cards={set.imgs}
        />     
      ))}
    </div>
  );
};
