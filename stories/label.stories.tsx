import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/components/label";

/**
 * Renders an accessible label associated with controls.
 */
const meta = {
  title: "Label",
  component: Label,
  tags: ["autodocs", "!dev"],
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
  args: {
    children: "Your email address",
    htmlFor: "email",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

/**
 * The default form of the label.
 */
export const Default: Story = {};
