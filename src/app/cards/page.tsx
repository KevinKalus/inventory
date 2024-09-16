import { Accordion } from '@/components/Organisms/Accordion/Accordion';

export default function Cards() {
  return (
    <div className="mx-4 flex flex-col items-center gap-10">
      <p className="text-center underline underline-offset-8">
        Here you can find all the Cards available at the moment
      </p>
      <Accordion className="mb-10" />
    </div>
  );
}
