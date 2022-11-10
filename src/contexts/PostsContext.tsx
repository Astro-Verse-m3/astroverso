import { createContext, useState } from 'react';
import { ApiRequests } from '../services/ApiRequest';
import { iChildren } from './typeContext';

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
  showModal: boolean;
  setShowModal: Function;
  starPosts: iStarPosts[] | null;
  setStarPosts: Function;
  getStarPosts: () => void;
}

export const PostsContext = createContext({} as iPlanetsContextProps);

export const PostsProvider = ({ children }: iChildren) => {
  const [planetPosts, setPlanetPosts] = useState<iPlanetsPosts[] | null>([]);
  const [starPosts, setStarPosts] = useState<iStarPosts[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const postsById = async (id: number) => {
    setLoading(true);

    try {
      const response = await ApiRequests.get(`posts/?planetId=${id}`);
      setPlanetPosts(response.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const getStarPosts = async () => {
    setLoading(true);

    try {
      const response = await ApiRequests.get('?category=estrelas');
      setStarPosts(response.data);
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
        showModal,
        setShowModal,
        starPosts,
        setStarPosts,
        getStarPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
