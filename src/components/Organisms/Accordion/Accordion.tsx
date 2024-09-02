'use client';
import { AnimatePresence, m } from 'framer-motion';
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
      <AnimatePresence initial={false}>
        {content.map((item, index) => (
          <m.div
            key={index}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
          >
            <AccordionTitle
              headerId={`${item.year}_${index}`}
              year={item.year}
              onClick={() => setExpanded(expanded === index ? false : index)}
              isExpanded={expanded === index}
            />
            <AnimatePresence initial={false}>
              {expanded === index && (
                <AccordionContent contentId={`${item.year}_content_${index}`}>{item.content}</AccordionContent>
              )}
            </AnimatePresence>
          </m.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
