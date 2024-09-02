import { Meta, StoryObj } from '@storybook/react';

import { AccordionTitle } from './AccordionTitle';

export default {
  title: 'Components/Atoms/AccordionTitle',
  component: AccordionTitle,
  args: {
    year: '2022',
    onClick: () => {},
  },
} satisfies Meta<typeof AccordionTitle>;

export const Default: StoryObj<typeof AccordionTitle> = {};
