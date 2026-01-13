"use client";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Process4 = () => {
	const containerRef = useRef(null);
	const lineRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const lineActive = lineRef.current;
		const items = container?.querySelectorAll(".process-item");

		if (!container || !lineActive || !items?.length) return;

		const totalPortion = 100 / items.length;

		const handleEnter = (idx, item) => {
			items.forEach(el => el.classList.remove("active"));
			lineActive.style.left = `${totalPortion * idx}%`;

			item.classList.add("active");
		};

		items.forEach((item, idx) => {
			item.addEventListener("mouseenter", () => handleEnter(idx, item));
		});

		// Cleanup listeners on unmount
		return () => {
			items.forEach((item, idx) => {
				item.removeEventListener("mouseenter", () => handleEnter(idx, item));
			});
		};
	}, []);

	const process = [
		{
			id: 1,
			title: (
				<>
					Discovery & <br /> Assessment
				</>
			),
			desc: "We review your current environment, requirements, and risks—then define scope, priorities, and success metrics for the project.",
			btnText: "Book discovery call →",
		},
		{
			id: 2,
			title: (
				<>
					Solution Design & <br /> Planning
				</>
			),
			desc: "We map the best-fit partner solution, architecture, and rollout plan—including integration, timelines, testing, and handover approach.",
			btnText: "Explore Services →",
		},
		{
			id: 3,
			title: (
				<>
					Implementation & <br /> Support
				</>
			),
			desc: "We coordinate deployment and go-live with your team, then provide post-deployment support to ensure stability, continuity, and optimization.",
			btnText: "Explore Support →",
		},
	];
	return (
		<section
			ref={containerRef}
			id="tj-process-2"
			className="h8-process section-space"
		>
			<div className="container">
				<div className="row ">
					<div className="col-12">
						<div className="sec-heading h8-section-heading sec-heading-centered style-4">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								OUR WORKING PROCESS{" "}
							</span>
							<h2 className="sec-title text-anim">
								Three steps to deliver secure, reliable technology outcomes
							</h2>
						</div>
					</div>

					<div className="col-12">
						<div className="h8-process-inner ">
							<div className="process-line">
								<div className="process-line-active" ref={lineRef}></div>
							</div>
							{process?.length
								? process?.map(({ id, title, desc, btnText }, idx) => (
										<div
											className={`process-item style-4 ${
												idx === 0 ? "active" : ""
											}  wow fadeInLeft`}
											data-wow-delay={`0.${idx + 2 + idx}s`}
											key={idx}
										>
											<div className="process-index">
												<span>{modifyNumber(idx + 1)} </span>
											</div>
											<div className="process-content">
												<h5 className="title">{title}</h5>
												<div className="desc">
													<p>{desc}</p>
												</div>
												<Link
													className="service-button text-btn"
													href="#"
												>
													{btnText}
												</Link>
											</div>
										</div>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process4;
