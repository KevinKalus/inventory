import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { imageProps } from '@/Types/Card';

interface ModalButtonProps {
  label: string;
  className?: string;
  img: imageProps;
  description: string;
}

export const ModalButton: FC<ModalButtonProps> = ({ label, className, img, description }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={clsx(className)}>
          {label}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col items-start">
        <AlertDialogHeader>
          <AlertDialogTitle>Card Name</AlertDialogTitle>
          <div className="flex">
            <Image src={img.src} alt={img.alt} width={210} height={300} className="min-h-[300px] min-w-[210px]" />
            <AlertDialogDescription className="ml-5 max-w-full text-left">
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
