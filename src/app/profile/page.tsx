import { Protected } from '@/utils/Protected';

import { getAuthorizedUser } from '../actions';

export default async function Collection() {
  const user = await getAuthorizedUser();
  return (
    <Protected>
      <main className="flex h-full items-center justify-center">
        <div>{`Hello ${user?.nickname}`}</div>
      </main>
    </Protected>
  );
}
