import React from "react";
import AdminLayout from "pages/publishing/comp/layout/Layout";
import { DatePicker, Input, Button } from "antd";
import { SearchOutlined, SortAscendingOutlined } from "@ant-design/icons";
import { Select } from "antd/lib";

const { Search } = Input;

function Plan01() {
	// 페이지 정보 설정
	const breadcrumbItems = {
		mainTitle: "Plan01",
		describeTitle: "Plan01 페이지입니다"
	};

	const pageName = "plan-page";
	return (
		<AdminLayout breadcrumbItems={breadcrumbItems} pageClass={pageName}>
			<div className="header-toolbar flex aic jcb gap10">
				<div className="left flex aic gap10">
					<div className="date-picker flex aic gap5">
						<img src={`${process.env.PUBLIC_URL}/assets/images/icon/icon-sorter.svg`} alt="" />
						<DatePicker picker="date" size="middle" variant="outlined" />
					</div>
				</div>
				<div className="right flex aic gap10">
					<div className="search">
						<Search
							className="w-lg"
							allowClear
							enterButton={
								<Button size="large" type="primary">
									검색
								</Button>
							}
							placeholder="목표,핵심결과명"
							prefix={<SearchOutlined style={{ marginRight: 8 }} />}
							size="middle"
						/>
					</div>

					<div className="team-all select-without-icon">
						<SortAscendingOutlined className="select-prefix-icon" />
						<Select
							className="w-lg select-with-inner-icon"
							defaultValue="전체"
							size="middle"
							prefix={<SortAscendingOutlined />}
							options={[
								{ value: "1", label: "전체" },
								{ value: "2", label: "개인" },
								{ value: "3", label: "팀" },
								{ value: "4", label: "전사" }
							]}
						/>
					</div>

					<div className="status select-with-outer-icon">
						<SortAscendingOutlined className="select-prefix-icon" />
						<Select
							className="w-mid"
							defaultValue="전체"
							size="middle"
							options={[
								{ value: "1", label: "전체" },
								{ value: "2", label: "수립" },
								{ value: "3", label: "검토" },
								{ value: "4", label: "합의" },
								{ value: "5", label: "승인" },
								{ value: "6", label: "반려" }
							]}
						/>
					</div>

					<div className="sort select-with-outer-icon">
						<SortAscendingOutlined className="select-prefix-icon" />
						<Select
							className="w-mid radius-lg"
							defaultValue="전체"
							size="middle"
							options={[
								{ value: "1", label: "생성일" },
								{ value: "2", label: "목표명" }
							]}
						/>
					</div>
				</div>
			</div>
			<div className="content-area">
				<p className="empty-content">아직 세운 목표가 없어요</p>
			</div>
		</AdminLayout>
	);
}

export default Plan01;
