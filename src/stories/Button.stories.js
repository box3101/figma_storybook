import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { MoreOutlined } from "@ant-design/icons";

export default {
  title: "Ant Design/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "default", "dashed", "text", "link"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "middle", "small"],
      control: { type: "radio" },
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    ghost: { control: "boolean" },
    danger: { control: "boolean" },
    block: { control: "boolean" },
    icon: { control: "text" },
    onClick: { action: "clicked" },
    round: {
      options: ["primary", "circle", "round"],
      control: { type: "radio" },
    },
    style: { control: "object" },
    className: { control: "text" },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/xkxnEVt4ZLEEc2Ko9HLSL3/%EC%BD%94%EC%96%B4%EC%9B%8C%ED%81%ACOKR-2.0_Library?node-id=784-2107&t=wxooGBfUE1alqzRi-0",
    },
  },
};

export const Default = (args) => <Button {...args}>Button</Button>;
Default.args = {
  type: "default",
  size: "middle",
};

const menu = (
  <Menu>
    <Menu.Item key="1">Option 1</Menu.Item>
    <Menu.Item key="2">Option 2</Menu.Item>
    <Menu.Item key="3">Option 3</Menu.Item>
  </Menu>
);

export const DotsThreeVerticalWithPopover = (args) => (
  <Dropdown overlay={menu} trigger={['hover','click']} placement="bottomRight">
    <Button 
      icon={<MoreOutlined />} 
      {...args}
    />
  </Dropdown>
);

DotsThreeVerticalWithPopover.args = {
  type: "text",
  size: "middle",
};

DotsThreeVerticalWithPopover.parameters = {
  docs: {
  },
};