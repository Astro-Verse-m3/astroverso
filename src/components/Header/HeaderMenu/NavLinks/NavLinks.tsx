import React from "react";
import { BsPatchPlusFill, BsStars } from "react-icons/bs";
import { IoPlanet } from "react-icons/io5";
import { MdQuiz } from "react-icons/md";
import { StyledMenuLink as Link } from "../style";

import { StyledMenuItem, StyledMenuList } from "../style";

export const NavLinks = () => {
	return (
		<StyledMenuList>
			<StyledMenuItem className="menu-item">
				<IoPlanet />
				<Link to="/planetas">Planetas</Link>
			</StyledMenuItem>

			<StyledMenuItem className="menu-item">
				<BsStars />
				<Link to="/estrelas">Estrelas</Link>
			</StyledMenuItem>

			<StyledMenuItem className="menu-item">
				<MdQuiz />
				<Link to="/dashboard">Quiz</Link>
			</StyledMenuItem>

			<StyledMenuItem className="menu-item">
				<BsPatchPlusFill />
				<Link to="/extra">Extras</Link>
			</StyledMenuItem>
		</StyledMenuList>
	);
};
{
	/* <BsPatchPlusFill /> */
}
