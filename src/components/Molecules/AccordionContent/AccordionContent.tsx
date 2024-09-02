import Link from 'next/link';
import { FC } from 'react';

interface AccordionContentProps {
  set: string;
  title: string;
  href: string;
}

export const AccordionContent: FC<AccordionContentProps> = ({ set, title, href }) => {
  return (
    <Link className="w-full" type="button" href={href}>
      <span className="flex justify-between border-b-[1px] border-black px-2">
        <p>{set}</p>
        <p> {title}</p>
      </span>
    </Link>
  );
};
