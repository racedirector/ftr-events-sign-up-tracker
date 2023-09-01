import { DriverList } from "./";
import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof DriverList> = {
  title: "Components/Driver List",
  component: DriverList,
};

type Story = StoryObj<typeof DriverList>;

export const Empty: Story = {};

export const Populated: Story = {
  args: {
    drivers: [
      {
        name: "Christopher Cooke",
        driverId: "362996",
        iRating: 6001,
        license: "A 4.99",
      },
      {
        name: "Ryan Chevalier",
        driverId: "266228",
        iRating: "3089",
        license: "A 4.99",
      },
    ],
  },
};

export default meta;
