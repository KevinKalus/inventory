'use client'
import { createCollection } from '@/app/actions';
import { createContext, useContext, useState, FC, ReactNode } from 'react';
import Image from 'next/image';


interface CollectionContextProps {
  collection: { amount: number; name: string, imgSrc: string }[];
  increment: (id: string, imgSrc: string) => void;
  decrease: (id: string, imgSrc: string) => void;
  clearAmount: (id: string, imgSrc: string) => void;
}

const CollectionContext = createContext<CollectionContextProps | undefined>(undefined);

export const CollectionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [collection, setCollection] = useState<{ amount: number; name: string, imgSrc: string }[]>([]);

  const ensureItemExists = (id: string, imgSrc: string) => {
    setCollection(prevCollection => {
      const itemExists = prevCollection.find(item => item.name === id);
      if (!itemExists) {
        // Wenn das Element nicht existiert, füge es mit amount: 0 hinzu
        return [...prevCollection, { amount: 0, name: id, imgSrc:imgSrc }];
      }
      return prevCollection;
    });
  };

  const increment = (id: string, imgSrc: string) => {
    ensureItemExists(id, imgSrc);
    setCollection(prevCollection =>
      prevCollection.map(item =>
        item.name === id ? { ...item, amount: item.amount + 1} : item
      )
    );
  };

  const decrease = (id: string, imgSrc: string) => {
    ensureItemExists(id, imgSrc);
    setCollection(prevCollection =>
      prevCollection.map(item =>
        item.name === id && item.amount > 0 ? { ...item, amount: item.amount - 1 } : item
      )
    );
  };

  const clearAmount = (id: string, imgSrc: string) => {
    ensureItemExists(id, imgSrc); 
    setCollection(prevCollection =>
      prevCollection.filter(item =>
        !(item.name === id && item.imgSrc === imgSrc)
      )
    );
  };
 console.log("PROVIDER",collection)
  return (
    <CollectionContext.Provider value={{ collection, increment, decrease, clearAmount }}>
      {children}
      <form className='flex flex-col justify-center items-center gap-4' >   
          <span className='w-full text-center'>{collection.length > 0 ? "your list contains of:" : null}</span>
          {collection.length > 0 ? collection.map((e,index)=> (
            <div key={index} className='flex justify-center items-center gap-4 w-full border-b-2 pb-4'>
            <div className='flex flex-col gap-4'>
            <span>{e.name}</span>
            <span>{`Amount: ${e.amount}`}</span>
            </div>            
            <Image src={ e.imgSrc} alt={e.name} width={50} height={50}/>

            </div>) ) : null}      
        <input name='collection-name'  type="text" placeholder='Collection-Name' className='px-2 text-center'/>
        <button className='rounded-md border-4 border-green-500 text-white p-2 col-span-full mb-5'  type='submit'>Add to collection</button> 
      </form>
    </CollectionContext.Provider>
  );
};

export const useCollection = () => {
  const context = useContext(CollectionContext);
  if (!context) {
    throw new Error('useCollection must be used within a CollectionProvider');
  }
  return context;
};
