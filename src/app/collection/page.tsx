import { Protected } from '@/utils/Protected';

import { getAuthorizedUser } from '../actions';

export default async function Collection() {
  const user = await getAuthorizedUser();

  return (
    <Protected>
      <div>{user?.nickname ? `Hello ${user?.nickname}` : 'Hello No-Nickname User'}</div>
    </Protected>
  );
}
