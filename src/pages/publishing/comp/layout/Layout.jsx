import React, { useEffect } from "react";
import { Layout, ConfigProvider } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./Sidebar";
import Breadcrumb from "./Breadcrumb";

const AdminLayout = ({ breadcrumbItems, children, pageClass }) => {
	useEffect(() => {
		// AOS 초기화
		AOS.init({
			duration: 1000,
			once: false,
			disable: "mobile" // 모바일에서 비활성화
		});

		// 사이드바 높이 조정 함수
		const adjustSidebarHeight = () => {
			const $mainNav = document.querySelector(".main-nav");
			const $leftMenu = document.querySelector(".admin-sidebar-left-menu");
			const $sideCnt = document.querySelector(".admin-sidebar-content");

			if ($mainNav && $leftMenu && $sideCnt) {
				$leftMenu.style.minHeight = `${$mainNav.clientHeight + 50}px`;
				$sideCnt.style.minHeight = `${$mainNav.clientHeight + 50}px`;
			}
		};

		// 페이지 로드 시 실행
		adjustSidebarHeight();

		// 창 크기가 변경될 때마다 실행
		window.addEventListener("resize", adjustSidebarHeight);

		// 컴포넌트 언마운트 시 이벤트 리스너 제거
		return () => {
			window.removeEventListener("resize", adjustSidebarHeight);
		};
	}, []);

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#0388A6"
					// ... 기타 토큰 설정
				}
			}}>
			<Layout className={`admin-layout ${pageClass}`}>
				<div className="admin-body-container">
					<Sidebar className="admin-sidebar" />
					<div className="admin-content-wrapper">
						<Breadcrumb breadcrumbItems={breadcrumbItems} className="admin-breadcrumb" />
						<div className="admin-main-content" data-aos="fade-right" data-aos-delay="400">
							{children}
						</div>
					</div>
				</div>
			</Layout>
		</ConfigProvider>
	);
};

export default AdminLayout;
