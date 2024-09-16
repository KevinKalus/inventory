import Image from 'next/image';

import { Protected } from '@/utils/Protected';

import { getAuthorizedUser } from '../actions';
import { getDatas } from '../data';

export default async function Collection() {
  const user = await getAuthorizedUser();
  const sets = (await getDatas()).props.sets;
  return (
    <Protected>
      <span>{user?.nickname ? `Here is your collection, ${user?.nickname}` : 'Hello No-Nickname User'}</span>
      {sets.map((e, index) => (
        <div key={index} className="mx-5 mt-10 flex flex-col items-center justify-center gap-5">
          <span>{e.setId as string}</span>
          <div className="grid grid-cols-2 gap-3">
            {// eslint-disable-next-line @typescript-eslint/no-unsafe-call
            e?.imgs?.map((img, i: number) => (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              <Image src={'https:' + img.fields.file.url ?? ''} key={i} height={200} width={200} alt="cards" />
            ))}
          </div>
        </div>
      ))}
    </Protected>
  );
}
