"use client";
import BlogCard8 from "@/components/shared/cards/BlogCard8";
import { useState } from "react";

const Blogs8 = () => {
	const customBlogs = [
		{
			id: 1,
			title: "Red Flags in Vendor Security Assessments",
			desc: "A quick checklist to spot hidden risks before you sign—covering access control, data handling, and incident readiness.",
			category: "Cybersecurity",
			day: 28,
			month: "JUL",
			date: "Jul 28, 2025",
			img4: "/images/blog/blog-thumb-1.webp",
		},
		{
			id: 2,
			title: "Building Secure Identity & Access Systems",
			desc: "Learn how modern IAM reduces risk, improves user experience, and strengthens compliance—without slowing down your teams.",
			category: "Digital Transformation",
			day: 15,
			month: "AUG",
			date: "Aug 15, 2025",
			img4: "/images/blog/blog-thumb-2.webp",
		},
		{
			id: 3,
			title: "Payment Technology Trends Shaping Customer Experience",
			desc: "From frictionless checkout to fraud prevention—what to prioritize to improve trust, speed, and customer satisfaction.",
			category: "Payments",
			day: 24,
			month: "AUG",
			date: "Aug 24, 2025",
			img4: "/images/blog/blog-thumb-3.webp",
		},
	];
	const [currentIndex, setCurrentIndex] = useState(0);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	return (
		<section className="h8-blog-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading h8-section-heading text-center style-4">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
								LATEST INSIGHTS
							</span>
							<h2 className="sec-title text-anim">
								Tips & Insights for Smarter Digital Decisions
							</h2>
						</div>
					</div>
				</div>
				<div
					className="row rg-30 justify-content-center wow fadeInUp"
					data-wow-delay="0.3s"
				>
					<div className="col-12">
						<div className="h8-blog-wrapper">
							{customBlogs?.length
								? customBlogs?.map((blog, idx) => (
										<BlogCard8
											key={idx}
											blog={blog}
											idx={idx}
											handleCurrentIndex={handleCurrentIndex}
											currentIndex={currentIndex}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs8;
