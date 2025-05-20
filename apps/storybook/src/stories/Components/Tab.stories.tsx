import { Tab, TabList, TabPanel, Tabs } from "@a1r93/ui/components/Tab/Tab.tsx";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Form/Tab",
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: [
      <TabList key="tablist">
        <Tab id="item-1">Item 1</Tab>
        <Tab id="item-2">Item 2</Tab>
        <Tab id="item-3">Item 3</Tab>
      </TabList>,
      <TabPanel id="item-1" key="item-1">
        Item 1 content
      </TabPanel>,
      <TabPanel id="item-2" key="item-2">
        Item 2 content
      </TabPanel>,
      <TabPanel id="item-3" key="item-3">
        Item 3 content
      </TabPanel>,
    ],
  },
};
