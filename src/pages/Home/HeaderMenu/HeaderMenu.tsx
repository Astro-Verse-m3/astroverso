import React from "react";
import NavDesktop from "./NavDesktop/NavDesktop";
import { NaviMobile } from "./NaviMobile/NaviMobile";

import { StyledHeaderMenu } from "./style";

export const HeaderMenu = () => {
	return (
		<StyledHeaderMenu>
			<NaviMobile />
			<NavDesktop />
		</StyledHeaderMenu>
	);
};
