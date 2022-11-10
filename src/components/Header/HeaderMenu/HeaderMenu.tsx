import React, { memo, useEffect, useState } from "react";

import { NavMenu } from "./NavMenu/NavMenu";
import { StyledHeaderMenu } from "./style";
import { StyledContainer } from "../../../styles/global";
import { LogoHeader } from "../../Logo/Logo";

const HeaderMenu = () => {
	return (
		<StyledHeaderMenu>
			<StyledContainer>
				<LogoHeader />
				<NavMenu />
			</StyledContainer>
		</StyledHeaderMenu>
	);
};

export default memo(HeaderMenu);
