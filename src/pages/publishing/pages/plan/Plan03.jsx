import React, { useState } from "react";
import AdminLayout from "pages/publishing/comp/layout/Layout";
import CustomModal from "pages/publishing/comp/CustomModal";
import { Button, Modal } from "antd";

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
	// 페이지 정보 설정
	const breadcrumbItems = {
		mainTitle: "목표수립 방식 선택 모달",
		describeTitle: "목표수립 방식 선택 모달 페이지입니다"
	};
	const pageName = "plan-page";

	return (
		<AdminLayout breadcrumbItems={breadcrumbItems} pageClass={pageName}>
			<Button onClick={showDrawer}>Open Drawer</Button>
			<CustomModal placement="right" size="large" onClose={showInfoModal} title="목표 수립" visible={visible}>
				<div className="goal-setup-container">
					<p className="goal-setup-intro">새로운 목표는 어떤 레벨의 목표인가요?</p>
					<ul className="goal-setup-options">
						<li className="goal-setup-option">
							<button className="goal-setup-link">
								<p className="goal-setup-title">가이드 따라 수립하기</p>
								<div className="goal-setup-description">
									OKR이 처음 이거나, <br /> 예시와 설명을 통해 더 쉽게 목표와 핵심결과를 세우고 싶다면 <br /> 단계별
									가이드와 함께 해보세요.
								</div>
								<p className="goal-setup-time">예상 소요시간 15분</p>
							</button>
						</li>
						<li className="goal-setup-option">
							<button className="goal-setup-link">
								<p className="goal-setup-title">직접 수립하기</p>
								<div className="goal-setup-description">
									OKR이 이미 익숙하거나, <br />
									자신만의 방식으로 목표와 핵심결과를 세우고 싶다면 <br />
									자유롭게 목표와 핵심결과를 설정해 보세요.
								</div>
								<p className="goal-setup-time">예상 소요시간 5분</p>
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
