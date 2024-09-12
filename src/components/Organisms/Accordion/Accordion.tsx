'use client';
import clsx from 'clsx';
import { FC, useState } from 'react';

import { mockSets } from '@/mocks/mockSets';

import { AccordionContent } from '../../Molecules/AccordionContent/AccordionContent';
import { CardsGrid } from '../CardsGrid/CardsGrid';

interface AccordionProps {
  className?: string;
}

export const Accordion: FC<AccordionProps> = ({ className }) => {
  const [expand, setExpand] = useState<number | false>(false);
  const handleToggle = (index: number) => {
    setExpand(prevIndex => (prevIndex === index ? false : index));
  };
  return (
    <div className={clsx('divide-y divide-slate-200', className)}>
      {mockSets.map((set, index) => (
        <AccordionContent
          key={index}
          set={set.set}
          name={set.name}
          isOpen={expand === index}
          onToggle={() => handleToggle(index)}
        >
          <CardsGrid cards={set.cards} />
        </AccordionContent>
      ))}
    </div>
  );
};
