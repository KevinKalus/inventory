import { FC, ReactElement } from 'react';

interface AccordionContentProps {
  children: ReactElement;
}

export const AccordionContent: FC<AccordionContentProps> = ({ children }) => {
  return <div>{children}</div>;
};
