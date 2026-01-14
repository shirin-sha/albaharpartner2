import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();
	const homeNav = makeActiveLink(navItems[0]);
	const aboutNav = makeActiveLink(navItems[1]);
	const solutionsNav = makeActiveLink(navItems[2]);
	const brandNav = makeActiveLink(navItems[3]);
	const corpInfoNav = makeActiveLink(navItems[4]);
	const supportNav = makeActiveLink(navItems[5]);
	const contactNav = makeActiveLink(navItems[6]);

	return (
		<div
			className={`mainmenu ${
				(headerType === 3 || headerType == 4) && !isStickyHeader ? "menu-3" : ""
			}  d-lg-block d-none`}
			id={isStickyHeader ? "mainmenu" : "main-menu"}
		>
			<ul>
				<li
					className={`has-dropdown ${
						homeNav?.isActive ? "current-menu-ancestor" : ""
					}`}
				>
					<Link href={homeNav?.path ? homeNav?.path : "#"}>
						{homeNav?.name}
					</Link>
				
				</li>
				<li
					className={`has-dropdown ${
						aboutNav?.isActive ? "current-menu-ancestor" : ""
					}`}
				>
					<Link href={aboutNav?.path ? aboutNav?.path : "#"}>
						{aboutNav?.name}
					</Link>
				
				</li>
				<li
					className={`has-dropdown ${
						solutionsNav?.isActive ? "current-menu-ancestor" : ""
					}`}
				>
					<Link href="#">{solutionsNav?.name}</Link>
					<ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
						<li>
							<div className="mega-menu-wrapper">
								{solutionsNav?.submenu?.length
									? solutionsNav?.submenu?.map((pageItem, idx) => (
											<div key={idx} className="mega-menu-pages-single">
												<div className="mega-menu-pages-single-inner">
													<h6 className="mega-menu-title">{pageItem?.name}</h6>
													<div className="mega-menu-list">
														{pageItem?.items?.length
															? pageItem?.items?.map((item, idx2) => (
																	<Link
																		key={100 + idx2}
																		href={item?.path ? item?.path : "/"}
																		className={item?.isActive ? "active" : ""}
																	>
																		{item?.name}
																		{item?.badge ? (
																			<span
																				className={`mega-menu-badge ${
																					item?.badge === "HOT"
																						? "mega-menu-badge-hot"
																						: ""
																				}`}
																			>
																				{item?.badge}
																			</span>
																		) : (
																			""
																		)}
																	</Link>
															  ))
															: ""}
													</div>
												</div>
											</div>
									  ))
									: ""}

								<div className="col-12 col-lg-3 mega-menu-pages-single">
									<div className="mega-menu-pages-single-inner">
										<div
											className="tj-sidebar-cta"
											style={{
												backgroundImage: "url('/images/blog/widget-cta.webp')",
											}}
										>
											<div className="content">
												<div className="icon">
													<Image
														src="/images/shapes/solutions logo.svg"
														alt="image"
														width={55}
														height={55}
													/>
												</div>
												<h3>
													Need help? <br /> Feel free contact us
												</h3>
												<p>
													Our mission is to empowers businesses off all size in
													an businesses.
												</p>
											</div>
											<div className="cta-btn">
												<ButtonPrimary
													text={"Get in touch"}
													url={"#"}
													className={"white-btn"}
												/>
												<Image
													className="shapes move-anim-2"
													src="/images/shapes/carrow.png"
													alt="shape"
													width={115}
													height={117}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</li>
				<li
					className={`has-dropdown ${
						corpInfoNav?.isActive ? "current-menu-ancestor" : ""
					}`}
				>
					<Link href={corpInfoNav?.path ? corpInfoNav?.path : "/"}>
						{corpInfoNav?.name}
					</Link>
					<ul className="sub-menu  mega-menu-service">
						{corpInfoNav?.submenu?.length
							? corpInfoNav?.submenu?.map((item, idx) => (
									<li key={idx}>
										<Link
											className="mega-menu-service-single"
											href={item?.path ? item?.path : "/"}
										>
											{" "}
											<span className="mega-menu-service-icon">
												<i
													className={
														item?.icon ? item?.icon : "tji-optimization"
													}
												></i>
											</span>{" "}
											<span className="mega-menu-service-title">
												{item?.name
													? item?.name
													: "Business process optimization"}
											</span>{" "}
											<span className="mega-menu-service-nav">
												<i className="tji-arrow-right"></i>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</li>
							  ))
							: ""}
					</ul>
				</li>
			
			
				<li className={brandNav?.isActive ? "current-menu-ancestor" : ""}>
					<Link href={brandNav?.path ? brandNav?.path : "#"}>
						{brandNav?.name ? brandNav?.name : "Brand"}
					</Link>
				</li>
				<li className={supportNav?.isActive ? "current-menu-ancestor" : ""}>
					<Link href={supportNav?.path ? supportNav?.path : "#"}>
						{supportNav?.name ? supportNav?.name : "Support"}
					</Link>
				</li>
				<li className={contactNav?.isActive ? "current-menu-ancestor" : ""}>
					<Link href={contactNav?.path ? contactNav?.path : "#"}>
						{contactNav?.name ? contactNav?.name : "Contact"}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
