import type { Meta, StoryObj } from "@storybook/react";

import { Component } from "./Component";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    children: <h1>Component</h1>
  },
};
