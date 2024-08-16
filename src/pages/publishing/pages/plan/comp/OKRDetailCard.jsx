import React from "react";
import { Avatar } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import IconDropdown from "pages/publishing/comp/IconDropdown";

const OKRDetailCard = ({
	status,
	status2,
	creator,
	creationDate,
	review,
	agreement,
	comments,
	objective,
	items,
	keyResults
}) => {
	return (
		<li className="okr-card">
			<header className="okr-card__header">
				<section className="okr-card__header-left">
					<article className="okr-card__status-wrapper">
						<div className={`okr-card__status okr-card__status--${status.toLowerCase()}`}>{status}</div>
					</article>
					<article className="okr-card__creation-info">
						<p className="okr-card__label">생성</p>
						<div className="okr-card__creator">
							<Avatar
								size={39}
								style={{
									backgroundColor: "#f56a00",
									marginRight: 8
								}}>
								{creator.initials}
							</Avatar>
							<p className="okr-card__creator-name">{creator.name}</p>
							<p className="okr-card__creation-date">{creationDate}</p>
						</div>
					</article>
				</section>
				<section className="okr-card__header-right">
					<div className="okr-card__review-info">
						<p className="okr-card__label">검토</p>
						<p className="okr-card__review-value">{review}</p>
					</div>
					<div className="okr-card__agreement-info">
						<p className="okr-card__label">합의</p>
						<div className="okr-card__agreement-details">
							{agreement !== "-" ? (
								<>
									{agreement.avatarInitials ? (
										<Avatar
											size={39}
											style={{
												backgroundColor: "#f56a00",
												fontSize: "15px",
												marginRight: 8
											}}>
											{agreement.avatarInitials}
										</Avatar>
									) : null}
									<span>
										합의 요청일 : {agreement.requestDate}
										{agreement.completeDate ? ` / 합의 완료일 : ${agreement.completeDate}` : ""}
									</span>
								</>
							) : (
								"-"
							)}
						</div>
					</div>
					<div className="okr-card__comments-info">
						<p className="okr-card__label">코멘트</p>
						<p className="okr-card__comments-value">{comments}</p>
					</div>
				</section>
			</header>
			<section className="okr-card__body">
				<article className="okr-card__status-secondary">
					<div className={`okr-card__status okr-card__status--${status2.toLowerCase()}`}>{status2}</div>
				</article>
				<article className="okr-card__content">
					<div className="okr-card__objective">
						<div className="okr-card__objective-header">
							<p className="okr-card__label">목표</p>
							<Avatar
								size={39}
								style={{
									backgroundColor: "#f56a00",
									fontSize: "15px",
									marginRight: 8
								}}>
								{creator.initials}
							</Avatar>
							<p className="okr-card__objective-title">{objective}</p>
						</div>
						<div className="okr-card__actions">
							<IconDropdown items={items} />
							<IconDropdown
								items={[
									{ icon: <UserOutlined />, label: "Profile" },
									{ icon: <SettingOutlined />, label: "Settings" },
									{ icon: <LogoutOutlined />, label: "Logout" }
								]}
								placement="bottomRight"
								trigger={["hover", "click"]}
							/>
						</div>
					</div>
					<div className="okr-card__key-results">
						<ul>
							{keyResults.map((keyResult, index) => (
								<li key={index} className="okr-card__key-result-item">
									<div className="okr-card__key-result-info">
										<span className="okr-card__label">핵심결과</span>
										<Avatar
											size={39}
											style={{
												backgroundColor: "#f56a00",
												fontSize: "15px",
												marginRight: 8
											}}>
											{keyResult.owner.initials}
										</Avatar>
										<p className="okr-card__key-result-title">{keyResult.title}</p>
									</div>
									<div className="okr-card__key-result-dates">
										<span className="okr-card__date-start">{keyResult.startDate}</span>
										<span className="okr-card__date-separator">~</span>
										<span className="okr-card__date-end">{keyResult.endDate}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</article>
			</section>
		</li>
	);
};

export default OKRDetailCard;
