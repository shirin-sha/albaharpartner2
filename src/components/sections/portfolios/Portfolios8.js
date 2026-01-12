"use client";
import PortfolioCard8 from "@/components/shared/cards/PortfolioCard8";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolios8 = () => {
	const customPortfolios = [
		{
			id: 1,
			title: "CrowdStrike – Endpoint Security Rollout",
			img4: "/images/project/h8-project-1.webp",
			tags: ["Security", "Endpoint"],
		},
		{
			id: 2,
			title: "Entrust – Identity & Authentication",
			img4: "/images/project/h8-project-2.webp",
			tags: ["Identity", "Authentication"],
		},
		{
			id: 3,
			title: "Axonius – Asset Visibility & Control",
			img4: "/images/project/h8-project-3.webp",
			tags: ["Asset Management", "Visibility"],
		},
		{
			id: 4,
			title: "Pure Storage – Modern Storage Reliability",
			img4: "/images/project/h8-project-4.webp",
			tags: ["Storage", "Infrastructure"],
		},
	];

	return (
		<section className="h8-case-study">
			<div className="container ">
				<div className="row">
					<div className="col">
						<div className="sec-heading h8-section-heading style-4">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								CUSTOMER STORIES
							</span>
							<h2 className="sec-title text-anim">
								Explore Our Featured Projects
							</h2>
						</div>

						<div className="wow fadeInUp" data-wow-delay="0.4s">
							<Swiper
								initialSlide={0}
								slidesPerView={1}
								spaceBetween={20}
								loop={true}
								loopAdditionalSlides={2}
								speed={1000}
								autoplay={{
									delay: 5000,
								}}
								pagination={{
									el: ".swiper_pagination",
									clickable: true,
								}}
								breakpoints={{
									992: {
										slidesPerView: 2,
										spaceBetween: 30,
									},
								}}
								modules={[Autoplay, Pagination]}
								className="h8-case-study-slider swiper-container"
							>
								{customPortfolios?.length
									? customPortfolios?.map((portfolioSingle, idx) => (
											<SwiperSlide key={idx} className="h8-case-study-item">
												<PortfolioCard8 portfolio={portfolioSingle} idx={idx} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper_pagination"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios8;
