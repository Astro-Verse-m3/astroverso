import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ApiRequests } from "../services/ApiRequest";
import { iChildren } from "./typeContext";

interface iPlanetsPosts {
  id: number;
  category: string;
  planetName: string;
  planetId: number;
  description: string;
}

interface iStarPosts {
  id: number;
  category: string;
  starName: string;
  startId: number;
  description: number;
}

interface iPlanetsContextProps {
  planetPosts: iPlanetsPosts[] | null;
  setPlanetPosts: Function;
  postsById: (id: number) => void;
  loading: boolean;
  setLoading: Function;
  showModalPost: boolean;
  setShowModalPost: Function;
  starPosts: iStarPosts[] | null;
  setStarPosts: Function;
  getStarPosts: () => void;
  category: string | null;
  astroName: string | null;
  currentPlanet: number;
  setCurrentPlanet: React.Dispatch<React.SetStateAction<number>>;
}

export const PostsContext = createContext({} as iPlanetsContextProps);

export const PostsProvider = ({ children }: iChildren) => {
  const [planetPosts, setPlanetPosts] = useState<iPlanetsPosts[] | null>([]);
  const [starPosts, setStarPosts] = useState<iStarPosts[] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModalPost, setShowModalPost] = useState<boolean>(false);
  const [category, setCategory] = useState<string | null>("");
  const [astroName, setAstroName] = useState<string | null>("");
  const [currentPlanet, setCurrentPlanet] = useState(1 as number);

  const location = useLocation();

  useEffect(() => {
    const formatedLocation = location.hash.substring(1);
    setCategory(formatedLocation);
  }, [location]);

  const postsById = async (id: number) => {
    setLoading(true);

    try {
      const response = await ApiRequests.get(`posts/?planetId=${id}`);
      setPlanetPosts(response.data);
      setAstroName(response.data[0].planetName);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const getStarPosts = async () => {
    setLoading(true);

    try {
      const response = await ApiRequests.get("posts/?category=estrelas");
      setStarPosts(response.data);
      setAstroName(response.data[0].starName);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <PostsContext.Provider
      value={{
        planetPosts,
        setPlanetPosts,
        postsById,
        loading,
        setLoading,
        showModalPost,
        setShowModalPost,
        starPosts,
        setStarPosts,
        getStarPosts,
        category,
        astroName,
        currentPlanet,
        setCurrentPlanet,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
