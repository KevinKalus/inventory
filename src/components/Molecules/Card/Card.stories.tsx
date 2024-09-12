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
    name: 'character-name',
    id: 'op-01',
  },
} satisfies Meta<typeof Card>;

export const Default: StoryObj<typeof Card> = {};
