import { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Components/Molecules/Card',
  component: Card,
  args: {
    img: {
      alt: 'example image',
      src: 'https://picsum.photos/210/300',
    },
    name: 'luffy',
    id: 'op-01',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo in aspernatur reprehenderit, temporibus officia eaque pariatur sint deleniti nesciunt animi dolore atque suscipit vero impedit natus accusamus fuga facere. Facere.',
  },
} satisfies Meta<typeof Card>;

export const Default: StoryObj<typeof Card> = {};
