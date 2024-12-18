import { Frame512946 } from ".";

export default {
  title: "Components/Frame512946",
  component: Frame512946,

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
    frameWrapperText: "Возможность создавать <br/>и вступать в книжные клубы",
  },
};
