import { Frame512967 } from ".";

export default {
  title: "Components/Frame512967",
  component: Frame512967,

  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
  },
};
