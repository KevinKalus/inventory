import { Meta, StoryObj } from '@storybook/react';

import { mockCards } from '@/mocks/mockCards';

import { CardsGrid } from './CardsGrid';

export default {
  title: 'Components/Organisms/CardsGrid',
  component: CardsGrid,
  args: {
    cards: mockCards,
  },
} satisfies Meta<typeof CardsGrid>;

export const Default: StoryObj<typeof CardsGrid> = {};
