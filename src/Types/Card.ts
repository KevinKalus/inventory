export interface imageProps {
  src: string;
  alt: string;
}

export interface CardProps {
  img: imageProps;
  name: string;
  id: string;
}

export const exampleCard = {
  img: { src: 'https://picsum.photos/210/300', alt: 'example image' },
  name: 'character-name',
  id: 'op01-001',
};
