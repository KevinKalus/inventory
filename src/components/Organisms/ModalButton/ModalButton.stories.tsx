import { Meta, StoryObj } from '@storybook/react';

import { ModalButton } from './ModalButton';

export default {
  title: 'Components/Organisms/AlertDialog',
  component: ModalButton,
  args: {
    img: {
      alt: 'example image',
      src: 'https://picsum.photos/210/300',
    },
  },
} satisfies Meta<typeof ModalButton>;

export const Default: StoryObj<typeof ModalButton> = {};
