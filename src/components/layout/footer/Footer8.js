import Link from "next/link";

const Footer8 = () => {
	return (
		<footer className="tj-footer-area footer-2 style-2 h8-footer">
			<div className="footer-top-area fix">
				<div className="container">
					<div className="row line rg-50">
						<div className="col-xl-5 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget">
								<div className="footer-title">
									<h4 className="title">Al Bahar & Partners (BPC)</h4>
								</div>
								<div className="footer-description" style={{ maxWidth: "100%" }}>
									<p style={{ maxWidth: "85%", wordWrap: "break-word", lineHeight: "1.6", color: "#a9b0b8" }}>
										Business Digital Solutions (BDS) delivers secure, scalable technology across
										banking, payments, identity, infrastructure, and cybersecurity—helping
										enterprises modernize with confidence.
									</p>
								</div>
								<div className="footer-social">
									<h5 className="title">Follow Us:</h5>
									<ul>
										<li>
											<Link href="https://www.linkedin.com/">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/">
												<i className="fa-brands fa-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.youtube.com/">
												<i className="fa-brands fa-youtube"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer4-col-2 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Services</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/services/1">Banking, Payment & Identity Solutions</Link>
										</li>
										<li>
											<Link href="/services/2">Printing & Imaging Services</Link>
										</li>
										<li>
											<Link href="/services/3">Audio & Visual Services</Link>
										</li>
										<li>
											<Link href="/services/4">IT Infrastructure, Support & Cloud</Link>
										</li>
										<li>
											<Link href="/services/5">Information & Cyber Security</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-3 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Resources</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/about">About BPC</Link>
										</li>
										<li>
											<Link href="/services">Solutions</Link>
										</li>
										<li>
											<Link href="/portfolios">Case Studies</Link>
										</li>
										<li>
											<Link href="/blog-grid">Insights & Articles</Link>
										</li>
										<li>
											<Link href="/contact">Support Center</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer-contact-infos">
								<div className="footer-title">
									<h4 className="title">Our Offices</h4>
								</div>
								<div className="infos-item">
									<span>Head Office – Kuwait</span>
									<p>Al Bahar & Partners (BPC)</p>
									<p>Shuwaikh / Kuwait City</p>
									<p><Link href="tel:+96522222222">+965 222 222 22</Link></p>
									<p><Link href="mailto:info@albaharandpartners.com">info@albaharandpartners.com</Link></p>	
								</div>
								<div className="infos-item">
									<span>Regional Support</span>
									<p><Link href="mailto:support@albaharandpartners.com">support@albaharandpartners.com</Link></p>		
									<p><Link href="tel:+96522222222">+965 222 222 22</Link></p>		
								</div>
							</div>
						</div>
					</div>
				</div>
				<Link className="backtop" href="#">
					<i className="tji-arrow-up"></i>
				</Link>
			</div>
			<div className="footer-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										<i className="fa-solid fa-shield-check"></i> Trusted partner
										in business digital excellence.
									</p>
								</div>
								<div className="copyright-text">
									<p>
										© 2026 Al Bahar & Partners (BPC). All rights reserved.
									</p>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="/contact">Powered by Anathoth</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer8;
