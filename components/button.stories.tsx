import type {Meta, StoryObj} from '@storybook/react';
import {Button as Component} from './button';

const meta: Meta<typeof Component> = {
  title: 'Button',
  component: Component,
  args: {
    children: 'Button',
    asChild: false,
  },
  argTypes: {
    variant: {
      control: {type: 'select'},
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: {type: 'select'},
      options: ['default', 'sm', 'lg', 'icon'],
    }
  }
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {tags: ['!dev']};
