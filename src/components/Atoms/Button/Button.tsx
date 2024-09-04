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
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg from-purple-600 to-blue-500 text-sm font-medium text-gray-900"
      href={link}
    >
      {children}
    </Link>
  ) : (
    <button
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg from-purple-600 to-blue-500 text-sm font-medium text-gray-900"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Button: FC<ButtonProps> = ({ label, href }) => {
  return (
    <Wrapper link={href}>
      <span className="relative rounded-md px-2 text-white">{label}</span>
    </Wrapper>
  );
};
