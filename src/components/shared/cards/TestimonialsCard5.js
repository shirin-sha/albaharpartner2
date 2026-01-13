const TestimonialsCard5 = ({ testimonial, type }) => {
	const { authorName, authorDesig, desc, img, logoImg, logoImgLight } =
		testimonial ? testimonial : {};
	return (
		<div
			className={`testimonial-item ${
				type === 2 ? "h8-testimonial-item" : "style-6"
			}`}
		>
			<div className="testimonial-content">
				
				<div className="desc">
					<p>
						{desc || "Our experience on Solvior has been nothing short of exceptional. From one, their team demonstrated a deep understanding of our industry and quickly identified key areas for improvement recommendations From one, their team demonstrated."}
					</p>
				</div>
			</div>
			<div className="tj-testimonial-author">
			
				<div className="author-content">
					<div className="author-text">
						<h4 className="author-name">{authorName}</h4>
						<span className="sub-title">{authorDesig}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard5;
