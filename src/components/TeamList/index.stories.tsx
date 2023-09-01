import { TeamList } from "./";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TeamList> = {
  title: "Components/Team List",
  component: TeamList,
};

type Story = StoryObj<typeof TeamList>;

export const Empty: Story = {};

export const Populated: Story = {
  args: {
    teams: [
      {
        name: "FTR eSports TCR",
        teamId: "152439",
        car: "Elantra",
        isPro: false,
        carNumber: "366",
        data: [
          [
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
        ],
      },
      {
        name: "Sampsoid TCR",
        teamId: "296144",
        car: "Elantra",
        isPro: false,
        carNumber: "399",
        data: [],
      },
      {
        name: "Sapphire SimSport Bravo",
        teamId: "194228",
        car: "Elantra",
        isPro: false,
        carNumber: "392",
        data: [],
      },
      {
        name: "SIM RACING GRID PHOENIX",
        teamId: "295075",
        car: "Elantra",
        isPro: false,
        carNumber: "323",
        data: [],
      },
      {
        name: "Goryo Autosport",
        teamId: "251935",
        car: "Civic",
        isPro: false,
        carNumber: "311",
        data: [],
      },
    ],
  },
};

export default meta;
