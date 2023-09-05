import { SignInForm } from "./";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SignInForm> = {
  title: "Components/Sign In Form",
  component: SignInForm,
};

type Story = StoryObj<typeof SignInForm>;

export const Default: Story = {};

export default meta;
