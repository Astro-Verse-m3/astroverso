import React, { useContext, useEffect, useState } from "react";
import { StyledMenuLink as Link } from "../../style";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { MdQuiz } from "react-icons/md";
import { IoPlanet } from "react-icons/io5";
import { CgMenuRound } from "react-icons/cg";
import { BsPatchPlusFill, BsStars } from "react-icons/bs";
import { GiAstronautHelmet, GiSpaceship, GiSpaceShuttle } from "react-icons/gi";
import { FaSpaceShuttle, FaUserAstronaut, FaUserPlus } from "react-icons/fa";

import { UserAvatar } from "../../Avatar/Avatar";
import { StyledHeaderDropdown } from "../../style";
import { iDropdownUserProps } from "./typeDropdowns";
import { StyledTitle } from "../../../../../styles/typography";
import { UserContext } from "../../../../../contexts/UserContext";
import { useParams, useLocation } from "react-router-dom";
import { AstrosContext } from "../../../../../contexts/AstrosContext";

export const DropdownHeaderMenu = ({ windowSize }: iDropdownUserProps) => {
  const { user, userLogout } = useContext(UserContext);
  const { pathName, isLogged, setIsLogged, setToQuiz } =
    useContext(AstrosContext);
  const token = localStorage.getItem("@astroverso:token");
  token ? setIsLogged(true) : setIsLogged(false);
  return (
    <DropdownMenu.Root>
      {windowSize.innerWidth < 768 ? (
        <DropdownMenu.Trigger className="mobile-dropmenu-trigger" asChild>
          <button>
            <CgMenuRound aria-label="Menu" title="Menu" />
          </button>
        </DropdownMenu.Trigger>
      ) : (
        <DropdownMenu.Trigger>
          <UserAvatar />
        </DropdownMenu.Trigger>
      )}

      <DropdownMenu.Portal container={document.body}>
        <DropdownMenu.Content
          loop
          className={`dropmenu-content + ${
            windowSize.innerWidth < 768 ? "mobile" : "desktop"
          }`}
        >
          {windowSize.innerWidth < 768 && (
            <>
              <DropdownMenu.Item>
                <StyledHeaderDropdown>
                  <UserAvatar />
                  {user ? (
                    <StyledTitle tag="h4" fontSize="five" color="two">
                      {user.name}
                    </StyledTitle>
                  ) : (
                    <StyledTitle tag="h4" fontSize="five" color="two">
                      Visitante
                    </StyledTitle>
                  )}
                </StyledHeaderDropdown>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="dropmenu-separator" />

              <DropdownMenu.Item className="menu-item">
                <IoPlanet />
                <Link
                  to="/planets"
                  className={pathName === "planets" ? "active" : ""}
                >
                  Planetas
                </Link>
              </DropdownMenu.Item>

              {/* <DropdownMenu.Item className="menu-item">
								<BsStars />
								<Link
									to="/stars"
									className={pathName === "stars" ? "active" : ""}
								>
									Estrelas
								</Link>
							</DropdownMenu.Item> */}

              <DropdownMenu.Item className="menu-item">
                <MdQuiz />
                <Link
                  to={isLogged ? "/quiz" : "/login"}
                  className={pathName === "quiz" ? "active" : ""}
                  onClick={() => setToQuiz(true)}
                >
                  Quiz
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="menu-item">
                <BsPatchPlusFill />
                <Link
                  to="/extra"
                  className={pathName === "extra" ? "active" : ""}
                >
                  Extras
                </Link>
              </DropdownMenu.Item>
            </>
          )}

          {windowSize.innerWidth < 768 && (
            <DropdownMenu.Separator className="dropmenu-separator logged" />
          )}

          {user ? (
            <>
              <DropdownMenu.Item className="menu-item" key="Perfil">
                <FaUserAstronaut />
                <Link
                  to="/dashboard"
                  className={pathName === "dashboard" ? "active" : ""}
                >
                  Perfil
                </Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="menu-item">
                <FaSpaceShuttle />
                <Link to="/" onClick={() => userLogout()}>
                  Sair
                </Link>
              </DropdownMenu.Item>
            </>
          ) : (
            <>
              <DropdownMenu.Item className="menu-item">
                <GiSpaceShuttle />
                <Link to="/login">Login</Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="menu-item">
                <FaUserPlus />
                <Link to="/register">Cadastro</Link>
              </DropdownMenu.Item>
            </>
          )}

          <DropdownMenu.Arrow className="dropmenu-arrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
