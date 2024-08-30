import { FC } from 'react';

interface AccordionTitleProps {
  title: string;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({ title }) => {
  return <span className="w-screen underline hover:cursor-pointer">{title}</span>;
};
