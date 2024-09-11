import { Meta, StoryObj } from '@storybook/react';

import { ModalWindow } from './ModalWindow';

export default {
  title: 'Components/Atoms/ModalWindow',
  component: ModalWindow,
  args: {},
} satisfies Meta<typeof ModalWindow>;

export const Default: StoryObj<typeof ModalWindow> = {};
