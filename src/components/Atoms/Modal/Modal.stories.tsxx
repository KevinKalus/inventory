import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Card } from '@/components/Molecules/Card/Card';

import { Modal } from './Modal';

export default {
  title: 'Components/Atoms/Modal',
  component: Modal,
  args: {},
} satisfies Meta<typeof Modal>;

export const Default: StoryObj<typeof Modal> = {};

export const WithCard: StoryObj<typeof Modal> = {
  args: {
    children: React.createElement(Card, { img: { src: '', alt: '' }, name: '', id: '' }),
  },
};
