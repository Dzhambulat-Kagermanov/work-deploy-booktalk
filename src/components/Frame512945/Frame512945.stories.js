import { Frame512945 } from ".";

export default {
  title: "Components/Frame512945",
  component: Frame512945,

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
