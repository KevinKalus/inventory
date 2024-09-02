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
      <body className={clsx(inter.className, 'flex flex-col bg-[#8c90be]')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
