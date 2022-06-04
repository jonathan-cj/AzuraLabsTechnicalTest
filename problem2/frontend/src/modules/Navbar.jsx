import React from "react";
import NavItem from "../components/NavItem";

const Navbar = (props) => {
	const { routes } = props;


	return (
		<div className="w-full h-full bg-primary-800 text-h3 font-bold flex flex-col justify-start">
			<NavItem
				label="Home"
				path="/"
			/>
			{
				routes.map((route, idx) => (
					<NavItem
						key={idx}
						label={route.label}
						path={route.path}
					/>
				))
			}
		</div>
	);
}

export default Navbar;
