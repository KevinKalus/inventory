'use client';
import { FC, ReactElement, useState } from 'react';

import { AccordionTitle } from '@/components/Atoms/AccordionTitle/AccordionTitle';
import { AccordionContent } from '@/components/Molecules/AccordionContent/AccordionContent';

interface AccordionProps {
  content: {
    year: string;
    content: ReactElement;
  }[];
}

export const Accordion: FC<AccordionProps> = ({ content }) => {
  const [expanded, setExpanded] = useState<false | number>(false);

  return (
    <div>
      <div>
        {content.map((item, index) => (
          <div key={index}>
            <AccordionTitle
              year={item.year}
              onClick={() => setExpanded(expanded === index ? false : index)}
              isExpanded={expanded === index}
            />
            <div className="animate-accordion-down">
              {expanded === index && <AccordionContent>{item.content}</AccordionContent>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
