import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CardsGrid } from '@/components/Organisms/CardsGrid/CardsGrid';

import { AccordionContent } from './AccordionContent';

export default {
  title: 'Components/Molecules/AccordionContent',
  component: AccordionContent,
  args: { name: 'Romance Dawn', set: 'OP-01' },
} satisfies Meta<typeof AccordionContent>;

export const Default: StoryObj<typeof AccordionContent> = {
  args: {
    children: React.createElement(CardsGrid, {
      cards: [
        {
          img: { src: 'https://picsum.photos/210/300', alt: 'example image' },
          name: 'luffy',
          id: 'op01-001',
          description:
            'test description test test test test test test test test test test test test test test test test test test test ',
        },
        {
          img: { src: 'https://picsum.photos/210/300', alt: 'example image' },
          name: 'luffy',
          id: 'op01-001',
          description:
            'test description test test test test test test test test test test test test test test test test test test test ',
        },
        {
          img: { src: 'https://picsum.photos/210/300', alt: 'example image' },
          name: 'luffy',
          id: 'op01-001',
          description:
            'test description test test test test test test test test test test test test test test test test test test test ',
        },
      ],
    }),
  },
};
