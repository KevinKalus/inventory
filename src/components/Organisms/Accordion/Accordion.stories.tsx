import { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '@/components/Organisms/Accordion/Accordion';

export default {
  title: 'Components/Organisms/Accordion',
  component: Accordion,
  args: {},
} satisfies Meta<typeof Accordion>;

export const Default: StoryObj<typeof Accordion> = {};
