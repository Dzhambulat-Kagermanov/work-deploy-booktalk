import { Frame512994 } from ".";

export default {
  title: "Components/Frame512994",
  component: Frame512994,

  argTypes: {
    property1: {
      options: ["variant-4", "variant-2", "variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-4",
    className: {},
  },
};
