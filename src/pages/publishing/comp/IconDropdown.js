import React from "react";
import { Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const IconDropdown = ({ items, placement = "bottomRight", trigger = ["click"], arrow = false }) => {
	const menuItems = items.map((item, index) => ({
		key: index,
		icon: item.icon,
		label: item.label
	}));

	return (
		<Dropdown menu={{ items: menuItems }} placement={placement} trigger={trigger} arrow={arrow}>
			<button onClick={e => e.preventDefault()} style={{ background: "none", border: "none", cursor: "pointer" }}>
				<MoreOutlined />
			</button>
		</Dropdown>
	);
};

export default IconDropdown;
