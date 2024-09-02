import { Meta, StoryObj } from '@storybook/react';

import { SetList } from './SetList';

export default {
  title: 'Components/Molecules/SetList',
  component: SetList,
  args: {
    sets: [
      { setType: 'OP-01', name: 'Romance Dawn', href: '#0' },
      { setType: 'OP-02', name: 'Paramount War', href: '#0' },
      { setType: 'OP-03', name: 'Pillars of Strength', href: '#0' },
    ],
  },
} satisfies Meta<typeof SetList>;

export const Default: StoryObj<typeof SetList> = {};
