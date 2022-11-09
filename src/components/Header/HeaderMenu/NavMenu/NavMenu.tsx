import React, { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";

import { NavLinks } from "../NavLinks/NavLinks";
import { StyledContainerMenu, StyledNav } from "../style";
import { DropdownHeaderMenu } from "./DropdownHeaderMenu/DropdownHeaderMenu";

export const NavMenu = () => {
	const { windowSize } = useContext(UserContext);

	return (
		<StyledNav>
			{windowSize.innerWidth < 768 ? (
				<DropdownHeaderMenu windowSize={windowSize} />
			) : (
				<StyledContainerMenu>
					<NavLinks />
					<DropdownHeaderMenu windowSize={windowSize} />
				</StyledContainerMenu>
			)}
		</StyledNav>
	);
};
