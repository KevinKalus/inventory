import { Protected } from '@/utils/Protected';

import { getAuthorizedUser } from '../actions';

export default async function Collection() {
  const user = await getAuthorizedUser();
  return (
    <Protected>
      <div>{`This is your profile ${user?.nickname}`}</div>
    </Protected>
  );
}
