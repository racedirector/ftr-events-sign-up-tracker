import { ComingSoon } from "./";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ComingSoon> = {
  title: "Components/Coming Soon",
  component: ComingSoon,
};

type Story = StoryObj<typeof ComingSoon>;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: {
    title: "Custom Title",
  },
};

export const CustomDetail: Story = {
  args: {
    ...CustomTitle.args,
    detail: "Custom Detail",
  },
};

export default meta;
