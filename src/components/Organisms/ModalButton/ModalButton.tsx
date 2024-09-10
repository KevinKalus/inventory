import { AlertDialogDescription } from '@radix-ui/react-alert-dialog';
import Image from 'next/image';
import { FC } from 'react';

import { imageProps } from '@/Types/Card';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/ui/alert-dialog';
import { Button } from '@/ui/button';

interface ModalButtonProps {
  img: imageProps;
  children?: React.ReactElement;
}

export const ModalButton: FC<ModalButtonProps> = ({ img, children }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>{children}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogDescription />
        <AlertDialogHeader className="flex flex-col items-center justify-center">
          <AlertDialogTitle>Card Name</AlertDialogTitle>
          <Image src={img.src} alt={img.alt} width={100} height={100} className="min-h-[100px] min-w-[300px]" />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Back</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
