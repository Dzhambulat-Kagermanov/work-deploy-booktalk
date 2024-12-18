import { Frame512947 } from ".";

export default {
  title: "Components/Frame512947",
  component: Frame512947,

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
