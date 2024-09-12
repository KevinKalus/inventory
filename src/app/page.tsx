import { FC } from 'react';

// import { Modal } from '@/components/Atoms/Modal/Modal';
// import { Card } from '@/components/Molecules/Card/Card';
// import { exampleCard } from '@/Types/Card';
import { CardProps } from '@/Types/Card';
interface CardsProps {
  card?: CardProps;
}
// const card = exampleCard;
const Home: FC<CardsProps> = ({}) => {
  return (
    <div className="flex flex-col gap-20 text-center">
      <span>
        This is the Hompage <br />
        Welcome Text follows soon
      </span>
      {/* <Modal>
        <Card img={card.img} name={card.name} id={card.id} />
      </Modal> */}
    </div>
  );
};
export default Home;
