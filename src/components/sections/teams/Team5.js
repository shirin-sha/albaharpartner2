"use client";
import TeamCard5 from "@/components/shared/cards/TeamCard5";
import getTeamMembers from "@/libs/getTeamMembers";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Team5 = () => {
	const teamMembers = getTeamMembers();

	return (
		<section className="h8-team-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading h8-section-heading text-center style-4">
							<div className="sec-text">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								Governance & Leadership
								</span>
								<h2 className="sec-title text-anim">
								Board oversight ensuring clarity, compliance, and confident decisionmaking.

								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="wow fadeInUp" data-wow-delay="0.3s">
					<Swiper
						slidesPerView={1}
						spaceBetween={24}
						loop={true}
						speed={1500}
						autoplay={{
							delay: 5000,
						}}
						pagination={{
							el: ".team-pagination",
							clickable: true,
						}}
						breakpoints={{
							460: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 3,
							},
							992: {
								slidesPerView: 4,
							},
						}}
						modules={[Autoplay, Pagination]}
						className="h8-team-slider"
					>
						{teamMembers?.length
							? teamMembers.map((teamMember, idx) => (
									<SwiperSlide key={idx}>
										<TeamCard5 teamMember={teamMember} />
									</SwiperSlide>
							  ))
							: ""}
						<div className="swiper_pagination team-pagination"></div>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Team5;
