import { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

export default {
  title: 'Components/Molecules/Navbar',
  component: Navbar,
  args: {},
} satisfies Meta<typeof Navbar>;

export const Default: StoryObj<typeof Navbar> = {};
