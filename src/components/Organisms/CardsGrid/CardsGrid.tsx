import { FC } from 'react';


import { getDatas } from '@/app/data';
import { Card } from '@/components/Molecules/Card/Card';

interface CardsGridProps {
}

export const CardsGrid: FC<CardsGridProps> = async ({  }) => {
  const sets = (await getDatas()).props.sets;
  console.log(sets)

  return (
    <div className="flex flex-col">
      {sets.map((set, index:number) =>( 
        <>
        <span className='text-center m-4 underline underline-offset-4'>{`${set.setId} ${set.setName}`}</span>
        <div key={index} className='grid grid-cols-2 gap-2'>
        {set.imgs?.map((img, index:number)=>(<Card key={index} img={"https:"+img.fields.file.url} id={img.fields.file.fileName.split(".")[0]}/>))}
        </div>
        </>))}     
    </div>
  );
};
