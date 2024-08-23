import { CardsGrid } from '@/components/Organisms/CardsGrid/CardsGrid';
import { mockCards } from '@/mocks/mockCards';

export default function Home() {
  return (
    <>
      <CardsGrid cards={mockCards} />
    </>
  );
}
