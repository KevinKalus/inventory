
import { CardsGrid } from '@/components/Organisms/CardsGrid/CardsGrid';
import { ImageFields } from '@/Types/Types';
import { FC } from 'react';

interface AccordionContentProps {
  setId: string;
  setName: string;
  isOpen?: boolean;
  onToggle: () => void;
  cards: ImageFields[]
}

export const AccordionContent: FC<AccordionContentProps> =  ({  setId, setName, isOpen, onToggle, cards }) => {
  return (
    <div className="py-2">
      <h2>
        <button
          className="flex w-full items-center justify-between py-2 text-left font-semibold"
          onClick={() => {
            onToggle();
          }}
        >
          <span className="flex w-full justify-between text-xs">
            <p className="w-1/2">{setId}</p>
            <p className="w-full">{setName}</p>
          </span>
          <svg className="ml-8 shrink-0 fill-[#ffd6d4]" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center transform transition duration-200 ease-out ${isOpen && '!rotate-180'}`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen && '!rotate-180'}`}
            />
          </svg>
        </button>
      </h2>
      <div
        role="region"
        className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-3">
            <CardsGrid cards={cards}/>
          </div>
        </div>
      </div>
    </div>
  );
};
