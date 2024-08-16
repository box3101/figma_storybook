import React, { useState } from "react";
import AdminLayout from "pages/publishing/comp/layout/Layout";
import CustomModal from "pages/publishing/comp/CustomModal";
import OKRCardBody from "pages/publishing/pages/plan/comp/OKRCardBody";
import { Button, Modal, DatePicker, Select, Input, Pagination } from "antd";
import { SearchOutlined, SortAscendingOutlined, CheckCircleFilled } from "@ant-design/icons";

const { Search } = Input;

function Plan05() {
	const [visible, setVisible] = useState(true);
	const [isAlertVisible, setIsAlertVisible] = useState(false);
	const showInfoModal = () => {
		setIsAlertVisible(true);
	};
	const handleAlertOk = () => {
		setIsAlertVisible(false);
		setVisible(false);
	};
	const handleAlertCancel = () => {
		setIsAlertVisible(false);
	};
	const showDrawer = () => {
		setVisible(true);
	};
	const handleNextClick = () => {
		console.log("다음 버튼이 클릭되었습니다.");
	};
	const breadcrumbItems = {
		mainTitle: "목표수립 설정_목표레벨선택(가이드 따라 수립하기)",
		describeTitle: "목표수립 설정_목표레벨선택(가이드 따라 수립하기) 페이지입니다"
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
			objective: {
				title: "기업들이 지속 가능한 성장과 혁신을 달성할 수 있도록 지원하는 포괄적인 솔루션을 제공한다.",
				startDate: "24-07-01",
				endDate: "24-09-30",
				teamName: "프로덕트서클",
				teamCount: 3,
				status: "진행",
				status2: "정상",
				percent: 60
			},
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
			<Button onClick={showDrawer}>Open Drawer</Button>
			<CustomModal
				placement="right"
				size="large"
				onClose={showInfoModal}
				title="목표 수립"
				visible={visible}
				footer={
					<div style={{ textAlign: "right", marginTop: "20px" }}>
						<Button type="primary" onClick={handleNextClick} className="ant-btn-lg">
							다음
						</Button>
					</div>
				}>
				<div className="goal-setup-container">
					<p className="goal-setup-intro">연결할 상위 목표를 선택하세요.</p>
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
									return <OKRCardBody {...item} key={idx} />;
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
				</div>
			</CustomModal>
			<Modal open={isAlertVisible} onOk={handleAlertOk} onCancel={handleAlertCancel} okText="확인" cancelText="취소">
				<p>
					목표 수립을 중단하면 지금까지 입력한 정보가 저장되지 않아요. <br /> 목표 수립을 정말 중단하시겠어요?
				</p>
			</Modal>

			<Input
				placeholder="Please input"
				size="middle"
				status="success"
				style={{
					borderColor: "#52c41a"
				}}
				suffix={<CheckCircleFilled style={{ color: "#52c41a" }} />}
			/>
		</AdminLayout>
	);
}

export default Plan05;
