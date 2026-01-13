import Link from "next/link";

const Cta6 = () => {
	return (
		<section className="tj-growth-section tjParallaxSection">
			<div
				className="tj-growth-bg tjParallaxImage"
				style={{ backgroundImage: "url(/images/growth/growth-bg.webp)" }}
			></div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="growth-wrap">
							<div
								className="growth-content mt-0 wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<h2 className="title text-anim">
									See how we enable secure digital progress
								</h2>
								<div className="desc wow fadeInUp" data-wow-delay="0.5s">
									<p style={{ color: "#ffffff" }}>
										Partner-led solutions across banking, identity, infrastructure, and cybersecurity
										—delivered with structured execution and reliable support.
									</p>
								</div>
								<div className="video-btn-wrap">
									<Link
										className="video-btn"
										href="/case-studies"
									>
										<span className="video-text">Explore Case Studies</span>
									</Link>
								</div>
								<div className="icon-shape">
									<img src="/images/shapes/logo-icon-transparent.svg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta6;
