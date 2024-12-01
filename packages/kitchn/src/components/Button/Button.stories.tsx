import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components';
import { defaultThemes } from '../../themes';

const ACCENT_COLORS = Object.keys(defaultThemes.light.colors.accent);
const SIZES = ['small', 'normal', 'large'];

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ACCENT_COLORS,
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: SIZES,
      defaultValue: 'normal',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    type: 'primary',
    size: 'normal',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    type: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    type: 'primary',
    size: 'large',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    type: 'secondary',
    size: 'normal',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    type: 'success',
    size: 'normal',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    type: 'warning',
    size: 'normal',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    type: 'danger',
    size: 'normal',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
    type: 'primary',
    size: 'normal',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    type: 'primary',
    size: 'normal',
  },
};