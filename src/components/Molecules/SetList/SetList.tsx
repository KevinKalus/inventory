import Link from 'next/link';
import { FC } from 'react';

interface SetListProps {
  sets: {
    setType: string;
    name: string;
    href: string;
  }[];
}

export const SetList: FC<SetListProps> = ({ sets }) => {
  return (
    <>
      {sets.map((set, index) => {
        return (
          <Link key={index} href={set.href}>
            <div className="my-4 flex justify-between border-b-[1px] border-black text-right text-sm">
              <p className="w-1/3">{set.setType}</p>
              <p className="ml-4 w-2/3 text-left"> {set.name}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};
