import React from "react";
import { Input, Button, Popover } from "antd";
import {
  SearchOutlined,
  ExclamationCircleFilled,
  CloseCircleFilled,
  CheckCircleFilled
} from "@ant-design/icons";

const { Search } = Input;

export default {
  title: "Ant Design/Input",
  component: Input,
  argTypes: {
    width : {
      options: ["large", "middle", "small"],
      control: { type: "radio" },
    },
    size: {
      options: ["large", "middle", "small"],
      control: { type: "radio" },
    },
    status: {
      options: ["default", "warning", "error", "success"],
      control: { type: "radio" },
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    allowClear: { control: "boolean" },
    bordered: { control: "boolean" },
    maxLength: { control: "number" },
    style: { control: "object" },
    errorMessage: { control: "text" },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/xkxnEVt4ZLEEc2Ko9HLSL3/%EC%BD%94%EC%96%B4%EC%9B%8C%ED%81%ACOKR-2.0_Library?node-id=791-86130&m=dev",
    },
  },
};

const InputTemplate = (args) => {
  const getStatusIcon = () => {
    switch (args.status) {
      case "error":
        return <CloseCircleFilled style={{ color: '#ff4d4f' }} />;
      case "warning":
        return <ExclamationCircleFilled style={{ color: '#faad14' }} />;
      case "success":
        return <CheckCircleFilled style={{ color: '#52c41a' }} />;
      default:
        return null;
    }
  };

  const errorContent = (
    <div>
      {args.errorMessage || "최대 50자 까지 입력 가능합니다."}
    </div>
  );

  const inputWithIcon = (
    <Input
      {...args}
      suffix={getStatusIcon()}
    />
  );

  return args.status === "error" ? (
    <Popover content={errorContent} trigger="hover" placement="topLeft">
      {inputWithIcon}
    </Popover>
  ) : inputWithIcon;
};

const SearchTemplate = (args) => <Search {...args} />;

export const Default = InputTemplate.bind({});
Default.args = {
  placeholder: "Please input",
  size: "middle",
};


export const CustomSearch = SearchTemplate.bind({});
CustomSearch.args = {
  placeholder: "팀명을 입력하세요.",
  allowClear: true,
  prefix: <SearchOutlined style={{ marginRight: 8 }} />,
  enterButton: (
    <Button type="primary" size="large">
      검색
    </Button>
  ),
  size: "large",
  style: { width: "20rem" },
};