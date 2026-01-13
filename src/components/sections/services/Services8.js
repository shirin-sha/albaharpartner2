"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard8 from "@/components/shared/cards/ServiceCard8";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Link from "next/link";

const Services8 = () => {
	const customServices = [
		{
			id: 1,
			title: "Banking, Payment & Identity Solutions",
			desc: "Enable secure transaction experiences and identity-driven access. We support solution planning, integration readiness, rollout coordination, and support for stable operations.",
			iconName: "tji-optimization",
			img: "/images/service/h1-service-1.webp",
		},
		{
			id: 2,
			title: "Printing & Imaging Services",
			desc: "Reliable office and enterprise printing environments designed for productivity, workflow efficiency, and service continuity—with structured deployment and support.",
			iconName: "tji-strategic",
			img: "/images/service/h1-service-2.webp",
		},
		{
			id: 3,
			title: "Audio & Visual Services",
			desc: "Professional meeting and collaboration spaces for boardrooms and training rooms—planning, configuration, integration, and after-support for consistent performance.",
			iconName: "tji-leadership",
			img: "/images/service/h1-service-3.webp",
		},
		{
			id: 4,
			title: "IT Infrastructure, Support & Cloud",
			desc: "Infrastructure modernization and cloud readiness built for scalability and continuity, supported with monitoring, optimization, and dependable technical support.",
			iconName: "tji-business",
			img: "/images/service/h1-service-4.webp",
		},
		{
			id: 5,
			title: "Information & Cyber Security",
			desc: "Security-first practices and solutions aligned to modern threats—assessment, deployment guidance, access protection, and cyber readiness support.",
			iconName: "tji-executive",
			img: "/images/service/h1-service-5.webp",
		},
	];
	return (
		<section className="h8-services-section section-space">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="h8-services-wrapper">
							<div className="h8-services-left">
								<div className="tj-sticky-top">
									<div
										className="h8-video hover:shine wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<img
											src="/images/video/h8-video-img.jpg"
											alt="post-image"
										/>
									
									</div>
									<div className="h8-services-left-content">
										<h2 className="title text-anim">
											Services Built for <br />Business Success
										</h2>
										<div className="wow fadeInUp" data-wow-delay="0.7s">
											<ButtonPrimary
												text={"View All Services"}
												url={"/services"}
												className={"d-none d-lg-inline-flex"}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="h8-services-right">
								<div className="h8-services-list">
									{customServices?.length
										? customServices?.map((service, idx) => (
												<ServiceCard8 key={idx} service={service} idx={idx} />
										  ))
										: ""}
								</div>

								<div className="mobile_btn text-center d-lg-none">
									<ButtonPrimary text={"View All Services"} url={"/services"} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services8;
