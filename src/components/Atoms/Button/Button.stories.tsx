import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  args: {
    label: 'Button',
    href: '#0',
  },
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {};

export const Add: StoryObj<typeof Button> = {
  args: {
    label: '+',
  },
};
export const Sub: StoryObj<typeof Button> = {
  args: {
    label: '-',
  },
};
