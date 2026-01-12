"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TestimonialsCard5 from "@/components/shared/cards/TestimonialsCard5";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials7 = () => {
	const clientOutcomes = [
		{
			id: 1,
			authorName: "Secure Identity Rollouts",
			desc: "We implement identity and access programs that strengthen authentication, streamline onboarding, and enforce governance across users, apps, and privileged accounts.",
			img: "/images/testimonial/h1-test-1.webp",
		},
		{
			id: 2,
			authorName: "Payment Experience Modernization",
			desc: "We help organizations upgrade payment journeys with secure integration, faster processing, and improved customer experience across channels and touchpoints.",
			img: "/images/testimonial/h1-test-2.webp",
		},
		{
			id: 3,
			authorName: "Cybersecurity Hardening & Visibility",
			desc: "We enhance enterprise security with assessments, architecture improvements, monitoring alignment, and risk reduction plans tailored to business priorities.",
			img: "/images/testimonial/h1-test-3.webp",
		},
		{
			id: 4,
			authorName: "Infrastructure & Cloud Readiness",
			desc: "We support scalable infrastructure with design, migration guidance, and operational best practices for reliability, performance, and cost control.",
			img: "/images/testimonial/h1-test-4.webp",
		},
		{
			id: 5,
			authorName: "Printing & Imaging Optimization",
			desc: "We modernize printing and document workflows to improve control, reduce wastage, and enhance productivity through managed and secure print environments.",
			img: "/images/testimonial/h1-test-5.webp",
		},
		{
			id: 6,
			authorName: "Audio & Visual Integration",
			desc: "We deliver smart AV solutions for meeting rooms and collaborative spaces, ensuring seamless connectivity, clear communication, and easy ongoing management.",
			img: "/images/testimonial/h1-test-6.webp",
		},
		{
			id: 7,
			authorName: "Compliance & Governance Alignment",
			desc: "We align security and technology controls with governance requirements, documentation standards, and audit readiness for confident decision-making.",
			img: "/images/testimonial/h1-test-1.webp",
		},
		{
			id: 8,
			authorName: "Managed Support & Continuous Improvement",
			desc: "We provide structured support and optimization cycles to keep systems stable, secure, and continuously improving as your business evolves.",
			img: "/images/testimonial/h1-test-2.webp",
		},
		{
			id: 9,
			authorName: "Vendor-Ready Implementations",
			desc: "We coordinate with leading technology vendors and stakeholders to ensure clean delivery, smooth acceptance, and successful handover to operations.",
			img: "/images/testimonial/h1-test-3.webp",
		},
		{
			id: 10,
			authorName: "Business-Driven Consulting Approach",
			desc: "We focus on measurable outcomes—security, performance, efficiency, and user experience—so every engagement delivers value beyond implementation.",
			img: "/images/testimonial/h1-test-4.webp",
		},
	];
	const [currentDirection, setCurrentDirection] = useState("vertical");

	useEffect(() => {
		const getDirection = () => {
			setCurrentDirection(window.innerWidth < 768 ? "horizontal" : "vertical");
		};

		getDirection();
		window.addEventListener("resize", getDirection);
		return () => window.removeEventListener("resize", getDirection);
	}, []);

	return (
		<section className="h8-testimonial">
			<div className="container tj-gap-30">
				<div className="row">
					{/* Left column */}
					<div className="col-12 col-lg-8 col-xl-4">
						<div className="h8-testimonial-section-heading-wrapper">
							<div className="sec-heading h8-section-heading h8-testimonial-section-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									CLIENT VALUE
								</span>
								<h2 className="sec-title text-anim">
									Client Outcomes and Delivery Highlights
								</h2>
							</div>
							<div className="h8-testimonial-fanfact">
								<div className="counter-item">
									<FunfactSingle currentValue={900} symbol="+" />
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.3s"
									>
										Deployments & engagements delivered across enterprise environments
									</span>
								</div>
							</div>
							<div className="btn-area wow fadeInUp" data-wow-delay="0.3s">
								<ButtonPrimary text="Explore capabilities" url="/contact" />
							</div>
						</div>
					</div>

					{/* Up direction slider */}
					<div className="col-12 col-md-6 col-xl-4">
						<div className="h8-testimonial-wrapper">
							<Swiper
								key={currentDirection}
								slidesPerView="auto"
								spaceBetween={24}
								centeredSlides
								loop
								allowTouchMove={false}
								speed={8000}
								direction={currentDirection}
								autoplay={{
									delay: 0,
									disableOnInteraction: false,
									reverseDirection: false,
								}}
								breakpoints={{
									768: { spaceBetween: 30 },
								}}
								modules={[Autoplay]}
								className="h8-testimonial-slider h8-testimonial-slider-up"
							>
								{clientOutcomes.map((outcome, idx) => (
									<SwiperSlide key={idx}>
										<TestimonialsCard5 testimonial={outcome} type={2} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>

					{/* Down direction slider */}
					<div className="col-12 col-md-6 col-xl-4">
						<div className="h8-testimonial-wrapper">
							<Swiper
								key={currentDirection}
								slidesPerView="auto"
								spaceBetween={24}
								centeredSlides
								loop
								allowTouchMove={false}
								speed={8000}
								direction={currentDirection}
								autoplay={{
									delay: 0,
									disableOnInteraction: false,
									reverseDirection: true,
								}}
								breakpoints={{
									768: { spaceBetween: 30 },
								}}
								modules={[Autoplay]}
								className="h8-testimonial-slider h8-testimonial-slider-down"
							>
								{clientOutcomes.map((outcome, idx) => (
									<SwiperSlide key={idx}>
										<TestimonialsCard5 testimonial={outcome} type={2} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials7;
