import { Protected } from '@/utils/Protected';

import { getAuthorizedUser } from '../actions';

export default async function Collection() {
  const user = await getAuthorizedUser();

  return (
    <Protected>
      <main className="flex h-full items-center justify-center">
        <div>{user?.nickname ? `Hello ${user?.nickname}` : 'Hello No-Nickname User'}</div>
      </main>
    </Protected>
  );
}
