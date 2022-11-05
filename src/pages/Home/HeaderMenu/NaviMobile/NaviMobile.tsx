import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import Logo from "../../../../assets/Astroverso.svg";
import { MdQuiz } from "react-icons/md";
import { IoPlanet } from "react-icons/io5";
import { CgMenuRound } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { BsStars, BsPatchPlusFill } from "react-icons/bs";

import {
	StyledBtnDropdown,
	StyledContainerItem,
	StyledContainerLogo,
	StyledHeaderDropdown,
	StyledNavMobile
} from "../style";
import { UserAvatar } from "../Avatar/Avatar";

export const NaviMobile = () => {
	const [user, setUser] = useState(false);

	return (
		<StyledNavMobile>
			<StyledContainerLogo>
				<img src={Logo} alt="logo" title="logo" />
			</StyledContainerLogo>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild>
					<StyledBtnDropdown>
						<CgMenuRound aria-label="Menu" />
					</StyledBtnDropdown>
				</DropdownMenu.Trigger>

				<DropdownMenu.Portal style={{ position: "relative" }}>
					<DropdownMenu.Content
						style={{
							width: "calc(var(--height-1) * 4)",
							minHeight: "calc(var(--height-1) * 5.5)",
							marginRight: 20,
							paddingLeft: 20,
							paddingRight: 20,
							paddingBottom: 20,
							backgroundColor: "var(--color-primary-darker)",
							borderRadius: "var(--radius-1)"
						}}
					>
						<DropdownMenu.Item>
							<StyledHeaderDropdown>
								<UserAvatar />
								<Link to="/login">Fazer Login</Link>
							</StyledHeaderDropdown>
						</DropdownMenu.Item>
						<DropdownMenu.Separator
							style={{
								height: 1,
								width: "calc(var(--height-1) * 3.55)",
								margin: 10,
								position: "absolute",
								inset: 0,
								top: user ? "12%" : "18%",
								backgroundColor: "var(--color-grey-2)"
							}}
						/>
						<DropdownMenu.Item>
							<StyledContainerItem>
								<IoPlanet />
								<Link to="#">Planetas</Link>
							</StyledContainerItem>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<StyledContainerItem>
								<BsStars />
								<Link to="#">Estrelas</Link>
							</StyledContainerItem>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<StyledContainerItem>
								<MdQuiz />
								<Link to="/dashboard">Quiz</Link>
							</StyledContainerItem>
						</DropdownMenu.Item>
						<DropdownMenu.Item>
							<StyledContainerItem>
								<BsPatchPlusFill />
								<Link to="/extra">Extras</Link>
							</StyledContainerItem>
						</DropdownMenu.Item>

						{user && (
							<>
								<DropdownMenu.Separator
									style={{
										height: 1,
										width: "calc(var(--height-1) * 3.55)",
										margin: 10,
										position: "absolute",
										inset: 0,
										top: "68%",
										backgroundColor: "var(--color-grey-2)"
									}}
								/>

								<DropdownMenu.Item>
									<StyledContainerItem>
										<RiUserSettingsFill />
										<Link to="#">Perfil</Link>
									</StyledContainerItem>
								</DropdownMenu.Item>

								<DropdownMenu.Item>
									<StyledContainerItem>
										<FaSignOutAlt />
										<Link to="/">Sair</Link>
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
		</StyledNavMobile>
	);
};
