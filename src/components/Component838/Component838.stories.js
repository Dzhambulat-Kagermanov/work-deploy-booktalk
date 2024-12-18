import { Component838 } from ".";

export default {
  title: "Components/Component838",
  component: Component838,

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
