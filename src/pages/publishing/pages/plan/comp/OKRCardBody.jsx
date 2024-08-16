import React from "react";
import { Avatar, Progress, Flex } from "antd";
import IconDropdown from "pages/publishing/comp/IconDropdown";

const OKRCardBody = ({ status2, creator, objective, items, keyResults, percent }) => {
	return (
		<section className="okr-card__body second">
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
						<p className="okr-card__objective-title">{objective.title}</p>
						<div className="okr-card__key-result-dates">
							<span className="okr-card__date-start">{objective.startDate}</span>
							<span className="okr-card__date-separator">~</span>
							<span className="okr-card__date-end">{objective.endDate}</span>
						</div>
						<div className="okr-card__label-secondary">{objective.teamName}</div>
						<div className="okr-card__label-secondary-count"> + {objective.teamCount}</div>
						<div className="okr-card__label-secondary">{objective.status}</div>
						<div className="okr-card__label-secondary">{objective.status2}</div>
						<div className="okr-card__label-secondary-progress">
							<Progress percent={60} />
						</div>
					</div>
					<div className="okr-card__actions">
						<IconDropdown items={items} />
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
	);
};

export default OKRCardBody;
