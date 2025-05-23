import { Checkbox } from "@a1r93/ui/components/Checkbox/Checkbox.tsx";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Form/Checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "Checkbox",
  },
};
