import { changeNickname } from '@/app/actions';

export const NicknameForm = () => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form action={changeNickname} className="flex flex-col items-center gap-4">
      <h4 className="text-center">Your new Nickname</h4>
      <input type="text" name="nickname" />
      <div className="flex gap-5">
        <button type="submit" className="rounded-md border border-black p-2">
          Change
        </button>
      </div>
    </form>
  );
};
