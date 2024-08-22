import { Button } from '../../Atoms/Button/Button';

export const Navbar = () => {
  return (
    <section className="mt-5 flex justify-around">
      <Button label={'Home'} href={'/'} />
      <Button label={'Cards'} href={'/cards'} />
      <Button label={'Decks'} href={'#0'} />
      <Button label={'Favorites'} href={'#0'} />
      <Button label={'Profile'} href={'#0'} />
      <Button label={'Login'} href={'/login'} />
      <Button label={'Sign up'} href={'#0'} />
    </section>
  );
};
