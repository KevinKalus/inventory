import { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Components/Molecules/Card',
  component: Card,
  args: {
    img: {
      alt: '',
      src: '',
    },
    name: 'luffy',
    id: 'op-01',
  },
} satisfies Meta<typeof Card>;

export const Default: StoryObj<typeof Card> = {};
