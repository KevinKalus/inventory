import { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';

export default {
  title: 'Components/Molecules/LoginForm',
  component: LoginForm,
  args: {},
  decorators: Story => {
    return <div className="w-1/3">{Story()}</div>;
  },
} satisfies Meta<typeof LoginForm>;

export const Default: StoryObj<typeof LoginForm> = {};
