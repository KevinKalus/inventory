import { m } from 'framer-motion';
import { FC, ReactElement } from 'react';

interface AccordionContentProps {
  children: ReactElement;
  contentId: string;
}

export const AccordionContent: FC<AccordionContentProps> = ({ children, contentId }) => {
  return (
    <m.div
      initial="open"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: 'auto' },
        collapsed: { opacity: 0, height: 0 },
      }}
      transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
      id={contentId}
      role="region"
    >
      {children}
    </m.div>
  );
};
