import Link from 'next/link';
import { FC } from 'react';

interface ButtonProps {
  label: string;
  href: string;
  className?: string;
}

const Wrapper = ({
  children,
  link,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  link?: string;
  onClick?: () => void;
}) => {
  return link ? (
    <Link
      className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-blue-500"
      href={link}
    >
      {children}
    </Link>
  ) : (
    <button
      className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-blue-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Button: FC<ButtonProps> = ({ label, href }) => {
  return (
    <Wrapper link={href}>
      <span className="relative rounded-md px-8 py-2.5 group-hover:bg-opacity-0 group-hover:text-white">{label}</span>
    </Wrapper>
  );
};
