import Image from 'next/image';

import { NicknameForm } from '@/components/Molecules/NicknameForm/NicknameForm';
import { Protected } from '@/utils/Protected';

import { getAuthorizedUser } from '../actions';

export default async function Collection() {
  const user = await getAuthorizedUser();
  return (
    <Protected>
      <div className="flex items-center gap-2 text-center">
        {`This is your profile ${user?.nickname ? user.nickname : 'No-Nickname User'}`}
        <Image
          src={user?.avatar ?? 'https://placehold.co/40x40?text=No+Avatar'}
          alt={'Avatar'}
          width={40}
          height={40}
          className="rounded-full border border-black"
        />
      </div>
      <NicknameForm />
    </Protected>
  );
}
