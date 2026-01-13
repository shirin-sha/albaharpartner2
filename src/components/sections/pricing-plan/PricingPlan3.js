"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";

const PricingPlan3 = () => {
	const engagementModels = [
		{
			id: 1,
			title: "Advisory & Roadmap",
			subtitle: "Best for scoping Banking, Identity, Cloud, and Cyber programs.",
			features: [
				"Banking/Payment environment review",
				"Identity & access requirements capture",
				"Cyber risk & compliance baseline",
				"Partner solution mapping & selection",
				"Architecture + integration blueprint",
				"Rollout plan with milestones",
				"Governance, documentation & approvals",
			],
		},
		{
			id: 2,
			title: "Implementation & Integration",
			subtitle: "For deploying partner solutions with controlled delivery.",
			features: [
				"Solution design & project planning",
				"Deployment & secure configuration",
				"Systems integration and API connections",
				"IAM policies, roles & access controls",
				"Security testing & go-live readiness",
				"Training + operational handover",
				"Hypercare / stabilization support",
			],
		},
		{
			id: 3,
			title: "Managed Support & Optimization",
			subtitle: "For ongoing stability, security, and performance assurance.",
			features: [
				"Support desk & escalation management",
				"Monitoring and incident coordination",
				"Patch/upgrade and lifecycle planning",
				"Security reviews & hardening updates",
				"Performance tuning & capacity guidance",
				"Periodic health checks & reporting",
				"Continuous improvement roadmap",
			],
		},
	];

	return (
		<section className="h8-price-section section-space">
			<BootstrapWrapper>
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="h8-price-header">
								<div className="sec-heading h8-section-heading style-4">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.2s"
									>
										ENGAGEMENT MODELS
									</span>
									<h2 className="sec-title text-anim">
										Flexible engagement, measurable outcomes
									</h2>
								</div>
							</div>

							<div className="h8-price-wrapper d-none d-lg-flex">
								<div
									className="price_tabs flex-column nav-pills wow fadeInLeft"
									data-wow-delay="0.3s"
									role="tablist"
									aria-orientation="vertical"
								>
									{engagementModels.map((model, idx) => (
										<div
											key={model.id}
											className={`tab_item ${idx === 0 ? "active" : ""}`}
											data-bs-toggle="pill"
											data-bs-target={`#priceTab-${model.id}`}
											role="tab"
											aria-selected={idx === 0 ? "true" : "false"}
										>
											<span className="checkbox"></span>

											<div className="content">
												<h4 className="title">{model.title}</h4>
												<div className="desc">{model.subtitle}</div>
											</div>
										</div>
									))}
								</div>

								<div
									className="price_tab_contents tab-content wow fadeInRight"
									data-wow-delay="0.4s"
								>
									{engagementModels.map((model, idx) => (
										<div
											key={model.id}
											className={`tab_content tab-pane ${idx === 0 ? "show active" : ""}`}
											id={`priceTab-${model.id}`}
											role="tabpanel"
										>
											<ul className="features">
												{model.features.map((feature, featureIdx) => (
													<li key={featureIdx} className="active">
														<i className="tji-double-check"></i> {feature}
													</li>
												))}
											</ul>

											<div className="buttons">
												<ButtonPrimary text={"Get Started"} url={"#"} />
											</div>
										</div>
									))}
								</div>
							</div>

							<div
								className="h8-price-mobile-wrapper d-lg-none"
								id="pricingAccordion"
							>
								{engagementModels.map((model, idx) => (
									<div key={model.id} className="pricing_a_item">
										<div
											className={`tab_item ${idx === 0 ? "" : "collapsed"}`}
											data-bs-toggle="collapse"
											data-bs-target={`#priceA-${model.id}`}
											aria-expanded={idx === 0 ? "true" : "false"}
											role="tablist"
										>
											<div className="check_wrap">
												<span className="checkbox"></span>
											</div>

											<div className="content">
												<h4 className="title">{model.title}</h4>
												<div className="desc">{model.subtitle}</div>
											</div>
										</div>

										<div
											id={`priceA-${model.id}`}
											className={`pricing_a_content collapse ${idx === 0 ? "show" : ""}`}
											data-bs-parent="#pricingAccordion"
										>
											<div className="tab_content accordion-body">
												<ul className="features">
													{model.features.map((feature, featureIdx) => (
														<li key={featureIdx} className="active">
															<i className="tji-double-check"></i> {feature}
														</li>
													))}
												</ul>

												<div className="buttons">
													<ButtonPrimary
														text={"Get Started"}
														url={"/contact"}
													/>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</BootstrapWrapper>
		</section>
	);
};

export default PricingPlan3;
