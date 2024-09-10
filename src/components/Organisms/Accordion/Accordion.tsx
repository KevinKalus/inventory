import clsx from 'clsx';
import { FC } from 'react';

import { mockSets } from '@/mocks/mockSets';

import { AccordionContent } from '../../Molecules/AccordionContent/AccordionContent';
import { CardsGrid } from '../CardsGrid/CardsGrid';

interface AccordionProps {
  className?: string;
}

export const Accordion: FC<AccordionProps> = ({ className }) => {
  return (
    <div className={clsx('divide-y divide-slate-200', className)}>
      {mockSets.map((set, index) => (
        <AccordionContent key={index} set={set.set} name={set.name}>
          <CardsGrid cards={set.cards} />
        </AccordionContent>
      ))}
    </div>
  );
};
