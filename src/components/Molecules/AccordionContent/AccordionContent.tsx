'use client';
import { FC, ReactElement, useState } from 'react';

interface AccordionContentProps {
  set: string;
  children: React.ReactNode;
  name: string;
  content?: {
    year: string;
    content: ReactElement;
  }[];
}

export const AccordionContent: FC<AccordionContentProps> = ({ children, set, name }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className="py-2">
      <h2>
        <button
          className="flex w-full items-center justify-between py-2 text-left font-semibold"
          onClick={e => {
            e.preventDefault();
            setExpanded(!expanded);
          }}
        >
          <span className="flex w-full justify-between text-xs">
            <p className="w-1/2">{set}</p>
            <p className="w-full">{name}</p>
          </span>
          <svg className="ml-8 shrink-0 fill-[#ffd6d4]" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`ttransform origin-center transition duration-200 ease-out ${expanded && '!rotate-180'}`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center rotate-90 transform transition duration-200 ease-out ${expanded && '!rotate-180'}`}
            />
          </svg>
        </button>
      </h2>
      <div
        role="region"
        className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-3">{children}</div>
        </div>
      </div>
    </div>
  );
};
