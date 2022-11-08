import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import Logo from "../../../../assets/Astroverso.svg";
import { BsPatchPlusFill } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaUserPlus, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

import { UserAvatar } from "../Avatar/Avatar";
import { NavLinks } from "../NavLinks/NavLinks";
import {
	StyledBtnDropdown,
	StyledContainerItem,
	StyledContainerLogo,
	StyledContainerMenu,
	StyledNavDesktop
} from "../style";

const NavDesktop = () => {
	const [user, setUser] = useState(true);

	return (
		<StyledNavDesktop>
			<StyledContainerLogo>
				<img src={Logo} alt="logo" title="logo" />
			</StyledContainerLogo>

			<StyledContainerMenu>
				<NavLinks />

				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild>
						<StyledBtnDropdown>
							<UserAvatar />
						</StyledBtnDropdown>
					</DropdownMenu.Trigger>

					<DropdownMenu.Portal style={{ position: "relative" }}>
						<DropdownMenu.Content
							style={{
								width: "calc(var(--height-1) * 4)",
								minHeight: "calc(var(--height-1) * 2.5)",
								marginRight: 20,
								paddingLeft: 20,
								paddingRight: 20,
								paddingBottom: 20,
								backgroundColor: "var(--color-primary-darker)",
								borderRadius: "var(--radius-1)"
							}}
						>
							{!user && (
								<>
									<DropdownMenu.Item>
										<StyledContainerItem>
											<FaSignInAlt />
											<Link to="/login">Fazer login</Link>
										</StyledContainerItem>
									</DropdownMenu.Item>

									<DropdownMenu.Item>
										<StyledContainerItem>
											<FaUserPlus />
											<Link to="/register">Cadastro</Link>
										</StyledContainerItem>
									</DropdownMenu.Item>
								</>
							)}

							{user && (
								<>
									<DropdownMenu.Item>
										<StyledContainerItem>
											<RiUserSettingsFill />
											<Link to="#">Perfil</Link>
										</StyledContainerItem>
									</DropdownMenu.Item>

									<DropdownMenu.Item>
										<StyledContainerItem>
											<BsPatchPlusFill />
											<Link to="/extra">Extras</Link>
										</StyledContainerItem>
									</DropdownMenu.Item>

									<DropdownMenu.Item>
										<StyledContainerItem>
											<FaSignOutAlt />
											<Link to="/" onClick={() => setUser(!user)}>
												Sair
											</Link>
										</StyledContainerItem>
									</DropdownMenu.Item>
								</>
							)}

							<DropdownMenu.Arrow
								style={{ fill: "var(--color-primary-darker)" }}
							/>
						</DropdownMenu.Content>
					</DropdownMenu.Portal>
				</DropdownMenu.Root>
			</StyledContainerMenu>
		</StyledNavDesktop>
	);
};

export default NavDesktop;