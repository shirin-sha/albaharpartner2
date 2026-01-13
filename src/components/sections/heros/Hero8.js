"use client";

import Image from "next/image";

const Hero8 = () => {
	return (
		<section className=" h8-hero style-1">
			<div
				className="tj-slider-section h8-hero-inner"
				style={{ backgroundImage: "url('/images/hero/hero.png')" }}
			>
				<div className="container" style={{ maxWidth: "1400px" }}>
					<div className="row">
						<div className="slider-wrapper h8-hero-wrapper">
							<div className="slider-content h8-hero-content">
								<div className="h8-hero-title-wrapper">
									<h1 className="slider-title h8-hero-title hero-text-anim" style={{ textAlign: "left" }}>
										INNOVATE. SECURE.<br />
										SCALE.
									</h1>

									{/* <div
										className="about-circle h8-hero-circle wow zoomIn"
										data-wow-delay="1.8s"
									>
										<div className="circle-wrap">
											<Image
												className="rotate-image"
												src="/images/shapes/h5-about-circle.png"
												alt="image"
												width={140}
												height={140}
											/>
											<span className="logo-icon">
												<Image
													src="/images/icons/logo-icon.svg"
													alt=""
													width={34}
													height={37}
													style={{ height: "auto" }}
												/>
											</span>
										</div>
									</div> */}
								</div>

								<div
									className="desc h8-hero-desc wow fadeInDown"
									data-wow-delay="1.2s"
									style={{ maxWidth: "800px" }}
								>
									<div className="h8-hero-desc-icon">
										<i className="tji-arrow-bown"></i>
									</div>
									<p style={{ lineHeight: "1.6" }}>
									Al Bahar & Partners (BPC) helps organizations modernize, protect, and optimize
operations through secure implementation and dependable after-support.

									</p>
								</div>
								{/* <div
									className="h8-hero-banner d-none d-md-block wow fadeInUp"
									data-wow-delay="1s"
								>
									<Image
										src="/images/hero/h8-hero-banner.webp"
										alt=""
										width={331}
										height={221}
									/>
								</div> */}
								{/* <div
									className="h8-hero-banner d-block d-md-none wow fadeInUp"
									data-wow-delay="2s"
								>
									<Image
										src="/images/hero/h8-hero-banner-sm.webp"
										alt=""
										width={402}
										height={217}
									/>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero8;
