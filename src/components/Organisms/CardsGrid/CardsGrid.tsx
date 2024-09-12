import { FC } from 'react';

import { Modal } from '@/components/Atoms/Modal/Modal';
import { Card } from '@/components/Molecules/Card/Card';
import { CardProps } from '@/Types/Card';

interface CardsGridProps {
  cards: CardProps[];
}

export const CardsGrid: FC<CardsGridProps> = ({ cards }) => {
  return (
    <div className="mx-5 grid grid-cols-2 gap-12">
      {cards.map((card, index) => {
        return (
          <Modal key={index} card={card}>
            <Card img={card.img} name={card.name} id={card.id} />
          </Modal>
        );
      })}
    </div>
  );
};
