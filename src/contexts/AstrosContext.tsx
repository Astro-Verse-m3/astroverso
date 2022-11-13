import { useState, createContext, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { planetsList } from "../components/Slider";
import { getAstroList } from "../services/getAstroList";

import { iChildren, iAstrosContextProps, iAstro } from "./typeContext";
import { UserContext } from "./UserContext";

export const AstrosContext = createContext({} as iAstrosContextProps);

export const AstrosProvider = ({ children }: iChildren) => {
  const { user } = useContext(UserContext);

  const [astroList, setAstroList] = useState<iAstro[] | []>(planetsList);
  const [isLogged, setIsLogged] = useState(false as boolean);
  const [toQuiz, setToQuiz] = useState(false as boolean);
  const [pathName, setPathName] = useState("planets");
  const location = useLocation();

  useEffect(() => {
    const getAstroByCategory = async () => {
      const category = location.pathname.slice(1, location.pathname.length);

      setPathName(category);
      if (category === "planets" || category === "stars") {
        try {
          const data = await getAstroList(category);

          setAstroList(data);
        } catch (error) {
          console.log(error);
          toast.error("Ops! Algo deu errado, tente mais tarde!");
        }
      }
    };

    getAstroByCategory();
  }, [location]);

  return (
    <AstrosContext.Provider
      value={{ astroList, pathName, isLogged, setIsLogged, toQuiz, setToQuiz }}
    >
      {children}
    </AstrosContext.Provider>
  );
};
