import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About8 = () => {
	return (
		<section className="tj-about-section-five h8-about section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-wrapper-four h8-about-wrapper">
							<div className="about-content-five h8-about-content">
								<div className="sec-heading h8-section-heading style-4">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.3s"
									>
										ABOUT BPC
									</span>
									<h2 className="sec-title text-anim">
										Expert Delivery for Mission-Critical Technology
									</h2>
								</div>
								<div className="desc wow fadeInUp" data-wow-delay="0.5s">
									<p>
										Al Bahar & Partners (BPC) is a Kuwait-based enterprise solutions provider
										delivering partner-led technologies across banking, identity, infrastructure, and
										cybersecurity. Through our Business Digital Solutions (BDS) Division, we support
										digital modernization initiatives with structured planning, implementation,
										integration, and ongoing support. Our focus is simple: deliver the right solution,
										deploy it correctly, and support it reliably.
									</p>
								</div>
								<div
									className="check-list-one wow fadeInUp"
									data-wow-delay="0.7s"
								>
									<ul>
										<li>
											<i className="tji-double-check"></i>Partner-backed enterprise technologies
										</li>
										<li>
											<i className="tji-double-check"></i>Implementation, integration & go-live support
										</li>
									</ul>
									<div className="vr-line"></div>
									<ul>
										<li>
											<i className="tji-double-check"></i>Security and compliance-aware delivery
										</li>
										<li>
											<i className="tji-double-check"></i>Post-deployment support and service continuity
										</li>
									</ul>
								</div>
								<div className="btn-area wow fadeInUp" data-wow-delay="0.9s">
									<ButtonPrimary text="Learn More About Us" href="/about" />
								</div>
							</div>
							<div
								className="about-images-group-three h8-about-banner hover:shine wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<img src="/images/about/h8-about-1.webp" alt="Images" />
								<div className="h8-about-float-area">
									<div className="client-experience h8-about-client-experience">
										<ul className="images-thumb">
											<li className="wow fadeInLeft" data-wow-delay="0.3s">
												<img src="/images/about/thumb-1.png" alt="Images" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay="0.4s">
												<img src="/images/about/thumb-2.png" alt="Images" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay="0.5s">
												<img src="/images/about/thumb-3.png" alt="Images" />
											</li>
											<li className="plus wow fadeInLeft" data-wow-delay="0.6s">
												<i className="fa-sharp fa-solid fa-plus"></i>
											</li>
										</ul>
									</div>
									<p className="h8-about-feedback-text">
										39K+ Happy clients all over world.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About8;
