import { Meta, StoryObj } from '@storybook/react';

import { AccordionContent } from './AccordionContent';

export default {
  title: 'Components/Molecules/AccordionContent',
  component: AccordionContent,
  args: {
    set: 'OP-01',
    title: 'Romance Dawn',
    href: '#0',
  },
} satisfies Meta<typeof AccordionContent>;

export const Default: StoryObj<typeof AccordionContent> = {};
