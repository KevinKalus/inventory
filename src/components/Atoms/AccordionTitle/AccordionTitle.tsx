import clsx from 'clsx';
import { FC } from 'react';

import { CircleArrowDown } from './circle-arrow-down';

interface AccordionTitleProps {
  year: string;
  onClick: () => void;
  isExpanded: boolean;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({ year, onClick, isExpanded }) => {
  return (
    <button className="w-full gap-3 border-b-[1px] border-black text-right" type="button" onClick={onClick}>
      <span className="flex items-center justify-between px-2">
        <p className="text-xl">{year}</p>
        <CircleArrowDown className={clsx({ 'rotate-180': isExpanded })} />
      </span>
    </button>
  );
};
