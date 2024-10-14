
import { Protected } from '@/utils/Protected';

import { getAuthorizedUser, getCollections } from '../actions';

import Image from 'next/image';



export default async function Collection() {
  const user = await getAuthorizedUser();
  const collections = await getCollections()

  console.log("COLLECTIONS", collections.rows)
  return (
    <Protected>
      Collection
      {collections.rows.map((e,index)=> (
        <div key={index}>
          <Image  src={"https:" + e.card.imgSrc} alt='test' height={250} width={250}/>
          <span>{`Amount: ${e.card.amount}`}</span>
          </div>
        ))}
    </Protected>
  );
}
