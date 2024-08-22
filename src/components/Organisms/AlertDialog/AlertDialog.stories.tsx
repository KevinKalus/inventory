import { Meta, StoryObj } from '@storybook/react';

import { AlertDialogDemo } from './AlertDialog';

export default {
  title: 'Components/Organisms/AlertDialog',
  component: AlertDialogDemo,
  args: {},
} satisfies Meta<typeof AlertDialogDemo>;

export const Default: StoryObj<typeof AlertDialogDemo> = {};
