import clsx from 'clsx';
import { FC } from 'react';

interface AccordionTitleProps {
  year: string;
  onClick: () => void;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({ year, onClick }) => {
  const isOpen = false;
  return (
    <button className="w-full gap-3 border-b-[1px] border-black text-right" type="button" onClick={onClick}>
      <span className="flex justify-between px-2">
        <p>{year}</p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="14"
            viewBox="0 0 22 24"
            fill="none"
            className={clsx({ 'rotate-180': isOpen })}
          >
            <path
              d="M21.4205 12.9335L10.8182 23.5357L0.215907 12.9335L2.23864 10.888L9.34091 17.9903L9.34091 0.149367L12.2955 0.149367L12.2955 17.9903L19.3864 10.888L21.4205 12.9335Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </span>
    </button>
  );
};
