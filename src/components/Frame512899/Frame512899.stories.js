import { Frame512899 } from ".";

export default {
  title: "Components/Frame512899",
  component: Frame512899,

  argTypes: {
    property1: {
      options: ["default", "variant-5", "variant-2", "variant-3", "variant-4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
  },
};
