import { Meta, StoryObj } from '@storybook/react';

import { AccordionTitle } from './AccordionTitle';

export default {
  title: 'Components/Atoms/AccordionTitle',
  component: AccordionTitle,
  args: {
    title: 'Test set OP-01',
  },
} satisfies Meta<typeof AccordionTitle>;

export const Default: StoryObj<typeof AccordionTitle> = {};
