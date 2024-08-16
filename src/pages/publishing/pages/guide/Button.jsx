import React from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AdminLayout from "pages/publishing/comp/layout/Layout";

function Buttons() {
	// 페이지 정보 설정
	const breadcrumbItems = {
		mainTitle: "Buttons",
		describeTitle: "Buttons 페이지입니다"
	};

	const pageName = "plan-page";

	// 설명 텍스트를 위한 스타일
	const descriptionStyle = {
		fontSize: "14px",
		color: "#666",
		marginBottom: "10px",
		fontWeight: "bold"
	};

	return (
		<AdminLayout breadcrumbItems={breadcrumbItems} pageClass={pageName}>
			<p style={descriptionStyle}>기본 버튼 타입</p>
			<div className="flex gap-5 mb10">
				<Button type="primary">Primary Button</Button>
				<Button>Default Button</Button>
				<Button type="dashed">Dashed Button</Button>
				<Button type="text">Text Button</Button>
				<Button type="link">Link Button</Button>
			</div>

			<p style={descriptionStyle}>버튼 크기</p>
			<div className="flex gap5 mb10">
				<Button className="w-lg" size="large" type="primary">
					Button
				</Button>
				<Button className="w-mid" size="large" type="primary">
					Button
				</Button>
				<Button className="w-sm" size="large" type="primary">
					Button
				</Button>
			</div>

			<p style={descriptionStyle}>버튼 속성</p>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<div>
					<p style={{ ...descriptionStyle, marginBottom: "5px" }}>Disabled</p>
					<Button disabled>Disabled Button</Button>
					<Button style={{ marginLeft: "1rem" }}>Enabled Button</Button>
				</div>
				<div>
					<p style={{ ...descriptionStyle, marginBottom: "5px" }}>Loading</p>
					<Button loading>Loading Button</Button>
					<Button style={{ marginLeft: "1rem" }}>Normal Button</Button>
				</div>
				<div>
					<p style={{ ...descriptionStyle, marginBottom: "5px" }}>Ghost</p>
					<Button ghost>Ghost Button</Button>
					<Button style={{ marginLeft: "1rem" }}>Normal Button</Button>
				</div>
				<div>
					<p style={{ ...descriptionStyle, marginBottom: "5px" }}>Danger</p>
					<Button danger>Danger Button</Button>
					<Button style={{ marginLeft: "1rem" }}>Normal Button</Button>
				</div>
				<div>
					<p style={{ ...descriptionStyle, marginBottom: "5px" }}>Icon</p>
					<Button icon={<SearchOutlined />}>Button with Icon</Button>
					<Button style={{ marginLeft: "1rem" }}>Button without Icon</Button>
				</div>
				<div>
					<p style={{ ...descriptionStyle, marginBottom: "5px" }}>Shape</p>
					<Button shape="round">Round Button</Button>
					<Button style={{ marginLeft: "1rem" }}>Normal Button</Button>
				</div>
			</div>
		</AdminLayout>
	);
}

export default Buttons;
