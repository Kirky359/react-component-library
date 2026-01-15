import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    duration: {
      control: { type: 'number', min: 0, max: 10000, step: 500 },
    },
    showCloseButton: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    message: 'Operation completed successfully!',
    type: 'success',
    duration: 3000,
  },
};

export const Error: Story = {
  args: {
    message: 'An error occurred. Please try again.',
    type: 'error',
    duration: 3000,
  },
};

export const Warning: Story = {
  args: {
    message: 'Warning: This action cannot be undone.',
    type: 'warning',
    duration: 3000,
  },
};

export const Info: Story = {
  args: {
    message: 'Here is some useful information for you.',
    type: 'info',
    duration: 3000,
  },
};

export const LongMessage: Story = {
  args: {
    message: 'This is a much longer notification message that demonstrates how the toast component handles multiple lines of text and wraps appropriately.',
    type: 'info',
    duration: 5000,
  },
};

export const NoDuration: Story = {
  args: {
    message: 'This toast will not auto-dismiss.',
    type: 'info',
    duration: 0,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    message: 'This toast has no close button.',
    type: 'success',
    duration: 3000,
    showCloseButton: false,
  },
};

export const ShortDuration: Story = {
  args: {
    message: 'Quick notification!',
    type: 'success',
    duration: 1000,
  },
};