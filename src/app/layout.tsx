import './globals.css';

import clsx from 'clsx';
import { Inter } from 'next/font/google';

import { Navbar } from '@/components/Molecules/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={clsx(inter.className, 'bg-gray-400')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
