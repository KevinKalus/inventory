import { mockCards } from '@/mocks/mockCards';
import { mockSets } from '@/mocks/mockSets';

import { AccordionContent } from '../../Molecules/AccordionContent/AccordionContent';
import { CardsGrid } from '../CardsGrid/CardsGrid';

export const Accordion = () => {
  return (
    <div className="divide-y divide-slate-200">
      {mockSets.map((set, index) => (
        <AccordionContent key={index} set={set.set} name={set.name}>
          <CardsGrid cards={mockCards} />
        </AccordionContent>
      ))}
    </div>
  );
};
