import { FC } from 'react';

interface Props {
  className?: string;
}

export const CircleArrowDown: FC<Props> = ({ className }) => {
  return (
    <svg
      fill="none"
      width="30"
      height="30"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect fill="#fff" height="48" rx="24" width="48" />
      <g
        stroke="#111"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        transform="translate(0,48) rotate(-90)"
      >
        <path d="m26 19-5 5" />
        <path d="m21 24 5 5" />
      </g>
    </svg>
  );
};
