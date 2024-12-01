import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, Container } from '../../components';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number' },
      description: 'Size of the avatar in pixels',
      defaultValue: 30,
    },
    username: {
      control: 'text',
      description: 'Username from tonightpass.com',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    text: {
      control: 'text',
      description: 'Text to display when no image is provided',
    },
    shape: {
      control: 'radio',
      options: ['square', 'round'],
      description: 'Shape of the avatar',
      defaultValue: 'round',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic avatar with image
export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    size: 50,
  },
};

// Avatar with text fallback
export const WithText: Story = {
  args: {
    text: 'John Doe',
    size: 50,
  },
};

// Square avatar
export const Square: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    shape: 'square',
    size: 50,
  },
};

// TonightPass username avatar
export const TonightPassUser: Story = {
  args: {
    username: 'antoinekm',
    size: 50,
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => {
    return (
      <Container gap={"normal"} align={"center"} row>
        <Avatar size={24} text="XS" />
        <Avatar size={32} text="S" />
        <Avatar size={40} text="M" />
        <Avatar size={48} text="L" />
        <Avatar size={64} text="XL" />
      </Container>
    );
  },
};

// Different shapes
export const Shapes: Story = {
  render: () => {
    return (
      <Container gap={"normal"} align={"center"} row>
        <Avatar 
          size={50} 
          shape="round" 
          src="https://i.pravatar.cc/300" 
        />
        <Avatar 
          size={50} 
          shape="square" 
          src="https://i.pravatar.cc/300" 
        />
      </Container>
    );
  },
};

// Fallback behavior
export const FallbackBehavior: Story = {
  render: () => {
    return (
      <Container gap={"normal"} align={"center"} row>
        <Avatar 
          size={50} 
          src="https://i.pravatar.cc/300" 
          text="Fallback" 
        />
        <Avatar 
          size={50} 
          text="Text Only" 
        />
        <Avatar 
          size={50} 
          username="non-existent-user" 
          text="Invalid User" 
        />
      </Container>
    );
  },
};

// Long text handling
export const LongTextHandling: Story = {
  args: {
    text: 'Very Long Name That Should Be Shortened',
    size: 50,
  },
};
