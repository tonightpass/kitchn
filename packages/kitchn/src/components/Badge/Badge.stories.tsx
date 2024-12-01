import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../components';
import { defaultThemes } from '../../themes';

const SIZES = ['small', 'normal', 'large'];

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
      description: 'The type of the badge',
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: SIZES,
      description: 'The size of the badge',
      defaultValue: 'normal',
    },
    bold: {
      control: 'boolean',
      description: 'The font weight of the badge',
      defaultValue: false,
    },
    children: {
      control: 'text',
      description: 'The content of the badge',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

// Basic badge stories with different types
export const Primary: Story = {
  args: {
    children: 'Primary Badge',
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Badge',
    type: 'secondary',
  },
};

export const Info: Story = {
  args: {
    children: 'Info Badge',
    type: 'info',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Badge',
    type: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Badge',
    type: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Badge',
    type: 'danger',
  },
};

// Size variations
export const Small: Story = {
  args: {
    children: 'Small Badge',
    size: 'small',
  },
};

export const Normal: Story = {
  args: {
    children: 'Normal Badge',
    size: 'normal',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Badge',
    size: 'large',
  },
};

// Font weight variation
export const Bold: Story = {
  args: {
    children: 'Bold Badge',
    bold: true,
  },
};

// Example with lowercase text to show capitalization
export const Capitalized: Story = {
  args: {
    children: 'lowercase text will be capitalized',
    size: 'normal',
  },
};

// Example showing all variations together
export const AllVariations: Story = {
  render: () => React.createElement('div', 
    { 
      style: { 
        display: 'flex', 
        gap: '1rem', 
        flexWrap: 'wrap', 
        alignItems: 'center' 
      } 
    },
    [
      React.createElement(Badge, { key: 'default' }, 'Default'),
      React.createElement(Badge, { key: 'primary', type: 'primary' }, 'Primary'),
      React.createElement(Badge, { key: 'secondary', type: 'secondary' }, 'Secondary'),
      React.createElement(Badge, { key: 'info', type: 'info' }, 'Info'),
      React.createElement(Badge, { key: 'success', type: 'success' }, 'Success'),
      React.createElement(Badge, { key: 'warning', type: 'warning' }, 'Warning'),
      React.createElement(Badge, { key: 'danger', type: 'danger' }, 'Danger'),
      React.createElement(Badge, { key: 'small', size: 'small' }, 'Small'),
      React.createElement(Badge, { key: 'normal', size: 'normal' }, 'Normal'),
      React.createElement(Badge, { key: 'large', size: 'large' }, 'Large'),
      React.createElement(Badge, { key: 'bold', bold: true }, 'Bold'),
    ]
  ),
};