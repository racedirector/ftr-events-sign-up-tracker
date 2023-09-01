import { ClassParticipationCountHeader } from ".";
import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof ClassParticipationCountHeader> = {
  title: "Components/Class Participation Count List Header",
  component: ClassParticipationCountHeader,
};

type Story = StoryObj<typeof ClassParticipationCountHeader>;

export const ThreeClasses: Story = {
  args: {
    counts: [
      { name: "GT3", count: 22, color: "#fceab2" },
      { name: "GT4", count: 14, color: "#dd7e6b" },
      { name: "TCR", count: 8, color: "#6fa8dc" },
    ],
  },
};

export const IMSAClasses: Story = {
  args: {
    counts: [
      { name: "LMDH", count: 11, color: "rgb(33,39,33)", textColor: "white" },
      { name: "LMP2", count: 9, color: "rgb(58,83,164)", textColor: "white" },
      { name: "LMP3", count: 11, color: "rgb(242,104,41)", textColor: "white" },
      {
        name: "GTD PRO",
        count: 11,
        color: "rgb(227,27,35)",
        textColor: "white",
      },
      { name: "GTD", count: 25, color: "rgb(0,174,66)", textColor: "white" },
    ],
  },
};

export default meta;
