import { Protected } from '@/utils/Protected';

import { getAuthorizedUser } from '../actions';

export default async function Collection() {
  const user = await getAuthorizedUser();

  return (
    <Protected>
      <div>{user?.nickname ? `Here is your collection, ${user?.nickname}` : 'Hello No-Nickname User'}</div>
    </Protected>
  );
}
