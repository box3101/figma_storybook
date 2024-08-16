import React from "react";
import { Button as AntButton, Dropdown } from "antd";
import { MoreOutlined, SearchOutlined } from "@ant-design/icons";
import classNames from "classnames";

// Button 컴포넌트를 수정합니다. width prop을 제거하고 className만 사용합니다.
const Button = ({ className, ...props }) => {
	// classNames 함수를 사용하여 클래스 이름을 결합합니다.
	const buttonClass = classNames(className);

	// 결합된 클래스 이름과 나머지 props를 AntButton에 전달합니다.
	return <AntButton className={buttonClass} {...props} />;
};

export default {
	title: "Ant Design/Button",
	component: Button,
	argTypes: {
		type: {
			options: ["primary", "default", "dashed", "text", "link"],
			control: { type: "select" }
		},
		size: {
			options: ["large", "middle", "small"],
			control: { type: "radio" }
		},
		// width prop을 제거하고 className을 추가합니다.
		className: { control: "text" },
		disabled: { control: "boolean" },
		loading: { control: "boolean" },
		ghost: { control: "boolean" },
		danger: { control: "boolean" },
		icon: { control: "text" },
		round: {
			options: ["primary", "circle", "round"],
			control: { type: "radio" }
		}
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/xkxnEVt4ZLEEc2Ko9HLSL3/%EC%BD%94%EC%96%B4%EC%9B%8C%ED%81%ACOKR-2.0_Library?node-id=784-2107&t=wxooGBfUE1alqzRi-0"
		}
	}
};

// 기본 Button 컴포넌트 스토리를 수정합니다.
export const Default = args => <Button {...args}>Button</Button>;
Default.args = {
	type: "primary",
	size: "large",
	className: "w-lg"
};

const menuItems = [
	{ key: "1", label: "Option 1" },
	{ key: "2", label: "Option 2" },
	{ key: "3", label: "글자테스트 글자테스트 글자테스트" }
];

export const DotsThreeVerticalWithPopover = args => (
	<Dropdown menu={{ items: menuItems }} trigger={["hover", "click"]} placement="bottomRight">
		<Button icon={<MoreOutlined />} {...args} />
	</Dropdown>
);

DotsThreeVerticalWithPopover.args = {
	type: "text",
	size: "middle"
};

DotsThreeVerticalWithPopover.parameters = {
	docs: {
		// 문서화 관련 설정을 추가할 수 있습니다.
	}
};
