import React, { useContext } from "react";
import { BsPatchPlusFill, BsStars } from "react-icons/bs";
import { IoPlanet } from "react-icons/io5";
import { MdQuiz } from "react-icons/md";
import { AstrosContext } from "../../../../contexts/AstrosContext";
import { StyledMenuLink as Link } from "../style";

import { StyledMenuItem, StyledMenuList } from "../style";

export const NavLinks = () => {
	const { pathName } = useContext(AstrosContext);

	return (
		<StyledMenuList>
			<StyledMenuItem className="menu-item">
				<IoPlanet />
				<Link to="/planets" className={pathName === "planets" ? "active" : ""}>
					Planetas
				</Link>
			</StyledMenuItem>

			<StyledMenuItem className="menu-item">
				<BsStars />
				<Link to="/stars" className={pathName === "stars" ? "active" : ""}>
					Estrelas
				</Link>
			</StyledMenuItem>

			<StyledMenuItem className="menu-item">
				<MdQuiz />
				<Link
					to="/dashboard"
					className={pathName === "dashboard" ? "active" : ""}
				>
					Quiz
				</Link>
			</StyledMenuItem>

			<StyledMenuItem className="menu-item">
				<BsPatchPlusFill />
				<Link to="/extra" className={pathName === "dashboard" ? "active" : ""}>
					Extras
				</Link>
			</StyledMenuItem>
		</StyledMenuList>
	);
};
