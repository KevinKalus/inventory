import { getAuthorizedUser } from '../actions';

export default async function Collection() {
  const user = await getAuthorizedUser();
  return (
    <main className="flex h-full items-center justify-center">
      <div>{`Hello ${user.nickname}`}</div>
    </main>
  );
}
