import React from "react";
import { Link } from "react-router-dom";

import { StyledMenuList } from "../style";

export const NavLinks = () => {
	return (
		<StyledMenuList>
			<li>
				<Link to="#">Planetas</Link>
			</li>
			<li>
				<Link to="#">Estrelas</Link>
			</li>
			<li>
				<Link to="/dashboard">Quiz</Link>
			</li>
		</StyledMenuList>
	);
};
