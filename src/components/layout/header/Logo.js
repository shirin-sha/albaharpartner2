"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site-logo">
			<Link className="logo" href="/">
				<Image
					src={`/images/logos/${
						(headerType === 3 ||
							headerType === 4 ||
							headerType === 5 ||
							headerType === 6 ||
							headerType === 9) &&
						!isStickyHeader
							? "secondary-logo.png"
							: headerType === 9
							? "secondary-logo.png"
							: "logo.svg"
					}`}
					alt="logo"
					height={100}
					width={250}
				/>
			</Link>
		</div>
	);
};

export default Logo;
