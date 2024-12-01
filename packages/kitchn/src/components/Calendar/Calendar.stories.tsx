import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../../components';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
      description: 'The selection mode of the calendar',
      defaultValue: 'single',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for single selection mode',
    },
    multiplePlaceholder: {
      control: 'text',
      description: 'Placeholder text for multiple selection mode',
    },
    rangePlaceholder: {
      control: 'text',
      description: 'Placeholder text for range selection mode',
    },
    time: {
      control: 'boolean',
      description: 'Whether to show time selection',
      defaultValue: false,
    },
    timeStartLabel: {
      control: 'text',
      description: 'Label for start time in range mode',
    },
    timeEndLabel: {
      control: 'text',
      description: 'Label for end time in range mode',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the calendar is disabled',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic single date selection
export const SingleDate: Story = {
  args: {
    mode: 'single',
    placeholder: 'Select a date',
  },
};

// Multiple date selection
export const MultipleDates: Story = {
  args: {
    mode: 'multiple',
    multiplePlaceholder: '%s days selected',
  },
};

// Date range selection
export const DateRange: Story = {
  args: {
    mode: 'range',
    rangePlaceholder: 'Select start and end dates',
  },
};

// Calendar with time selection
export const WithTime: Story = {
  args: {
    mode: 'single',
    time: true,
    placeholder: 'Select date and time',
  },
};

// Date range with time
export const DateRangeWithTime: Story = {
  args: {
    mode: 'range',
    time: true,
    timeStartLabel: 'Start',
    timeEndLabel: 'End',
    rangePlaceholder: 'Select date/time range',
  },
};

// Disabled calendar
export const Disabled: Story = {
  args: {
    mode: 'single',
    disabled: true,
    placeholder: 'Calendar disabled',
  },
};

// Custom formatted calendar
export const CustomFormat: Story = {
  args: {
    mode: 'single',
    format: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    placeholder: 'Select with custom format',
  },
};

// Calendar with specific date range
export const WithDateRange: Story = {
  args: {
    mode: 'range',
    fromDate: new Date(2024, 0, 1), // January 1, 2024
    toDate: new Date(2024, 11, 31), // December 31, 2024
    placeholder: 'Select within 2024',
  },
};

// Calendar with today button
export const WithTodayButton: Story = {
  args: {
    mode: 'single',
    showWeekNumber: true,
    toYear: 2025,
    captionLayout: 'dropdown',
    placeholder: 'Select with today button',
  },
};