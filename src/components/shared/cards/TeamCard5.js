import Link from "next/link";

const TeamCard5 = ({ teamMember }) => {
	const { id, name, designation, image, social } = teamMember || {};
	const img = image || "/images/team/team-1.webp";
	const desig = designation || "";
	
	return (
		<div className="team-item style-5 itemScrollAnimate">
			<div className="team-images">
				<img src={img} alt={name || "Images"} />
			</div>
			<div className="team-content">
				<div className="team-text">
					<h5 className="title">
						<Link href="#">{name}</Link>
					</h5>
					<span className="sub-title">{desig}</span>
				</div>
				<div className="team-share">
					<ul>
						{social?.linkedin_url && (
							<li>
								<Link href="#">
									<i className="fa-brands fa-linkedin-in"></i>
								</Link>
							</li>
						)}
						{social?.twitter_url && (
							<li>
								<Link href="#">
									<i className="fa-brands fa-twitter"></i>
								</Link>
							</li>
						)}
						{social?.instagram_url && (
							<li>
								<Link href="#">
									<i className="fa-brands fa-instagram"></i>
								</Link>
							</li>
						)}
						{social?.facebook_url && (
							<li>
								<Link href="#">
									<i className="fa-brands fa-facebook-f"></i>
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TeamCard5;
