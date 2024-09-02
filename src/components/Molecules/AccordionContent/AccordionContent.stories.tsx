import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { SetList } from '../SetList/SetList';
import { AccordionContent } from './AccordionContent';

export default {
  title: 'Components/Molecules/AccordionContent',
  component: AccordionContent,
  args: {},
} satisfies Meta<typeof AccordionContent>;

export const ListItems: StoryObj<typeof AccordionContent> = {
  args: {
    children: React.createElement(SetList, {
      sets: [
        { setType: 'OP-01', name: 'Romance Dawn', href: '#0' },
        { setType: 'OP-02', name: 'Paramount War', href: '#0' },
        { setType: 'OP-03', name: 'Pillars of Strength', href: '#0' },
        { setType: 'OP-04', name: 'Kingdoms of Intrigue', href: '#0' },
        { setType: 'OP-05', name: 'Awakening of a new era', href: '#0' },
      ],
    }),
  },
};
