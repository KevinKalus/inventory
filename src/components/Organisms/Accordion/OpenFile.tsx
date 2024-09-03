import { FC } from 'react';

interface OpenFileProps {
  expanded: number | false;
}

export const OpenFile: FC<OpenFileProps> = ({ expanded }) => {
  return (
    <svg className="ml-8 shrink-0 fill-indigo-500" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`origin-center rotate-90 transform transition duration-200 ease-out ${!expanded !== false && '!rotate-180'}`}
      />
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`ttransform origin-center transition duration-200 ease-out ${!expanded !== false && '!rotate-180'}`}
      />
    </svg>
  );
};
