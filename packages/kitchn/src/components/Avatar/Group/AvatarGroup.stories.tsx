import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup, Container, Text } from '../../../components';
import type { AvatarGroupProps } from '../../../components/Avatar/Group';

const sampleMembers = [
  {
    src: 'https://i.pravatar.cc/300?img=1',
    text: 'John Doe',
  },
  {
    src: 'https://i.pravatar.cc/300?img=2',
    text: 'Jane Smith',
  },
  {
    src: 'https://i.pravatar.cc/300?img=3',
    text: 'Bob Johnson',
  },
  {
    username: 'antoinekm',
    text: 'Antoine K.',
  },
  {
    text: 'Sarah Wilson',
  },
  {
    src: 'https://i.pravatar.cc/300?img=4',
    text: 'Mike Brown',
  },
];

const meta = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    members: {
      control: 'object',
      description: 'Array of member objects containing avatar information',
    },
    limit: {
      control: 'number',
      description: 'Maximum number of avatars to display before showing a counter',
    },
    size: {
      control: 'number',
      description: 'Size of each avatar in pixels',
      defaultValue: 30,
    },
  },
  decorators: [
    (Story) => (
      <Container maxW={800}>
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

// Basic avatar group
export const Default: Story = {
  args: {
    members: sampleMembers.slice(0, 3),
    size: 40,
  },
  render: (args: AvatarGroupProps) => (
    <div>
      <Text size="small" mb="medium">Basic avatar group with three members</Text>
      <AvatarGroup {...args} />
    </div>
  ),
};

// Avatar group with limit
export const WithLimit: Story = {
  args: {
    members: sampleMembers,
    limit: 4,
    size: 40,
  },
  render: (args: AvatarGroupProps) => (
    <div>
      <Text size="small" mb="medium">Avatar group with limit set to 4 members</Text>
      <AvatarGroup {...args} />
    </div>
  ),
};

// Avatar group with different sizes
export const DifferentSizes: Story = {
  args: {
    members: sampleMembers.slice(0, 3),
  },
  render: () => (
    <div>
      <Text size="small" mb="medium">Avatar groups with different sizes</Text>
      <Container
        gap={"medium"}
        align="flex-start"
      >
        <AvatarGroup members={sampleMembers.slice(0, 3)} size={24} />
        <AvatarGroup members={sampleMembers.slice(0, 3)} size={32} />
        <AvatarGroup members={sampleMembers.slice(0, 3)} size={40} />
        <AvatarGroup members={sampleMembers.slice(0, 3)} size={48} />
      </Container>
    </div>
  ),
};

// Mixed avatar types
export const MixedTypes: Story = {
  args: {
    members: [
      { src: 'https://i.pravatar.cc/300?img=1' },
      { username: 'antoinekm' },
      { text: 'JD' },
      { src: 'https://invalid-image.jpg', text: 'Fallback' },
    ],
    size: 40,
  },
  render: (args: AvatarGroupProps) => (
    <div>
      <Text size="small" mb="medium">Avatar group with different types (image, username, text, fallback)</Text>
      <AvatarGroup {...args} />
    </div>
  ),
};

// Large group with limit
export const LargeGroupWithLimit: Story = {
  args: {
    members: [
      ...sampleMembers,
      { text: 'Extra 1' },
      { text: 'Extra 2' },
      { text: 'Extra 3' },
      { text: 'Extra 4' },
    ],
    limit: 5,
    size: 40,
  },
  render: (args: AvatarGroupProps) => (
    <div>
      <Text size="small" mb="medium">Large group with limit of 5 visible members</Text>
      <AvatarGroup {...args} />
    </div>
  ),
};

// Interactive hover effect
export const HoverEffect: Story = {
  args: {
    members: sampleMembers.slice(0, 4),
    size: 40,
  },
  render: (args: AvatarGroupProps) => (
    <div>
      <Text size="small" mb="medium">Hover over the group to see the spacing effect</Text>
      <AvatarGroup {...args} />
    </div>
  ),
};

// No limit (showing all members)
export const NoLimit: Story = {
  args: {
    members: sampleMembers,
    size: 40,
  },
  render: (args: AvatarGroupProps) => (
    <div>
      <Text size="small" mb="medium">Avatar group showing all members without limit</Text>
      <AvatarGroup {...args} />
    </div>
  ),
};

// Empty group handling
export const EmptyGroup: Story = {
  args: {
    members: [],
    size: 40,
  },
  render: (args: AvatarGroupProps) => (
    <div>
      <Text size="small" mb="medium">Empty avatar group</Text>
      <AvatarGroup {...args} />
    </div>
  ),
};