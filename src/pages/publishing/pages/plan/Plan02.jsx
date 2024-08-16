import React from "react";
import AdminLayout from "pages/publishing/comp/layout/Layout";
import OKRDetailCard from "pages/publishing/pages/plan/comp/OKRDetailCard";
import { DatePicker, Input, Button, Pagination } from "antd";
import { SearchOutlined, SortAscendingOutlined } from "@ant-design/icons";
import { Select } from "antd/lib";

const { Search } = Input;

function Plan02() {
	// 페이지 정보 설정
	const breadcrumbItems = {
		mainTitle: "Plan02",
		describeTitle: "Plan02 페이지입니다"
	};

	const pageName = "plan-page";

	const cardData = [
		// 검토 합의 전 상태
		{
			status: "수립",
			status2: "전사",
			creator: { name: "전미경", initials: "미경" },
			creationDate: "24-07-01",
			review: "-",
			agreement: "-",
			comments: "0",
			objective: "기업들이 지속 가능한 성장과 혁신을 달성할 수 있도록 지원하는 포괄적인 솔루션을 제공한다.",
			keyResults: [
				{
					owner: { initials: "mk" },
					title: "핵심결과 1",
					startDate: "24-07-01",
					endDate: "24-09-30"
				},
				{
					owner: { initials: "mk" },
					title:
						"글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트",
					startDate: "24-08-01",
					endDate: "24-10-31"
				},
				{
					owner: { initials: "mk" },
					title: "핵심결과 3",
					startDate: "24-09-01",
					endDate: "24-11-30"
				}
			],
			items: [{ label: "검토 요청" }, { label: "협의 요청" }, { label: "삭제" }]
		},
		// 검토 중인 상태
		{
			status: "검토",
			status2: "전사",
			creator: { name: "전미경", initials: "미경" },
			creationDate: "24-07-01",
			review: "-",
			agreement: "-",
			comments: "0",
			objective: "기업들이 지속 가능한 성장과 혁신을 달성할 수 있도록 지원하는 포괄적인 솔루션을 제공한다.",
			keyResults: [
				{
					owner: { initials: "mk" },
					title: "핵심결과 1",
					startDate: "24-07-01",
					endDate: "24-09-30"
				},
				{
					owner: { initials: "mk" },
					title:
						"글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트",
					startDate: "24-08-01",
					endDate: "24-10-31"
				},
				{
					owner: { initials: "mk" },
					title: "핵심결과 3",
					startDate: "24-09-01",
					endDate: "24-11-30"
				}
			],
			items: [{ label: "검토 리마인드" }, { label: "검토 요청 취소" }, { label: "합의 요청" }]
		},
		// 합의 중인 상태
		{
			status: "합의",
			status2: "팀",
			creator: { name: "전미경", initials: "MS" },
			creationDate: "24-07-01",
			review: "5 명/5 명 완료 ",
			agreement: {
				requestDate: "24-07-01"
			},
			comments: "10",
			objective: "기업들이 지속 가능한 성장과 혁신을 달성할 수 있도록 지원하는 포괄적인 솔루션을 제공한다.",
			keyResults: [
				{
					owner: { initials: "mk" },
					title: "핵심결과 1",
					startDate: "24-07-01",
					endDate: "24-09-30"
				},
				{
					owner: { initials: "mk" },
					title:
						"글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트",
					startDate: "24-08-01",
					endDate: "24-10-31"
				},
				{
					owner: { initials: "mk" },
					title: "핵심결과 3",
					startDate: "24-09-01",
					endDate: "24-11-30"
				}
			],
			items: [{ label: "검토 요청" }, { label: "협의 요청" }, { label: "삭제" }]
		},
		// 승인 상태
		{
			status: "승인",
			status2: "팀",
			creator: { name: "전미경", initials: "MS" },
			creationDate: "24-07-01",
			review: "5 명/5 명 완료 ",
			agreement: {
				requestDate: "24-07-01",
				completeDate: "24-07-01"
			},
			comments: "10",
			objective: "기업들이 지속 가능한 성장과 혁신을 달성할 수 있도록 지원하는 포괄적인 솔루션을 제공한다.",
			keyResults: [
				{
					owner: { initials: "mk" },
					title: "핵심결과 1",
					startDate: "24-07-01",
					endDate: "24-09-30"
				},
				{
					owner: { initials: "mk" },
					title:
						"글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트",
					startDate: "24-08-01",
					endDate: "24-10-31"
				},
				{
					owner: { initials: "mk" },
					title: "핵심결과 3",
					startDate: "24-09-01",
					endDate: "24-11-30"
				}
			],
			items: [{ label: "검토 요청" }, { label: "협의 요청" }, { label: "삭제" }]
		},
		// 반려 상태
		{
			status: "반려",
			status2: "팀",
			creator: { name: "전미경", initials: "MS" },
			creationDate: "24-07-01",
			review: "5 명/5 명 완료 ",
			agreement: {
				requestDate: "24-07-01",
				completeDate: "24-07-01",
				avatarInitials: "MS"
			},
			comments: "10",
			objective: "기업들이 지속 가능한 성장과 혁신을 달성할 수 있도록 지원하는 포괄적인 솔루션을 제공한다.",
			keyResults: [
				{
					owner: { initials: "mk" },
					title: "핵심결과 1",
					startDate: "24-07-01",
					endDate: "24-09-30"
				},
				{
					owner: { initials: "mk" },
					title:
						"글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트글자테스트",
					startDate: "24-08-01",
					endDate: "24-10-31"
				},
				{
					owner: { initials: "mk" },
					title: "핵심결과 3",
					startDate: "24-09-01",
					endDate: "24-11-30"
				}
			],
			items: [{ label: "검토 요청" }, { label: "협의 요청" }, { label: "삭제" }]
		}
	];

	return (
		<AdminLayout breadcrumbItems={breadcrumbItems} pageClass={pageName}>
			{/* Header */}
			<header className="header-toolbar flex aic jcb gap10">
				<section className="left flex aic gap10">
					<div className="date-picker flex aic gap5">
						<img src={`${process.env.PUBLIC_URL}/assets/images/icon/icon-sorter.svg`} alt="" />
						<DatePicker picker="date" size="middle" variant="outlined" />
					</div>
				</section>
				<section className="right flex aic gap10">
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
				</section>
			</header>
			{/* Header EEE */}
			{/* contentArea */}
			<section className="content-area">
				{/* conTop */}
				<article className="cont-top flex aic jcb">
					<div className="left">
						전체 <span className="count">0</span>
					</div>
					<div className="right flex aic gap10">
						<div className="btn-wrp flex aic gap5">
							<Button>전체 펼치기</Button>
							<Button>전체 접기</Button>
						</div>
						{/* 10개씩 select */}
						<Select
							className="w-mid"
							defaultValue="10개씩"
							size="middle"
							options={[
								{ value: "1", label: "10개씩" },
								{ value: "2", label: "20개씩" },
								{ value: "3", label: "30개씩" }
							]}
						/>
					</div>
				</article>
				{/* conTop EEE */}
				{/* task-cards */}
				<article className="task-cards">
					<ul>
						{cardData.map((item, idx) => {
							return <OKRDetailCard {...item} key={idx} />;
						})}
					</ul>
				</article>
				{/* task-cards EEE */}
				{/* pagination */}
				<article className="pagination mt50">
					<Pagination defaultCurrent={1} total={60} align="center" />
				</article>
				{/* pagination EEE */}
			</section>
			{/* contentArea EEE */}
		</AdminLayout>
	);
}

export default Plan02;
