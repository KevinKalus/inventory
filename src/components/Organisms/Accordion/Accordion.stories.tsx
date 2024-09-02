import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { SetList } from '@/components/Molecules/SetList/SetList';

import { Accordion } from './Accordion';

export default {
  title: 'Components/Organisms/Accordion',
  component: Accordion,
  args: {
    content: [
      {
        year: '2024',
        content: React.createElement(SetList, {
          sets: [
            { setType: 'OP-01', name: 'Romance Dawn', href: '#0' },
            { setType: 'OP-02', name: 'Paramount War', href: '#0' },
            { setType: 'OP-03', name: 'Pillars of Strength', href: '#0' },
            { setType: 'OP-04', name: 'Kingdoms of Intrigue', href: '#0' },
            { setType: 'OP-05', name: 'Awakening of a new era', href: '#0' },
          ],
        }),
      },
      {
        year: '2023',
        content: React.createElement(SetList, {
          sets: [
            { setType: 'OP-01', name: 'Romance Dawn', href: '#0' },
            { setType: 'OP-02', name: 'Paramount War', href: '#0' },
            { setType: 'OP-03', name: 'Pillars of Strength', href: '#0' },
            { setType: 'OP-04', name: 'Kingdoms of Intrigue', href: '#0' },
            { setType: 'OP-05', name: 'Awakening of a new era', href: '#0' },
          ],
        }),
      },
      {
        year: '2022',
        content: React.createElement(SetList, {
          sets: [
            { setType: 'OP-01', name: 'Romance Dawn', href: '#0' },
            { setType: 'OP-02', name: 'Paramount War', href: '#0' },
            { setType: 'OP-03', name: 'Pillars of Strength', href: '#0' },
            { setType: 'OP-04', name: 'Kingdoms of Intrigue', href: '#0' },
            { setType: 'OP-05', name: 'Awakening of a new era', href: '#0' },
          ],
        }),
      },
    ],
  },
} satisfies Meta<typeof Accordion>;

export const Default: StoryObj<typeof Accordion> = {};
