import React, { useState } from "react";
import AdminLayout from "pages/publishing/comp/layout/Layout";
import CustomModal from "pages/publishing/comp/CustomModal";
import CustomSelect from "pages/publishing/comp/CustomSelect";
import { Button, Modal, Avatar } from "antd";

function Plan03() {
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
	const [selectedTeam, setSelectedTeam] = useState(null);
	const teamOptions = [
		{
			value: "1",
			label: "개발팀2"
		},
		{
			value: "2",
			label: "디자인팀"
		},
		{
			value: "3",
			label: "마케팅팀"
		}
	]; // 페이지 정보 설정
	const handleTeamSelect = value => {
		const selected = teamOptions.find(team => team.value === value);
		setSelectedTeam(selected);
	};
	const breadcrumbItems = {
		mainTitle: "목표수립 설정_목표레벨선택(가이드 따라 수립하기)",
		describeTitle: "목표수립 설정_목표레벨선택(가이드 따라 수립하기) 페이지입니다"
	};
	const pageName = "plan-page";

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
					<p className="goal-setup-intro">새로운 목표는 어떤 레벨의 목표인가요?</p>
					<p className="goal-setup-intro-desc">
						각 레벨의 OKR은 서로 연결되어 있어요. 전사 목표를 달성하기 위해 프로젝트 서클 목표가 필요하고, 팀 목표를
						달성하기 위해 개인 목표가 필요합니다. <br /> 전사, 팀, 개인 목표가 서로 잘 연결되어 있어야 하지요. 전사
						목표를 달성하기 위해 팀과 개인의 목표가 어떻게 연결되고, 기여할지 생각해보고 레벨을 정하세요.
					</p>
					<ul className="goal-setup-options">
						<li className="goal-setup-option">
							<button className="goal-setup-link">
								<p className="goal-setup-title">전사레벨</p>
								<div className="goal-setup-description">회사 전체가 달성하고자 하는 큰 목표에요.</div>
							</button>
						</li>
						<li className="goal-setup-option">
							<button className="goal-setup-link">
								<p className="goal-setup-title">팀 레벨</p>
								<div className="goal-setup-description mb50">각 팀이 전사 목표를 달성하기 위한 목표에요.</div>
								<CustomSelect
									options={teamOptions}
									placeholder={selectedTeam ? selectedTeam.label : "프로젝트 서클"}
									onSelect={handleTeamSelect}
									selectedValue={selectedTeam?.value}
									searchPlaceholder="프로젝트 서클 검색"
									labelKey="label"
									showProfileInfo={false}
								/>
							</button>
						</li>
						<li className="goal-setup-option">
							<button className="goal-setup-link">
								<p className="goal-setup-title">개인 레벨</p>
								<div className="goal-setup-description">각 개인이 팀 목표를 달성하기 위한 목표에요.</div>
								<div
									style={{
										alignItems: "center",
										display: "flex"
									}}>
									<Avatar
										size={24}
										style={{
											backgroundColor: "#f56a00",
											fontSize: "15px",
											marginRight: 8
										}}>
										MK
									</Avatar>
									<div
										style={{
											alignItems: "center",
											display: "flex",
											gap: "5px"
										}}>
										<span>전미경</span>
										<span
											style={{
												color: "rgba(0, 0, 0, 0.45)"
											}}>
											서비스기획 / UX리드
										</span>
									</div>
								</div>
							</button>
						</li>
					</ul>
				</div>
			</CustomModal>
			<Modal open={isAlertVisible} onOk={handleAlertOk} onCancel={handleAlertCancel} okText="확인" cancelText="취소">
				<p>
					목표 수립을 중단하면 지금까지 입력한 정보가 저장되지 않아요. <br /> 목표 수립을 정말 중단하시겠어요?
				</p>
			</Modal>
		</AdminLayout>
	);
}

export default Plan03;
