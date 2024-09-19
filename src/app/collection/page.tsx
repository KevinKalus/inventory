
import { Protected } from '@/utils/Protected';

import { getAuthorizedUser } from '../actions';
import { CardsGrid } from '@/components/Organisms/CardsGrid/CardsGrid';


export default async function Collection() {
  const user = await getAuthorizedUser();
  
  return (
    <Protected>
     {`Here is your collection ${user?.nickname ?? "No-Nickname User"}`} 
     <CardsGrid/>
    </Protected>
  );
}
