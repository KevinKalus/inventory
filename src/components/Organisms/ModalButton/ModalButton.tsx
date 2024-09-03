import Image from 'next/image';
import { FC } from 'react';

import { imageProps } from '@/Types/Card';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/ui/alert-dialog';
import { Button } from '@/ui/button';

interface ModalButtonProps {
  img: imageProps;
  description: string;
  children?: React.ReactElement;
}

export const ModalButton: FC<ModalButtonProps> = ({ img, description, children }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>{children}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col items-start">
        <AlertDialogHeader>
          <AlertDialogTitle>Card Name</AlertDialogTitle>
          <div className="flex">
            <Image src={img.src} alt={img.alt} width={100} height={100} className="min-h-[100px] min-w-[150px]" />
            <AlertDialogDescription className="ml-2 max-w-full text-left">
              <p className="text-center underline underline-offset-4">Description of the Card</p>
              <br />
              {description}
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Back</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
